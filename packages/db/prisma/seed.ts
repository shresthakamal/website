import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Starting database seeding...');

    // Sample user data with plain text passwords
    const users = [
        {
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'password123',
        },
        {
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            password: 'demo456',
        },
        {
            name: 'Admin User',
            email: 'admin@example.com',
            password: 'admin789',
        },
        {
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com',
            password: 'user2024',
        },
        {
            name: 'Bob Wilson',
            email: 'bob.wilson@example.com',
            password: 'secure123',
        },
        {
            name: null, // Testing optional name field
            email: 'anonymous@example.com',
            password: 'anonymous123',
        },
    ];

    // Insert users using upsert to avoid duplicates
    for (const user of users) {
        await prisma.user.upsert({
            where: { email: user.email },
            update: {},
            create: user,
        });
        console.log(`✓ Created/updated user: ${user.email}`);
    }

    console.log('Database seeding completed!');
    console.log(`Created ${users.length} users`);
}

main()
    .catch((e) => {
        console.error('Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 