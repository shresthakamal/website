import prisma from "@repo/db/client";
import Link from "next/link";

type NewsItem = {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  date: Date;
  featured: boolean;
};

export default async function AllNewsPage() {
  const allNews: NewsItem[] = await prisma.news.findMany({
    where: { published: true },
    orderBy: { date: "desc" },
    select: { 
      id: true, 
      slug: true, 
      title: true, 
      excerpt: true, 
      date: true,
      featured: true 
    },
  });

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <li className="text-foreground">News</li>
          </ol>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            All News
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Complete archive of news and updates
          </p>
        </div>

        {allNews.length === 0 ? (
          <div className="text-center text-muted-foreground">No news articles found.</div>
        ) : (
          <div className="space-y-8">
            {allNews.map((item) => (
              <article key={item.id} className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <time className="text-sm text-muted-foreground">
                        {new Intl.DateTimeFormat(undefined, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }).format(new Date(item.date))}
                      </time>
                      {item.featured && (
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
                      <Link 
                        href={`/news/${item.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    </h2>
                    {item.excerpt && (
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {item.excerpt}
                      </p>
                    )}
                    <Link 
                      href={`/news/${item.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link 
            href="/#news"
            className="inline-flex items-center px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
