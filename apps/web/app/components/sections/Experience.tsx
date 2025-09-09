"use client";

export function Experience() {
  const experiences = [
    {
      title: "Senior Applied Research Engineer",
      company: "BOSCH Global Software Technology (BGSW)",
      location: "Bengaluru, Karnataka, India",
      period: "August 2023 - Present",
      type: "Full-time",
      description: "Working on high-impact projects leveraging Large Language Models (LLMs), both open-source and proprietary. Customizing production-generated datasets and introducing interactive agents to streamline workflows.",
      achievements: [
        "Received Stand out Performer Award from NLP Cluster at RTC-IN @BOSCH (April 2024)",
        "Panelist at The GenAI Summit by Inc24 @ JW Marriot Hotel, Bengaluru (April 2024)",
        "Official contributor to Langgraph, specifically changes to agentic_rag (March 2024)",
        "Received Bravo Award for completing first Generative AI PoC within 3 months",
        "Received Shabash Bravo Award for excellent work (December 2023)"
      ],
      technologies: ["LLMs", "RAG", "Fine-tuning", "PyTorch", "Transformers", "Langchain"]
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
      technologies: ["LLMs", "RAG", "Microsoft Azure", "Fine-tuning", "Enterprise Solutions"]
    },
    {
      title: "Machine Learning Engineer Associate",
      company: "Fusemachines",
      location: "Kathmandu, Nepal",
      period: "February 2021 - December 2021",
      type: "Full-time",
      description: "Worked on client-based and in-house projects covering all stages of applied ML, DL, and NLP. Served as lead curriculum engineer for AI education programs.",
      achievements: [
        "Designed fully automated Video and Text-to-Speech Generation System using Tacotron2, GlowTTs, and MelGAN",
        "Remodeled Questions Answering and Difficulty Ranking Model with BERT and Ensemble models",
        "Developed Content Recommendation System using Elastic Search, MongoDB, and FastAPI",
        "Led curriculum engineering for Fusemachines AI Education Programs"
      ],
      technologies: ["BERT", "Tacotron2", "GlowTTs", "MelGAN", "FastAPI", "MongoDB", "Elastic Search"]
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
      technologies: ["Python", "AI Fundamentals", "Data Structures", "Database Management"]
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
      technologies: ["Python", "Linux", "Web Frameworks", "SQL", "NoSQL", "Scientific Python"]
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
      technologies: ["Flask", "Docker", "Heroku", "MLflow", "Tensorboard", "Scikit-learn"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through AI research, engineering, and education across multiple organizations and continents
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-background rounded-lg border border-border p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-muted-foreground">
                    <span>{exp.location}</span>
                    <span className="hidden sm:block">•</span>
                    <span>{exp.period}</span>
                    <span className="hidden sm:block">•</span>
                    <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              {exp.achievements && exp.achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Experience Summary */}
        <div className="mt-16 bg-background rounded-lg border border-border p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4">Additional Experience</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-foreground mb-2">Leadership & Community</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• ACM - IIT Hyderabad Student Chapter - ML Moderator (11 months)</li>
                <li>• IT MEET v8.0 Documentation Lead and Marketing Representative</li>
                <li>• Executive Board Member at Kathmandu University Computer Club</li>
                <li>• Ambassador for Em-Blood Android Application with Nepal Red Cross</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Volunteer Work</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• IT Meet Photography Contest Event Coordinator</li>
                <li>• Medical Volunteer for Basketball Tournament with Nepal Red Cross</li>
                <li>• Organized workshops and awareness campaigns</li>
                <li>• Managed teams and secured funding for various initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
