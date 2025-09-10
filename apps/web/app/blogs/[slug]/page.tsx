import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPosts, markdownToHtml } from "../../lib/markdown";
import { getBlogComments, getBlogCommentCount } from "../../actions/comments";
import CommentSection from "../../components/comments/CommentSection";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;

  // Fetch the current blog post
  const article = getBlogPostBySlug(slug);

  if (!article) {
    notFound();
  }

  // Convert markdown content to HTML
  const contentHtml = await markdownToHtml(article.content);
  const titleHtml = await markdownToHtml(article.title);

  // Fetch related/previous blogs (excluding current article)
  const allBlogs = getAllBlogPosts();
  const relatedBlogs = allBlogs.filter(post => post.slug !== slug).slice(0, 5);

  // Fetch comments for this blog post
  let initialComments: Awaited<ReturnType<typeof getBlogComments>> = [];
  let initialCommentCount = 0;
  
  try {
    [initialComments, initialCommentCount] = await Promise.all([
      getBlogComments(slug),
      getBlogCommentCount(slug)
    ]);
  } catch (error) {
    console.warn("Failed to fetch comments:", error);
  }

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <li>
              <Link href="/blogs" className="hover:text-foreground transition-colors">
                Blogs
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-foreground">
              <div dangerouslySetInnerHTML={{ __html: titleHtml }} />
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <time className="text-sm text-muted-foreground">
              {new Intl.DateTimeFormat('en-US', {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(article.date))}
            </time>
            {article.categories && (
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {article.categories.split(' ')[0]}
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <div dangerouslySetInnerHTML={{ __html: titleHtml }} />
          </h1>
          {article.excerpt && (
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>
          )}
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12 dark:prose-invert">
          <div 
            className="text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <aside className="border-t border-border pt-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              More Blogs
            </h2>
            <div className="space-y-4">
              {relatedBlogs.map((blog) => (
                <div key={blog.slug} className="flex items-start gap-4 p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors">
                  <time className="text-sm text-muted-foreground whitespace-nowrap mt-1">
                    {new Intl.DateTimeFormat('en-US', {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    }).format(new Date(blog.date))}
                  </time>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">
                      <Link 
                        href={`/blogs/${blog.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {blog.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
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
          </aside>
        )}

        {/* Comments Section */}
        <CommentSection
          blogSlug={slug}
          initialComments={initialComments}
          initialCount={initialCommentCount}
        />

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link 
            href="/blogs"
            className="inline-flex items-center px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Blogs
          </Link>
          <Link 
            href="/#blogs"
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

// Generate static params for better performance
export async function generateStaticParams() {
  const allBlogs = getAllBlogPosts();

  return allBlogs.map((item) => ({
    slug: item.slug,
  }));
}
