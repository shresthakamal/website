#!/usr/bin/env tsx

/**
 * Preview script to show what news data would be seeded
 * This runs without requiring a database connection
 * 
 * Usage:
 *   npx tsx scripts/preview-news.ts
 */

import { dryRunNews } from './seed-news.js';

console.log('🗞️  News Preview Script');
console.log('========================\n');
console.log('This script shows what news items would be seeded from the markdown files');
console.log('without requiring a database connection.\n');

dryRunNews()
  .then(() => {
    console.log('\n🎉 News preview completed successfully!');
    console.log('\nTo actually seed the database:');
    console.log('1. Set up your DATABASE_URL environment variable');
    console.log('2. Run: npm run seed:news');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ News preview failed:', error);
    process.exit(1);
  });
