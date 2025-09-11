"use client";

import { SectionNavigationButton } from "../ui/SectionNavigationButton";

export default function TechnicalCompetencies() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-background">
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
              icon: "📱",
              technologies: ["Python", "C++", "C", "JavaScript", "MySQL", "HTML", "CSS", "MATLAB"]
            },
            { 
              label: "Coding Methodologies", 
              icon: "💻",
              technologies: ["Test-Driven-Development", "Agile", "Clean Code", "Useful Comments", "Ability to adhere to ISO and other standards"]
            },
            { 
              label: "Project Management", 
              icon: "🔺",
              technologies: ["SCRUM", "GitHub", "Jupyter Notebooks", "Presentation Skills", "Team Leadership/Management", "Cross-Team Communication", "Sense of Humor"]
            },
            { 
              label: "Interests", 
              icon: "📊",
              technologies: ["Machine Learning", "Data Science", "Computer Vision", "Data Visualization", "Natural Language Processing", "Generative AI", "MLOps", "Software Engineering", "Software Development"]
            },
            { 
              label: "Relevant Courses Taken", 
              icon: "🌐",
              technologies: ["Algorithm (CS 514)", "Machine Learning", "Deep Learning", "Natural Language Processing", "Operating Systems", "Artificial Intelligence", "Project Management", "Software Engineering", "Database Management System", "Big Ideas in AI", "AI Ethics", "Calculus I - III", "Discrete Structures"]
            },
            { 
              label: "Frameworks", 
              icon: "⚡",
              technologies: ["NumPy", "Scikit-Learn", "TensorFlow", "Keras", "PyTorch", "Matplotlib", "OpenCV", "Pandas", "SciPy", "Hugging Face", "spaCy", "NLTK", "Langchain", "Django", "Flask", "FastAPI", "Streamlit"]
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-background rounded-2xl border border-border p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-800/30 hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white text-xl mr-4">
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

        <SectionNavigationButton nextSection="#news" nextSectionName="Latest News" />

      </div>
    </section>
  );
}
