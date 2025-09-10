import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description?: string;
  categories?: string;
  content: string;
  rawContent: string;
  excerpt?: string;
}

const blogsDirectory = path.join(process.cwd(), 'public', 'blogs');

export function getAllBlogPosts(): BlogPost[] {
  // Get all markdown files from blogs directory
  const fileNames = fs.readdirSync(blogsDirectory)
    .filter(name => name.endsWith('.md') && name.includes('2024-'));

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Extract first paragraph as excerpt if not provided
    const excerpt = matterResult.data.description || extractExcerpt(matterResult.content);

    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date ? new Date(matterResult.data.date).toISOString() : fileName.substring(0, 10),
      description: matterResult.data.description,
      categories: matterResult.data.categories,
      content: matterResult.content,
      rawContent: fileContents,
      excerpt,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const excerpt = matterResult.data.description || extractExcerpt(matterResult.content);

    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date ? new Date(matterResult.data.date).toISOString() : slug.substring(0, 10),
      description: matterResult.data.description,
      categories: matterResult.data.categories,
      content: matterResult.content,
      rawContent: fileContents,
      excerpt,
    };
  } catch (error) {
    return null;
  }
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(markdown);
  return result.toString();
}

function extractExcerpt(content: string): string {
  // Remove HTML tags and extract first paragraph
  const plainText = content.replace(/<[^>]*>/g, '').replace(/\n+/g, ' ').trim();
  const firstParagraph = plainText.split('\n')[0];
  
  // Limit to 200 characters
  if (firstParagraph.length > 200) {
    return firstParagraph.substring(0, 200) + '...';
  }
  
  return firstParagraph;
}

export function getBlogSlugs(): string[] {
  const fileNames = fs.readdirSync(blogsDirectory)
    .filter(name => name.endsWith('.md') && name.includes('2024-'));
  
  return fileNames.map(fileName => fileName.replace(/\.md$/, ''));
}
