import Link from "next/link";
import { getAllBlogPosts, BlogPost, markdownToHtml } from "../lib/markdown";

export default async function AllBlogsPage() {
  const rawBlogs: BlogPost[] = getAllBlogPosts();
  
  // Process markdown for titles and excerpts
  const allBlogs = await Promise.all(
    rawBlogs.map(async (item) => ({
      ...item,
      titleHtml: await markdownToHtml(item.title),
      excerptHtml: item.excerpt ? await markdownToHtml(item.excerpt) : null,
    }))
  );

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <Link href="/#blogs" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-foreground">Blogs</li>
          </ol>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            All Blogs
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Technical articles, insights, and deep-dives into AI, ML, and software development
          </p>
        </div>

        {allBlogs.length === 0 ? (
          <div className="text-center text-muted-foreground">No blog articles found.</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {allBlogs.map((item) => (
              <article key={item.slug} className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <time className="text-sm text-muted-foreground">
                        {new Intl.DateTimeFormat('en-US', {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }).format(new Date(item.date))}
                      </time>
                      {item.categories && (
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {item.categories.split(' ')[0]}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
                      <Link 
                        href={`/blogs/${item.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        <div dangerouslySetInnerHTML={{ __html: item.titleHtml }} />
                      </Link>
                    </h2>
                    {item.excerptHtml && (
                      <div className="text-muted-foreground leading-relaxed mb-4">
                        <div dangerouslySetInnerHTML={{ __html: item.excerptHtml }} />
                      </div>
                    )}
                    <Link 
                      href={`/blogs/${item.slug}`}
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
            href="/#blogs"
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
