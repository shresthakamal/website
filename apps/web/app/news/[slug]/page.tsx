import prisma from "@repo/db/client";
import Link from "next/link";
import { notFound } from "next/navigation";

type NewsArticle = {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string | null;
  date: Date;
  featured: boolean;
};

type RelatedNews = {
  id: number;
  slug: string;
  title: string;
  date: Date;
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = params;

  // Fetch the current article
  const article: NewsArticle | null = await prisma.news.findFirst({
    where: { 
      slug: slug,
      published: true 
    },
    select: {
      id: true,
      slug: true,
      title: true,
      content: true,
      excerpt: true,
      date: true,
      featured: true,
    },
  });

  if (!article) {
    notFound();
  }

  // Fetch related/previous news (excluding current article)
  const relatedNews: RelatedNews[] = await prisma.news.findMany({
    where: { 
      published: true,
      id: { not: article.id }
    },
    orderBy: { date: "desc" },
    take: 5,
    select: {
      id: true,
      slug: true,
      title: true,
      date: true,
    },
  });

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <Link href="/#news" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <Link href="/news" className="hover:text-foreground transition-colors">
                News
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-foreground">{article.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <time className="text-sm text-muted-foreground">
              {new Intl.DateTimeFormat(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(article.date))}
            </time>
            {article.featured && (
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Featured
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {article.title}
          </h1>
          {article.excerpt && (
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>
          )}
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div className="text-foreground leading-relaxed whitespace-pre-wrap">
            {article.content}
          </div>
        </article>

        {/* Related News */}
        {relatedNews.length > 0 && (
          <aside className="border-t border-border pt-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              More News
            </h2>
            <div className="space-y-4">
              {relatedNews.map((news) => (
                <div key={news.id} className="flex items-start gap-4 p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors">
                  <time className="text-sm text-muted-foreground whitespace-nowrap mt-1">
                    {new Intl.DateTimeFormat(undefined, {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    }).format(new Date(news.date))}
                  </time>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">
                      <Link 
                        href={`/news/${news.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {news.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link 
                href="/news"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                View All News
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </aside>
        )}

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link 
            href="/news"
            className="inline-flex items-center px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All News
          </Link>
          <Link 
            href="/#news"
            className="inline-flex items-center px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

// Generate static params for better performance (optional)
export async function generateStaticParams() {
  const news = await prisma.news.findMany({
    where: { published: true },
    select: { slug: true },
  });

  return news.map((item) => ({
    slug: item.slug,
  }));
}
