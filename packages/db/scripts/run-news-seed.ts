#!/usr/bin/env tsx

/**
 * Standalone script to seed news data from markdown files
 * 
 * Usage:
 *   npx tsx scripts/run-news-seed.ts
 *   
 * This script will:
 * 1. Parse all .md files in the news directory
 * 2. Extract frontmatter (title, date, etc.) and content
 * 3. Clean and format the data
 * 4. Insert/update records in the database
 */

import { seedNews } from './seed-news.js';

console.log('🗞️  News Seeding Script');
console.log('========================\n');

seedNews()
  .then(() => {
    console.log('\n🎉 News seeding completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ News seeding failed:', error);
    process.exit(1);
  });
