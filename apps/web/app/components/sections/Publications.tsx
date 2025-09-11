"use client";

import { SectionNavigationButton } from "../ui/SectionNavigationButton";

export function Publications() {
  // Function to render publication image
  const renderPublicationImage = (imagePath: string, title: string) => {
    return (
      <div className="w-full h-40 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800">
        <img 
          src={imagePath} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  const publications = [
    {
      title: "Hostility Detection in Online Hindi-English Code-Mixed Conversations",
      authors: ["Kamal Shrestha", "Aditi Bagora", "Kaushal Maurya", "and others"],
      venue: "WebSci '22: 14th ACM Web Science Conference 2022",
      date: "June 2022",
      type: "Conference Paper",
      abstract: "This paper proposes a novel hierarchical neural network architecture to identify hostile posts/comments/replies in online Hindi-English Code-Mixed conversations, leveraging multilingual pre-trained (mLPT) models like mBERT, XLMR, and MuRIL.",
      keywords: ["Hostility Detection", "Code-Mixed Text", "Multilingual NLP", "Social Media Analysis"],
      doi: "10.1145/3501247.3531594",
      status: "Published",
      imagePath: "/assets/img/publication_preview/fake_news.png"
    },
    {
      title: "A Machine Learning Approach to Identify Fake News",
      authors: ["Kamal Shrestha", "Prakash Poudyal", "Jeevan Karki", "Deepak Ranabhat"],
      venue: "Center for Project Management and Information Systems (PMIS) Review",
      date: "2022",
      type: "Journal Article",
      abstract: "This paper presents a classification model using lexical and semantic features from news articles and sources to filter out fake content. Multiple algorithms including Naive Bayes, Support Vector Machine, Logistic Regression, and k-NN were evaluated, with k-NN and Logistic Regression yielding promising results.",
      keywords: ["Fake News Detection", "Machine Learning", "NLP", "Word Embeddings"],
      status: "Published",
      imagePath: "/assets/img/publication_preview/clickbait.png"
    }
  ];

  const researchInterests = [
    {
      area: "Applied Natural Language Processing",
      description: "Focus on real-world applications of NLP techniques for enterprise solutions and business applications",
      topics: ["Enterprise NLP", "Document Processing", "Multilingual Systems", "Content Analysis"]
    },
    {
      area: "GenAI for Enterprise Applications",
      description: "Building and deploying generative AI solutions that drive tangible business outcomes",
      topics: ["LLM Fine-tuning", "Agentic AI Systems", "Enterprise Integration", "Productivity Tools"]
    },
    {
      area: "End-to-End ML/DL Pipelines",
      description: "Comprehensive ML lifecycle management from data preprocessing to deployment and maintenance",
      topics: ["MLOps", "Model Deployment", "Pipeline Optimization", "Scalable Solutions"]
    },
    {
      area: "Retrieval-Augmented Generation",
      description: "Advanced RAG techniques for enterprise data and knowledge management systems",
      topics: ["Graph RAG", "Multimodal RAG", "Document Retrieval", "Knowledge Systems"]
    }
  ];

  const upcomingWork = [
    {
      title: "Agentic AI-Driven Data Service Layer with MCP Gateway",
      status: "In Progress",
      description: "Building centrally governed MCP gateway for optimized data retrieval across enterprise applications at GoDaddy"
    },
    {
      title: "Employee Productivity Optimization with LLM SaaS",
      status: "In Progress",
      description: "Reducing manual tracking of AI tool usage by 50%+ and improving visibility into AI adoption across corporate functions"
    },
    {
      title: "Advanced Document Processing and Graph RAG",
      status: "Research",
      description: "Exploring novel approaches to document processing and Graph RAG for enterprise knowledge management"
    }
  ];

  return (
    <section id="publications" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Publications & Research
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Academic publications, research contributions, and ongoing work in AI, NLP, and machine learning
          </p>
        </div>

        {/* Published Papers */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground mb-10 text-center">Published Papers</h3>
          <div className="space-y-10">
            {publications.map((pub, index) => (
              <div key={index} className="bg-background rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/20">
                <div className="grid lg:grid-cols-4 gap-0">
                  {/* Publication Image */}
                  <div className="lg:col-span-1">
                    {renderPublicationImage(pub.imagePath, pub.title)}
                  </div>
                  
                  {/* Publication Content */}
                  <div className="lg:col-span-3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 leading-tight">
                          {pub.title}
                        </h4>
                        <p className="text-base text-muted-foreground mb-3">
                          <span className="font-medium">Authors:</span> {pub.authors.join(", ")}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-base text-muted-foreground mb-3">
                          <span className="font-medium text-primary">{pub.venue}</span>
                          <span className="hidden sm:block">•</span>
                          <span>{pub.date}</span>
                          <span className="hidden sm:block">•</span>
                          <span>{pub.type}</span>
                        </div>
                        {pub.doi && (
                          <p className="text-base text-muted-foreground mb-4">
                            <span className="font-medium">DOI:</span> {pub.doi}
                          </p>
                        )}
                      </div>
                      <div className="ml-6">
                        <span className="px-4 py-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm font-medium">
                          {pub.status}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      <span className="font-medium text-foreground">Abstract:</span> {pub.abstract}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {pub.keywords.map((keyword, keyIndex) => (
                        <span
                          key={keyIndex}
                          className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Interests */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground mb-10 text-center">Research Interests</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {researchInterests.map((interest, index) => (
              <div key={index} className="bg-background rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {interest.area}
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {interest.description}
                </p>
                <div className="space-y-4">
                  <h5 className="text-base font-medium text-foreground">Key Topics:</h5>
                  <div className="flex flex-wrap gap-3">
                    {interest.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Work */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground mb-10 text-center">Ongoing & Future Research</h3>
          <div className="space-y-6">
            {upcomingWork.map((work, index) => (
              <div key={index} className="bg-background rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-semibold text-foreground flex-1">
                    {work.title}
                  </h4>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ml-6 ${
                    work.status === "In Progress" 
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      : work.status === "Planning"
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
                  }`}>
                    {work.status}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {work.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Philosophy */}
        <div className="bg-background rounded-xl border border-border p-10 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Research Philosophy
          </h3>
          <blockquote className="text-xl text-muted-foreground italic leading-relaxed max-w-5xl mx-auto mb-8">
            "My research interests lie at the intersection of applied NLP, Deep Learning, and ML Techniques focused on business applications. 
            I am deeply passionate about deploying scalable GenAI solutions that drive tangible business outcomes, 
            particularly in enterprise environments. I specialize in end-to-end ML pipelines and agentic AI systems 
            that bridge technical expertise with strategic business value."
          </blockquote>
          <div className="mt-8">
            <p className="text-base text-muted-foreground">
              <span className="font-medium text-foreground text-lg">Focus Areas:</span> Applied NLP • GenAI Enterprise Solutions • Agentic AI • End-to-End ML Pipelines
            </p>
          </div>
        </div>

      </div>
      
      {/* <SectionNavigationButton nextSection="#contact" nextSectionName="Contact" /> */}
    </section>
  );
}
