import { PrismaClient } from '@prisma/client';
import { seedNews } from '../scripts/seed-news.js';

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

    // Sample experience data based on the Experience component
    const experiences = [
        {
            title: "Senior Machine Learning Engineer, GenAI for Enterprise Applications",
            company: "GoDaddy Inc.",
            location: "Remote, Bengaluru, India",
            period: "January 2025 - Present",
            type: "Full-time",
            description: "Working on employee productivity and business evaluation with available LLM SaaS to streamline repetitive workflows, configure automation and boost productivity. Building agentic AI-driven data service layer with centrally governed MCP gateway.",
            achievements: [
                "Aiming to reduce manual tracking of AI tool usage by 50%+ across employees",
                "Building unified data service layer for enterprise applications (Microsoft, Atlassian, Slack, SNOW, GitHub)",
                "Improving visibility into AI tool adoption across corporate functions",
                "Promoting AI-first culture and assisting developers with productivity tools"
            ],
            technologies: ["LLM SaaS", "ChatGPT", "M365 Copilot", "GitHub Copilot", "Claude Enterprise", "MCP Gateway", "Agentic AI"],
            logoType: "godaddy",
            startYear: 2025,
            sortOrder: 1
        },
        {
            title: "Machine Learning Engineer",
            company: "Research & Technology Center, BOSCH Global Software Technologies (BGSW)",
            location: "Bengaluru, Karnataka, India",
            period: "August 2023 - January 2025",
            type: "Full-time",
            description: "Led high-impact projects utilizing custom fine-tuned LLMs on 2TB+ of unstructured enterprise data to enable agentic collaboration and RAG for streamlined workflows, enhancing operational efficiency for 500+ users.",
            achievements: [
                "Received Bravo Award X3 for excellent rigor and engineering skills in GenAI use cases",
                "Developed novel deep learning model for legal document classification achieving €10M annual savings",
                "Led projects with custom fine-tuned LLMs on 2TB+ enterprise data for 500+ users",
                "Pursued research on advanced document processing, Graph RAG, and multimodal approaches",
                "Fine-tuned open-source models like Llama3 for custom enterprise data understanding"
            ],
            technologies: ["LLMs", "RAG", "Fine-tuning", "PyTorch", "Transformers", "Langchain", "Llama3", "Graph RAG"],
            logoPath: "/assets/img/bosch/team.jpg",
            logoType: "bosch",
            startYear: 2023,
            sortOrder: 2
        },
        {
            title: "Applied AI Consultant specializing in LLMs",
            company: "Veritus",
            location: "Kobe, Hyogo, Japan",
            period: "August 2024 - September 2024",
            type: "Contract",
            description: "Provided advisory support and guidance on strategic decision-making in LLM application development for Retrieval-Augmented Generation (RAG), fine-tuning LLM Models, deployment with Microsoft Azure.",
            achievements: [
                "Specialized in applying LLMs for enterprise-level RAG solutions",
                "Developed custom fine-tune solutions for client requirements",
                "Guided strategic decisions for LLM deployment on Microsoft Azure"
            ],
            technologies: ["LLMs", "RAG", "Microsoft Azure", "Fine-tuning", "Enterprise Solutions"],
            logoType: "veritus",
            startYear: 2024,
            sortOrder: 3
        },
        {
            title: "Machine Learning Engineer and Curriculum Engineer",
            company: "Fusemachines",
            location: "Kathmandu, Nepal",
            period: "July 2020 - December 2021",
            type: "Full-time",
            description: "Designed and developed Fuse Studio, an automated video generation platform. Worked as lead curriculum engineer and represented company as industry expert in teaching CS concepts.",
            achievements: [
                "Designed Fuse Studio - automated video generation platform reducing manual recording time by 75%",
                "Awarded top impact project in in-house hackathon for Fuse Studio",
                "Remodeled Question Answering and Difficulty Ranking Model with enhanced representations",
                "Taught CS concepts to students at Q.I. Roberts Jr-Sr High School, Florida, USA",
                "Led curriculum engineering for undergrad focused courses like DL and NLP"
            ],
            technologies: ["Tacotron2", "GlowTTs", "MelGAN", "BERT", "FastAPI", "MongoDB", "Elastic Search", "TTS"],
            logoType: "fusemachines",
            startYear: 2020,
            sortOrder: 4
        },
        {
            title: "Course Instructor - Introduction to Artificial Intelligence",
            company: "Q.I. Roberts Jr. - Sr. High School",
            location: "Florida, United States",
            period: "August 2021 - December 2021",
            type: "Part-time",
            description: "Designed and instructed daily lesson plans, coding sessions, and online lectures for 'Computer Science for AI' to high school students in the US and undergraduate students in Nepal.",
            achievements: [
                "Received overall rating of 4.65/5 from Nepal students and 4.35/5 from US students",
                "Taught 18 high school students in the US and 60 undergraduate students in Nepal",
                "Covered topics: AI fundamentals, Python programming, data structures, database management"
            ],
            technologies: ["Python", "AI Fundamentals", "Data Structures", "Database Management"],
            logoType: "school",
            startYear: 2021,
            sortOrder: 5
        },
        {
            title: "Course Instructor - Computer Science in AI",
            company: "Herald College (Fuse AI Center)",
            location: "Kathmandu, Nepal",
            period: "July 2021 - November 2021",
            type: "Part-time",
            description: "Instructed foundational AI and Computer Science courses for bachelor-level students (B. IT 3rd Year).",
            achievements: [
                "Taught comprehensive curriculum covering AI fundamentals to web frameworks",
                "Covered Linux, networks, Python programming, scientific Python, and deployment",
                "Designed course materials for Software Development Lifecycle and Web Frameworks"
            ],
            technologies: ["Python", "Linux", "Web Frameworks", "SQL", "NoSQL", "Scientific Python"],
            logoType: "herald",
            startYear: 2021,
            sortOrder: 6
        },
        {
            title: "ML Engineer Associate Trainee",
            company: "Fusemachines",
            location: "Kathmandu, Nepal",
            period: "July 2020 - February 2021",
            type: "Full-time",
            description: "Focused on writing interactive student-engaging materials on Deep Learning, Machine Learning, and Natural Language Processing.",
            achievements: [
                "Developed machine learning models for classification and regression on structured data",
                "Worked with ML lifecycle tools like Flask, Docker, Heroku, mlflow, Tensorboard",
                "Created interactive educational content for AI/ML programs"
            ],
            technologies: ["Flask", "Docker", "Heroku", "MLflow", "Tensorboard", "Scikit-learn"],
            logoType: "fusemachines",
            startYear: 2020,
            sortOrder: 7
        }
    ];

    // Insert experiences using upsert to avoid duplicates
    for (const experience of experiences) {
        await prisma.experience.upsert({
            where: { 
                title_company: {
                    title: experience.title,
                    company: experience.company
                }
            },
            update: {},
            create: experience,
        });
        console.log(`✓ Created/updated experience: ${experience.title} at ${experience.company}`);
    }

    // Seed news items
    console.log('\n🗞️  Seeding news...');
    await seedNews();

    console.log('\n✅ Database seeding completed!');
    console.log(`Created ${users.length} users`);
    console.log(`Created ${experiences.length} experiences`);
}

main()
    .catch((e) => {
        console.error('Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 