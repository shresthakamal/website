import prisma from "@repo/db/client";
import Link from "next/link";
import { markdownToHtml } from "../../lib/markdown";
import { SectionNavigationButton } from "../ui/SectionNavigationButton";

type NewsItem = {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  date: Date;
};

export async function News() {
  let rawItems: NewsItem[] = [];
  
  try {
    rawItems = await prisma.news.findMany({
      where: { published: true },
      orderBy: { date: "desc" },
      take: 5,
      select: { id: true, slug: true, title: true, excerpt: true, date: true },
    });
  } catch (error) {
    console.warn("Database connection failed during build, using empty news array:", error);
    rawItems = [];
  }

  // Process markdown for titles and excerpts
  const items = await Promise.all(
    rawItems.map(async (item) => ({
      ...item,
      titleHtml: await markdownToHtml(item.title),
      excerptHtml: item.excerpt ? await markdownToHtml(item.excerpt) : null,
    }))
  );

  return (
    <section id="news" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-secondary/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest News
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recent highlights and updates
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center text-muted-foreground">No news yet.</div>
        ) : (
          <ol className="space-y-6">
            {items.map((item) => (
              <li key={item.id} className="border-b border-border pb-6 last:border-b-0">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-sm text-muted-foreground whitespace-nowrap">
                    {new Intl.DateTimeFormat('en-US', {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(item.date))}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                      <Link 
                        href={`/news/${item.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        <div dangerouslySetInnerHTML={{ __html: item.titleHtml }} />
                      </Link>
                    </h3>
                    {item.excerptHtml && (
                      <div className="text-muted-foreground mt-2 leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: item.excerptHtml }} />
                      </div>
                    )}
                    <Link 
                      href={`/news/${item.slug}`}
                      className="inline-flex items-center text-sm text-primary hover:text-primary/80 font-medium mt-2 transition-colors"
                    >
                      Read more
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        )}

        {/* View All News Link */}
        <div className="text-center mt-8 mb-24">
          <Link 
            href="/news"
            className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View All News
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <SectionNavigationButton nextSection="#blogs" nextSectionName="Blogs" />

      </div>
    </section>
  );
}


