"use client";

export function Experience() {
  // Function to render company logo
  const renderLogo = (logoPath?: string, logoType?: string, companyName?: string) => {
    if (logoPath) {
      return (
        <div className="w-16 h-16 rounded-xl bg-background border border-border flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img 
            src={logoPath} 
            alt={companyName || "Company logo"}
            className="w-12 h-12 object-contain"
          />
        </div>
      );
    }

    const logoConfig = {
      godaddy: { bg: "bg-emerald-100 dark:bg-emerald-900", text: "text-emerald-600 dark:text-emerald-300", initial: "G" },
      bosch: { bg: "bg-blue-100 dark:bg-blue-900", text: "text-blue-600 dark:text-blue-300", initial: "B" },
      veritus: { bg: "bg-green-100 dark:bg-green-900", text: "text-green-600 dark:text-green-300", initial: "V" },
      fusemachines: { bg: "bg-purple-100 dark:bg-purple-900", text: "text-purple-600 dark:text-purple-300", initial: "F" },
      school: { bg: "bg-orange-100 dark:bg-orange-900", text: "text-orange-600 dark:text-orange-300", initial: "S" },
      herald: { bg: "bg-red-100 dark:bg-red-900", text: "text-red-600 dark:text-red-300", initial: "H" },
    };
    
    const config = logoConfig[logoType as keyof typeof logoConfig] || logoConfig.fusemachines;
    
    return (
      <div className={`w-16 h-16 rounded-xl ${config.bg} flex items-center justify-center flex-shrink-0`}>
        <span className={`text-2xl font-bold ${config.text}`}>{config.initial}</span>
      </div>
    );
  };

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
      logoType: "godaddy"
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
      logoType: "bosch"
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
      logoType: "veritus"
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
      logoType: "fusemachines"
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
      logoType: "school"
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
      logoType: "herald"
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
      logoType: "fusemachines"
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey through AI research, engineering, and education across multiple organizations and continents
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-background rounded-xl border border-border p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/20">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-6">
                {/* Company Logo */}
                <div className="flex justify-center lg:justify-start">
                  {renderLogo(exp.logoPath, exp.logoType, exp.company)}
                </div>
                
                {/* Experience Details */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium text-lg mb-3">{exp.company}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start sm:space-x-4 text-base text-muted-foreground mb-2">
                    <span>{exp.location}</span>
                    <span className="hidden sm:block">•</span>
                    <span>{exp.period}</span>
                    <span className="hidden sm:block">•</span>
                    <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                {exp.description}
              </p>

              {exp.achievements && exp.achievements.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-base font-semibold text-foreground mb-4">Key Achievements:</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-3 text-base text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Experience Summary */}
        <div className="mt-20 bg-background rounded-xl border border-border p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Additional Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground mb-4 text-lg">Leadership & Community</h4>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>ACM - IIT Hyderabad Student Chapter - ML Moderator (11 months)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>IT MEET v8.0 Documentation Lead and Marketing Representative</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Executive Board Member at Kathmandu University Computer Club</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Ambassador for Em-Blood Android Application with Nepal Red Cross</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground mb-4 text-lg">Volunteer Work</h4>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>IT Meet Photography Contest Event Coordinator</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Medical Volunteer for Basketball Tournament with Nepal Red Cross</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Organized workshops and awareness campaigns</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Managed teams and secured funding for various initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
