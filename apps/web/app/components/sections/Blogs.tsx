import Link from "next/link";
import { getAllBlogPosts, BlogPost, markdownToHtml } from "../../lib/markdown";

export async function Blogs() {
  const allPosts = getAllBlogPosts();
  const rawItems: BlogPost[] = allPosts.slice(0, 3);
  
  // Process markdown for titles and excerpts
  const items = await Promise.all(
    rawItems.map(async (item) => ({
      ...item,
      titleHtml: await markdownToHtml(item.title),
      excerptHtml: item.excerpt ? await markdownToHtml(item.excerpt) : null,
    }))
  );

  return (
    <section id="blogs" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest Blogs
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Technical articles and insights on AI, ML, and software development
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center text-muted-foreground">No blogs yet.</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <article key={item.slug} className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/20">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <time className="text-sm text-muted-foreground">
                      {new Intl.DateTimeFormat(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      }).format(new Date(item.date))}
                    </time>
                    {item.categories && (
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {item.categories.split(' ')[0]}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                    <Link 
                      href={`/blogs/${item.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      <div dangerouslySetInnerHTML={{ __html: item.titleHtml }} />
                    </Link>
                  </h3>
                  
                  {item.excerptHtml && (
                    <div className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
                      <div dangerouslySetInnerHTML={{ __html: item.excerptHtml }} />
                    </div>
                  )}
                  
                  <Link 
                    href={`/blogs/${item.slug}`}
                    className="inline-flex items-center text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Read more
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* View All Blogs Link */}
        <div className="text-center mt-12">
          <Link 
            href="/blogs"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View All Blogs
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
