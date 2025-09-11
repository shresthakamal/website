"use client";

import { SectionNavigationButton } from "../ui/SectionNavigationButton";

interface Project {
  title: string;
  category: string;
  period: string;
  description: string;
  technologies: string[];
  supervisor?: string;
  institution?: string;
  company?: string;
  highlights: string[];
  imageType: string;
  status?: string;
  publication?: boolean;
}

export function Projects() {
  // Function to render project image placeholder
  const renderProjectImage = (projectType: string) => {
    const imageConfig = {
      thesis: { bg: "bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800", icon: "🎓" },
      research: { bg: "bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800", icon: "🔬" },
      academic: { bg: "bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800", icon: "📚" },
      industry: { bg: "bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800", icon: "🏢" },
      security: { bg: "bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800", icon: "🔒" },
    };
    
    const config = imageConfig[projectType as keyof typeof imageConfig] || imageConfig.academic;
    
    return (
      <div className={`w-full h-48 rounded-xl ${config.bg} flex items-center justify-center`}>
        <div className="text-center">
          <div className="text-4xl mb-2">{config.icon}</div>
          <div className="text-sm text-muted-foreground font-medium">Project Screenshot</div>
        </div>
      </div>
    );
  };

  const projects: Project[] = [
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
      ],
      imageType: "thesis"
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
      publication: true,
      imageType: "research"
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
      ],
      imageType: "academic"
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
      ],
      imageType: "industry"
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
      ],
      imageType: "academic"
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
      ],
      imageType: "academic"
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
      ],
      imageType: "security"
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
      ],
      imageType: "security"
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
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Projects & Research
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of research projects, academic work, and industry applications spanning AI, NLP, and computer security
          </p>
        </div>

        {/* Research Areas Overview */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground mb-10 text-center">Research Areas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-secondary/30 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-foreground mb-3 text-lg">{area.area}</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{area.description}</p>
                <div className="text-sm text-primary font-medium">
                  {area.projects.length} projects
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-background rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/20">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Project Image */}
                <div className="lg:col-span-1">
                  {renderProjectImage(project.imageType)}
                </div>
                
                {/* Project Content */}
                <div className="lg:col-span-2 p-8">
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                          {project.title}
                        </h3>
                        {project.publication && (
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                            Published
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-base text-muted-foreground mb-3">
                        <span className="font-medium text-primary">{project.category}</span>
                        <span className="hidden sm:block">•</span>
                        <span>{project.period}</span>
                      </div>
                      {project.supervisor && (
                        <p className="text-base text-muted-foreground mb-4">
                          <span className="font-medium">Supervisor:</span> {project.supervisor}
                          {project.institution && <span> • {project.institution}</span>}
                          {project.company && <span> • {project.company}</span>}
                        </p>
                      )}

                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      {project.highlights && project.highlights.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-base font-semibold text-foreground mb-4">Key Highlights:</h4>
                          <ul className="space-y-3">
                            {project.highlights.map((highlight, hlIndex) => (
                              <li key={hlIndex} className="flex items-start space-x-3 text-base text-muted-foreground">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                                <span className="leading-relaxed">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="mt-20 text-center">
          <div className="bg-secondary/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Continuous Learning & Development
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
              Beyond these featured projects, I continuously work on exploring new technologies, 
              contributing to open-source projects, and staying updated with the latest developments 
              in AI and NLP. I maintain a weekly digest of LLM advancements and actively participate 
              in the research community.
            </p>
          </div>
        </div>

        <SectionNavigationButton nextSection="#publications" nextSectionName="Publications" />

      </div>
    </section>
  );
}
