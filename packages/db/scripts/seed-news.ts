import { PrismaClient } from '@prisma/client';
import matter from 'gray-matter';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();

interface NewsData {
  slug: string;
  title: string;
  content: string;
  excerpt?: string;
  published: boolean;
  featured: boolean;
  date: Date;
}

function parseNewsFile(filePath: string, slug: string): NewsData {
  const fileContent = readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  
  // Extract title from frontmatter or use filename as fallback
  let title = data.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Clean HTML tags from title for database storage
  title = title.replace(/<[^>]*>/g, '').trim();
  
  // Parse date - handle different date formats
  let parsedDate: Date;
  if (data.date) {
    if (typeof data.date === 'string') {
      // Handle different date formats
      if (data.date.includes('T') || data.date.includes(' ')) {
        parsedDate = new Date(data.date);
      } else {
        // For dates like "2023-12-25", add time to avoid timezone issues
        parsedDate = new Date(data.date + 'T12:00:00Z');
      }
    } else {
      parsedDate = new Date(data.date);
    }
  } else {
    // Fallback: try to extract date from filename
    const dateMatch = slug.match(/^(\d{4}-\d{2}-\d{2})/);
    if (dateMatch) {
      parsedDate = new Date(dateMatch[1] + 'T12:00:00Z');
    } else {
      parsedDate = new Date();
    }
  }
  
  // Generate excerpt from content (first 200 characters, clean HTML)
  let excerpt = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim()
    .substring(0, 200);
  
  if (excerpt.length === 200) {
    excerpt += '...';
  }
  
  // Determine if this should be featured (longer content or specific keywords)
  const featured = content.length > 1000 || 
                  title.toLowerCase().includes('award') ||
                  title.toLowerCase().includes('graduated') ||
                  title.toLowerCase().includes('joined') ||
                  title.toLowerCase().includes('defense');
  
  return {
    slug,
    title,
    content,
    excerpt: excerpt || undefined,
    published: data.published !== false, // Default to true unless explicitly false
    featured,
    date: parsedDate
  };
}

async function seedNews(dryRun: boolean = false) {
  console.log(`Starting news seeding${dryRun ? ' (DRY RUN)' : ''}...`);
  
  // Path to news files
  const newsDir = join(process.cwd(), '../../apps/web/public/news');
  
  try {
    const files = readdirSync(newsDir).filter(file => file.endsWith('.md'));
    console.log(`Found ${files.length} news files to process`);
    
    const newsItems: NewsData[] = [];
    
    for (const file of files) {
      const slug = file.replace('.md', '');
      const filePath = join(newsDir, file);
      
      try {
        const newsData = parseNewsFile(filePath, slug);
        newsItems.push(newsData);
        console.log(`✓ Parsed: ${newsData.title.substring(0, 50)}...`);
      } catch (error) {
        console.error(`❌ Error parsing ${file}:`, error);
      }
    }
    
    // Sort by date (newest first)
    newsItems.sort((a, b) => b.date.getTime() - a.date.getTime());
    
    // Insert news items using upsert to avoid duplicates
    if (dryRun) {
      console.log('\n📋 DRY RUN - News items that would be seeded:');
      newsItems.forEach((newsItem, index) => {
        console.log(`${index + 1}. ${newsItem.title}`);
        console.log(`   Slug: ${newsItem.slug}`);
        console.log(`   Date: ${newsItem.date.toISOString().split('T')[0]}`);
        console.log(`   Featured: ${newsItem.featured ? '✨ Yes' : 'No'}`);
        console.log(`   Content length: ${newsItem.content.length} chars`);
        console.log(`   Excerpt: ${newsItem.excerpt?.substring(0, 100)}...`);
        console.log('');
      });
    } else {
      for (const newsItem of newsItems) {
        await prisma.news.upsert({
          where: { slug: newsItem.slug },
          update: {
            title: newsItem.title,
            content: newsItem.content,
            excerpt: newsItem.excerpt,
            published: newsItem.published,
            featured: newsItem.featured,
            date: newsItem.date,
          },
          create: newsItem,
        });
        console.log(`✓ Seeded news: ${newsItem.title.substring(0, 50)}...`);
      }
    }
    
    console.log(`\n🎉 Successfully seeded ${newsItems.length} news items!`);
    
    // Display some stats
    const featuredCount = newsItems.filter(item => item.featured).length;
    const publishedCount = newsItems.filter(item => item.published).length;
    
    console.log(`📊 Stats:`);
    console.log(`   - Total news items: ${newsItems.length}`);
    console.log(`   - Published: ${publishedCount}`);
    console.log(`   - Featured: ${featuredCount}`);
    console.log(`   - Date range: ${newsItems[newsItems.length - 1]?.date.toISOString().split('T')[0]} to ${newsItems[0]?.date.toISOString().split('T')[0]}`);
    
  } catch (error) {
    console.error('❌ Error reading news directory:', error);
    throw error;
  }
}

async function main() {
  try {
    await seedNews();
  } catch (error) {
    console.error('Error during news seeding:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

export async function dryRunNews() {
  return await seedNews(true);
}

// Run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { seedNews };
