"use client";

import { SectionNavigationButton } from "../ui/SectionNavigationButton";

export default function TechnicalCompetencies() {
  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Competencies
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Competencies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are the technical skills I have acquired throughout my computer science career. While I don't claim to be a master of all these skills, I am confident in my ability to hold a position that utilizes any of these competencies and to further develop my expertise as needed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              label: "Languages", 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              ),
              technologies: ["Python", "C++", "C", "JavaScript", "MySQL", "HTML", "CSS", "MATLAB"]
            },
            { 
              label: "Coding Methodologies", 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              technologies: ["Test-Driven-Development", "Agile", "Clean Code", "Useful Comments", "Ability to adhere to ISO and other standards"]
            },
            { 
              label: "Project Management", 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              technologies: ["SCRUM", "GitHub", "Jupyter Notebooks", "Presentation Skills", "Team Leadership/Management", "Cross-Team Communication", "Sense of Humor"]
            },
            { 
              label: "Interests", 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              technologies: ["Machine Learning", "Data Science", "Computer Vision", "Data Visualization", "Natural Language Processing", "Generative AI", "MLOps", "Software Engineering", "Software Development"]
            },
            { 
              label: "Relevant Courses Taken", 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ),
              technologies: ["Algorithm (CS 514)", "Machine Learning", "Deep Learning", "Natural Language Processing", "Operating Systems", "Artificial Intelligence", "Project Management", "Software Engineering", "Database Management System", "Big Ideas in AI", "AI Ethics", "Calculus I - III", "Discrete Structures"]
            },
            { 
              label: "Frameworks", 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              ),
              technologies: ["NumPy", "Scikit-Learn", "TensorFlow", "Keras", "PyTorch", "Matplotlib", "OpenCV", "Pandas", "SciPy", "Hugging Face", "spaCy", "NLTK", "Langchain", "Django", "Flask", "FastAPI", "Streamlit"]
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-background rounded-2xl border border-border p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-800/30 hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-muted-foreground mr-4 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-foreground text-lg">{item.label}</h4>
              </div>
              
              {/* Technologies List */}
              <div className="text-sm text-muted-foreground leading-relaxed">
                {item.technologies.join(", ")}
              </div>
            </div>
          ))}
        </div>

      </div>
      
      <SectionNavigationButton nextSection="#news" nextSectionName="Latest News" />
    </section>
  );
}
