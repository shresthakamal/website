"use client";

export function Publications() {
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
      status: "Published"
    },
    {
      title: "Implementation of Machine Learning Approach to Detect Clickbaits in Online News",
      authors: ["Kamal Shrestha", "Prajwol Lamichhane"],
      venue: "Fuse Machines Inc, Company Journal, 2022",
      date: "May 2022",
      type: "Journal Article",
      abstract: "This study presents a machine learning approach to detect clickbaits based on features extracted from news headlines, achieving an accuracy of 79%. The research focuses on identifying misleading headlines that exploit curiosity gaps.",
      keywords: ["Clickbait Detection", "Natural Language Processing", "Machine Learning", "Logistic Regression"],
      status: "Published"
    },
    {
      title: "A Machine Learning Approach to Identify Fake News",
      authors: ["Kamal Shrestha"],
      venue: "Center for Project Management and Information Systems (PMIS) Review",
      date: "July 10, 2020",
      type: "Journal Article",
      abstract: "This paper presents a classification model using lexical and semantic features from news articles and sources to filter out fake content. Multiple algorithms including Naive Bayes, Support Vector Machine, Logistic Regression, and k-NN were evaluated, with k-NN and Logistic Regression yielding promising results.",
      keywords: ["Fake News Detection", "Machine Learning", "NLP", "Word Embeddings"],
      status: "Published"
    }
  ];

  const researchInterests = [
    {
      area: "Applied Natural Language Processing",
      description: "Focus on real-world applications of NLP techniques, particularly in multilingual and code-mixed scenarios",
      topics: ["Multilingual NLP", "Code-Mixed Text Analysis", "Social Media Mining", "Content Moderation"]
    },
    {
      area: "Large Language Models",
      description: "Research and application of LLMs for various downstream tasks and enterprise solutions",
      topics: ["LLM Fine-tuning", "Retrieval-Augmented Generation", "Prompt Engineering", "Model Optimization"]
    },
    {
      area: "Recommendation Systems",
      description: "Development of fair and inclusive recommendation systems with focus on accessibility",
      topics: ["Hybrid Recommendation", "Fairness in AI", "Accessibility", "Personalization"]
    },
    {
      area: "AI Ethics and Fairness",
      description: "Ensuring AI systems are fair, inclusive, and beneficial for all users",
      topics: ["Bias Detection", "Inclusive AI", "Ethical AI", "Responsible AI Development"]
    }
  ];

  const upcomingWork = [
    {
      title: "Advanced RAG Techniques for Enterprise Applications",
      status: "In Progress",
      description: "Exploring novel approaches to improve retrieval-augmented generation for enterprise-scale applications"
    },
    {
      title: "Multilingual LLM Fine-tuning for Low-Resource Languages",
      status: "Planning",
      description: "Research on adapting large language models for better performance on low-resource languages"
    },
    {
      title: "Federated Learning for Privacy-Preserving NLP",
      status: "Conceptual",
      description: "Investigating federated learning approaches for NLP tasks while preserving user privacy"
    }
  ];

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Publications & Research
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic publications, research contributions, and ongoing work in AI, NLP, and machine learning
          </p>
        </div>

        {/* Published Papers */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Published Papers</h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-background rounded-lg border border-border p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                      {pub.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">Authors:</span> {pub.authors.join(", ")}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-muted-foreground mb-2">
                      <span className="font-medium text-primary">{pub.venue}</span>
                      <span className="hidden sm:block">•</span>
                      <span>{pub.date}</span>
                      <span className="hidden sm:block">•</span>
                      <span>{pub.type}</span>
                    </div>
                    {pub.doi && (
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">DOI:</span> {pub.doi}
                      </p>
                    )}
                  </div>
                  <div className="ml-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs font-medium">
                      {pub.status}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  <span className="font-medium text-foreground">Abstract:</span> {pub.abstract}
                </p>

                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((keyword, keyIndex) => (
                    <span
                      key={keyIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Interests */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Research Interests</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {researchInterests.map((interest, index) => (
              <div key={index} className="bg-background rounded-lg border border-border p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {interest.area}
                </h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {interest.description}
                </p>
                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-foreground">Key Topics:</h5>
                  <div className="flex flex-wrap gap-2">
                    {interest.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs"
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
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Ongoing & Future Research</h3>
          <div className="space-y-4">
            {upcomingWork.map((work, index) => (
              <div key={index} className="bg-background rounded-lg border border-border p-6">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-foreground flex-1">
                    {work.title}
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ml-4 ${
                    work.status === "In Progress" 
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      : work.status === "Planning"
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
                  }`}>
                    {work.status}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {work.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Philosophy */}
        <div className="bg-background rounded-lg border border-border p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Research Philosophy
          </h3>
          <blockquote className="text-lg text-muted-foreground italic leading-relaxed max-w-4xl mx-auto">
            "My research interests lie at the intersection of applied NLP, Deep Learning, and Classical ML Techniques. 
            I am deeply passionate about exploring the potential of NLP, particularly with Large Language Models, 
            and applying them to real-world challenges. I consistently stay updated on LLM advancements and 
            curate a weekly digest of news and developments in the field."
          </blockquote>
          <div className="mt-6">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Focus Areas:</span> Applied NLP • LLM Applications • Ethical AI • Multilingual Systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
