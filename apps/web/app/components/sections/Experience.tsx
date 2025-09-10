"use client";

export function Experience() {
  // Function to render company logo for timeline
  const renderTimelineLogo = (logoPath?: string, logoType?: string, companyName?: string) => {
    if (logoPath) {
      return (
        <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center overflow-hidden shadow-lg">
          <img 
            src={logoPath} 
            alt={companyName || "Company logo"}
            className="w-8 h-8 object-contain"
          />
        </div>
      );
    }

    const logoConfig = {
      godaddy: { bg: "bg-emerald-500", text: "text-white", initial: "G" },
      bosch: { bg: "bg-blue-500", text: "text-white", initial: "B" },
      veritus: { bg: "bg-green-500", text: "text-white", initial: "V" },
      fusemachines: { bg: "bg-purple-500", text: "text-white", initial: "F" },
      school: { bg: "bg-orange-500", text: "text-white", initial: "S" },
      herald: { bg: "bg-red-500", text: "text-white", initial: "H" },
    };
    
    const config = logoConfig[logoType as keyof typeof logoConfig] || logoConfig.fusemachines;
    
    return (
      <div className={`w-12 h-12 rounded-full ${config.bg} flex items-center justify-center border-2 border-white shadow-lg`}>
        <span className={`text-lg font-bold ${config.text}`}>{config.initial}</span>
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

  // Extract year from period string
  const getStartYear = (period: string) => {
    const match = period.match(/(\d{4})/);
    return match ? parseInt(match[1] || "2020") : 2020;
  };

  // Render experience content component
  const renderExperienceContent = (exp: typeof experiences[0]) => (
    <div className="bg-background rounded-2xl border border-border p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:scale-[1.02]">
      {/* Period Badge */}
      <div className="inline-flex items-center mb-4">
        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
          {exp.period}
        </span>
      </div>
      
      {/* Job Details */}
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 leading-tight">
        {exp.title}
      </h3>
      
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-primary font-semibold text-base sm:text-lg">{exp.company}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {exp.location}
          </span>
          <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
          <span className="px-2 py-1 bg-accent/50 text-accent-foreground rounded text-xs font-medium">
            {exp.type}
          </span>
        </div>
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {exp.description}
      </p>

      {/* Key Achievements */}
      {exp.achievements && exp.achievements.length > 0 && (
        <div className="mb-4 sm:mb-6">
          <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3 uppercase tracking-wide">Key Achievements</h4>
          <ul className="space-y-1 sm:space-y-2">
            {exp.achievements.slice(0, 3).map((achievement, achIndex) => (
              <li key={achIndex} className="flex items-start space-x-2 sm:space-x-3 text-xs sm:text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
            {exp.achievements.length > 3 && (
              <li className="text-xs sm:text-sm text-primary font-medium pl-4 sm:pl-5">
                +{exp.achievements.length - 3} more achievements
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {exp.technologies.slice(0, 6).map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 sm:px-3 py-1 bg-muted/50 text-muted-foreground rounded-md text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors border border-border/50"
          >
            {tech}
          </span>
        ))}
        {exp.technologies.length > 6 && (
          <span className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium border border-primary/20">
            +{exp.technologies.length - 6} more
          </span>
        )}
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-8xl mx-auto px-2 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Journey
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A timeline of AI research, engineering, and education across multiple organizations and continents
          </p>
        </div>

        {/* Timeline Container - Mobile Responsive */}
        <div className="relative w-full">
          {/* Timeline Line - Responsive positioning */}
          <div className="absolute left-8 sm:left-12 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary z-0"></div>
          
          {/* Timeline Items - Responsive containers */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => {
              const year = getStartYear(exp.period);
              const isLeft = index % 2 === 1;
              
              return (
                <div key={index} className="relative flex items-center min-h-[120px]">
                  {/* Timeline Node - Responsive positioning */}
                  <div className="absolute left-2 sm:left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-20">
                    <div className="flex flex-col items-center">
                      <div className="mb-1 md:mb-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                        {year}
                      </div>
                      {renderTimelineLogo(exp.logoPath, exp.logoType, exp.company)}
                    </div>
                  </div>
                  
                  {/* Mobile-First Content Containers */}
                  <div className="w-full flex">
                    {/* Mobile: All content on right side */}
                    <div className="w-full md:hidden">
                      <div className="ml-20 sm:ml-24">
                        {renderExperienceContent(exp)}
                      </div>
                    </div>
                    
                    {/* Desktop: Alternating left/right */}
                    <div className="hidden md:flex w-full">
                      {/* Left Side Container */}
                      {isLeft && (
                        <div className="w-full pr-4 lg:pr-6 flex justify-end">
                          <div className="w-full max-w-3xl">
                            {renderExperienceContent(exp)}
                          </div>
                        </div>
                      )}
                      
                      {/* Right Side Container */}
                      {!isLeft && (
                        <div className="w-full pl-4 lg:pl-6 flex justify-start">
                          <div className="w-full max-w-3xl">
                            {renderExperienceContent(exp)}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
