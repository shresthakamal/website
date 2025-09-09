"use client";

export function Projects() {
  const projects = [
    {
      title: "Inclusivity in Job Recommendation System",
      category: "Master's Thesis",
      period: "2022 - 2023",
      description: "Developed a Hybrid Recommendation System (HRS) using heuristics-based and transformer learning-based approaches for job recommendations tailored to disability, skills, location, and experience.",
      technologies: ["Transformers", "Recommendation Systems", "Python", "Machine Learning"],
      supervisor: "Dr. Maunendra Sankar Desarkar",
      institution: "IIT Hyderabad",
      highlights: [
        "Combined heuristic and learning-based approaches for inclusive job matching",
        "Focused on accessibility and fairness in recommendation systems",
        "Achieved significant improvements in recommendation quality for underrepresented groups"
      ]
    },
    {
      title: "Hostility Detection in Hindi-English Code-Mixed Conversations",
      category: "Research Project",
      period: "November 2021 - June 2022",
      description: "Proposed a novel hierarchical neural network architecture to identify hostile posts/comments/replies in online Hindi-English Code-Mixed conversations, leveraging multilingual pre-trained models.",
      technologies: ["mBERT", "XLMR", "MuRIL", "Hierarchical Neural Networks", "NLP"],
      supervisor: "Dr. Maunendra Sankar Desarkar",
      institution: "IIT Hyderabad",
      highlights: [
        "Published at WebSci '22: 14th ACM Web Science Conference 2022",
        "Novel approach to multilingual hostility detection",
        "Leveraged state-of-the-art multilingual pre-trained models"
      ],
      publication: true
    },
    {
      title: "Federated Semi-Supervised Medical Image Classification",
      category: "Academic Project",
      period: "January 2022 - May 2022",
      description: "Remodeled medical image classification with Self Attention mechanism via Inter-Client Relation Matching in a federated learning setting.",
      technologies: ["Federated Learning", "Self-Attention", "Medical Imaging", "Deep Learning"],
      supervisor: "Dr. C. Krishna Mohan",
      institution: "IIT Hyderabad",
      highlights: [
        "Ranked in top 2% (A+) of the class",
        "Innovative approach to federated learning in healthcare",
        "Applied self-attention mechanisms for improved performance"
      ]
    },
    {
      title: "Fuse Studio - Video Automation Tool",
      category: "Industry Project",
      period: "April 2020 - August 2020",
      description: "Developed a fully automated Video and Text-to-Speech (TTS) Generation System for Fusestudio using advanced speech synthesis models.",
      technologies: ["Tacotron2", "GlowTTs", "MelGAN", "TTS", "Video Processing"],
      company: "Fusemachines",
      highlights: [
        "Automated video generation from Google Slides presentations",
        "Integrated multiple state-of-the-art TTS models",
        "Streamlined content creation workflow for educational materials"
      ]
    },
    {
      title: "Self Diagnosis - Computer-Aided Diagnosis (CAD)",
      category: "Academic Project",
      period: "June 2019 - December 2019",
      description: "Developed a system to detect diseases based on dynamic symptoms using multiple machine learning approaches including Naive Bayes, deep neural networks, and Gradient Boosted Trees.",
      technologies: ["Naive Bayes", "Deep Neural Networks", "Gradient Boosting", "Healthcare AI"],
      supervisor: "Dr. Dhiraj Shrestha",
      institution: "Kathmandu University",
      highlights: [
        "Multi-model approach for disease prediction",
        "Dynamic symptom analysis system",
        "Practical application of ML in healthcare"
      ]
    },
    {
      title: "Zero Reference Low-Light Image Enhancement",
      category: "Academic Project",
      period: "January 2022 - May 2022",
      description: "Worked on deep learning-based Zero-Reference Deep Curve Estimation for low-light image enhancement with attention mechanisms.",
      technologies: ["Deep Learning", "Computer Vision", "Attention Mechanisms", "Image Enhancement"],
      supervisor: "Dr. Sumohana Channappayya",
      institution: "IIT Hyderabad",
      highlights: [
        "Zero-reference approach eliminating need for paired training data",
        "Applied attention mechanisms for improved enhancement quality",
        "Practical solution for low-light photography"
      ]
    },
    {
      title: "Network Intrusion Detection System (NIDS)",
      category: "Security Project",
      period: "January 2022 - February 2022",
      description: "Applied classical machine learning techniques to detect network anomalies and attacks, implementing comprehensive security monitoring.",
      technologies: ["Machine Learning", "Network Security", "Anomaly Detection", "Cybersecurity"],
      supervisor: "Dr. Bheemarjuna Reddy Tamma",
      institution: "IIT Hyderabad",
      highlights: [
        "Comprehensive network security monitoring system",
        "Applied multiple ML algorithms for threat detection",
        "Real-time anomaly detection capabilities"
      ]
    },
    {
      title: "Secure Chat Communication with OpenSSL",
      category: "Security Project",
      period: "January 2022 - May 2022",
      description: "Implemented a secure peer-to-peer chat application and demonstrated Man-in-the-middle attacks for educational purposes.",
      technologies: ["OpenSSL", "Network Security", "P2P Communication", "Cryptography"],
      supervisor: "Dr. Bheemarjuna Reddy Tamma",
      institution: "IIT Hyderabad",
      highlights: [
        "End-to-end encrypted communication system",
        "Demonstrated security vulnerabilities and countermeasures",
        "Practical application of cryptographic principles"
      ]
    }
  ];

  const researchAreas = [
    {
      area: "Natural Language Processing",
      projects: ["Hostility Detection", "Job Recommendation System", "Clickbait Detection"],
      description: "Focus on multilingual NLP, recommendation systems, and content analysis"
    },
    {
      area: "Computer Vision",
      projects: ["Medical Image Classification", "Low-Light Enhancement"],
      description: "Federated learning and attention mechanisms in image processing"
    },
    {
      area: "Network Security",
      projects: ["NIDS", "Secure Communication", "Firewall Implementation"],
      description: "Applied ML for cybersecurity and secure communication protocols"
    },
    {
      area: "Healthcare AI",
      projects: ["Self Diagnosis CAD", "Medical Image Classification"],
      description: "AI applications in medical diagnosis and healthcare systems"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Projects & Research
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of research projects, academic work, and industry applications spanning AI, NLP, and computer security
          </p>
        </div>

        {/* Research Areas Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Research Areas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-secondary/30 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-foreground mb-2">{area.area}</h4>
                <p className="text-sm text-muted-foreground mb-3">{area.description}</p>
                <div className="text-xs text-primary">
                  {area.projects.length} projects
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background rounded-lg border border-border p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    {project.publication && (
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        Published
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-primary">{project.category}</span>
                    <span className="hidden sm:block">•</span>
                    <span>{project.period}</span>
                  </div>
                  {project.supervisor && (
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Supervisor:</span> {project.supervisor}
                      {project.institution && <span> • {project.institution}</span>}
                      {project.company && <span> • {project.company}</span>}
                    </p>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, hlIndex) => (
                      <li key={hlIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
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

        {/* Additional Projects Note */}
        <div className="mt-12 text-center">
          <div className="bg-secondary/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Continuous Learning & Development
            </h3>
            <p className="text-muted-foreground">
              Beyond these featured projects, I continuously work on exploring new technologies, 
              contributing to open-source projects, and staying updated with the latest developments 
              in AI and NLP. I maintain a weekly digest of LLM advancements and actively participate 
              in the research community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
