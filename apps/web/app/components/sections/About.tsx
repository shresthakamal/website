"use client";

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate AI researcher and engineer dedicated to advancing the field of Natural Language Processing
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start mb-16">
          {/* Left Column - Profile Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="w-72 h-96 bg-gradient-to-br from-primary/8 to-primary/5 rounded-2xl border-2 border-primary/10 flex items-center justify-center shadow-lg overflow-hidden">
                <img 
                  src="/assets/img/about.jpeg" 
                  alt="Kamal Shrestha"
                  className="w-64 h-88 rounded-xl object-cover"
                />
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-primary/20 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>

          {/* Right Column - Main Bio */}
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am currently a <span className="text-foreground font-medium">Senior Machine Learning Engineer</span> at 
                GoDaddy Inc., specializing in GenAI for Enterprise Applications. I focus on building agentic AI-driven 
                solutions and optimizing employee productivity through advanced LLM integrations.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                My expertise spans <span className="text-foreground font-medium">Applied Natural Language Processing</span>, 
                <span className="text-foreground font-medium"> End-to-End ML/DL Pipelines</span>, 
                <span className="text-foreground font-medium"> LLM Fine-tuning</span>, and 
                <span className="text-foreground font-medium"> Agentic AI Systems</span>. I specialize in deploying 
                scalable solutions that drive tangible business outcomes.
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg">
                I hold an <span className="text-foreground font-medium">M.Tech in Computer Science and Engineering</span> from 
                IIT Hyderabad with a CGPA of 9.06/10, where I developed a Hybrid Recommendation System 
                for inclusive job recommendations. I'm passionate about bridging technical expertise with 
                strategic business applications.
              </p>
            </div>

            {/* Personal Details */}
            <div className="bg-secondary/50 rounded-xl p-8 space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Personal Details</h3>
              <div className="grid sm:grid-cols-2 gap-6 text-base">
                <div>
                  <span className="text-muted-foreground">Location:</span>
                  <span className="text-foreground ml-2 font-medium">Bengaluru, Karnataka, India</span>
                </div>
                {/* <div>
                  <span className="text-muted-foreground">Philosophy:</span>
                  <span className="text-foreground ml-2 font-medium">"As pure as a CS student can be"</span>
                </div> */}
                <div className="sm:col-span-2">
                  <span className="text-muted-foreground">Hobbies:</span>
                  <span className="text-foreground ml-2 font-medium">Reading books, cooking new cuisines, traveling</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-12 text-center">Educational Journey</h3>
          
          {/* Horizontal Timeline */}
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-4 sm:px-6 lg:px-8">
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line - Full width connecting all nodes */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-gray-800 hidden md:block z-10 pointer-events-none"></div>
              
              {/* Timeline Items */}
              <div className="relative grid md:grid-cols-4 gap-6 md:gap-3 pt-10">
                {/* St. Xavier's College - 2013-2015 (Oldest) */}
                <div className="relative">
                  {/* Timeline Node - positioned on the line */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full border-4 border-background shadow-lg z-30 pointer-events-none hidden md:block"></div>
                  
                  {/* Connector Line from node to card */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-gray-800 hidden md:block z-20 pointer-events-none"></div>
                  
                  {/* Mobile Timeline Node */}
                  <div className="flex justify-center mb-4 md:hidden">
                    <div className="w-4 h-4 bg-gray-800 rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  
                  {/* Card */}
                  <div className="bg-background rounded-2xl border border-border p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-800/30 hover:scale-[1.02] mt-16 md:mt-20 h-80 flex flex-col">
                    <div className="text-center mb-3">
                      <span className="px-3 py-1 bg-gray-800/10 text-gray-800 rounded-full text-xs font-semibold border border-gray-800/20">
                        July 2013 - August 2015
                      </span>
                    </div>
                    <h4 className="font-bold text-foreground text-base mb-2 text-center">Higher Secondary Education (+2)</h4>
                    <p className="text-sm text-muted-foreground text-center mb-2">St. Xavier's College, Maitighar</p>
                    <p className="text-xs text-muted-foreground text-center mb-2">Kathmandu, Nepal</p>
                    <div className="text-center mb-3">
                      <span className="px-2 py-1 bg-gray-800/20 text-gray-800 rounded text-xs font-bold">Grade: 83%</span>
                    </div>
                    <div className="text-xs text-muted-foreground text-center leading-relaxed mb-3 flex-grow">
                      <p className="mb-2"><strong>Stream:</strong> Science (Physics, Chemistry, Mathematics)</p>
                      <p><strong>Activities:</strong> Computer Science Club, Universal Solidarity Movement (USM), Sports Club, Basketball</p>
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">Physics</span>
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">Chemistry</span>
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">Mathematics</span>
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">Computer</span>
                    </div>
                  </div>
                </div>

                {/* B.E. - 2016-2020 */}
                <div className="relative">
                  {/* Timeline Node - positioned on the line */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full border-4 border-background shadow-lg z-30 pointer-events-none hidden md:block"></div>
                  
                  {/* Connector Line from node to card */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-gray-800 hidden md:block z-20 pointer-events-none"></div>
                  
                  {/* Mobile Timeline Node */}
                  <div className="flex justify-center mb-4 md:hidden">
                    <div className="w-4 h-4 bg-gray-800 rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  
                  {/* Card */}
                  <div className="bg-background rounded-2xl border border-border p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-800/30 hover:scale-[1.02] mt-16 md:mt-20 h-80 flex flex-col">
                    <div className="text-center mb-3">
                      <span className="px-3 py-1 bg-gray-800/10 text-gray-800 rounded-full text-xs font-semibold border border-gray-800/20">
                        August 2016 - November 2020
                      </span>
                    </div>
                    <h4 className="font-bold text-foreground text-base mb-2 text-center">Bachelor in Computer Engineering</h4>
                    <p className="text-sm text-muted-foreground text-center mb-2">Kathmandu University (KU)</p>
                    <p className="text-xs text-muted-foreground text-center mb-2">Dhulikhel, Kavre, Nepal</p>
                    <div className="text-center mb-3">
                      <span className="px-2 py-1 bg-gray-800/20 text-gray-800 rounded text-xs font-bold">Percentage: 92.30%</span>
                    </div>
                    <div className="text-xs text-muted-foreground text-center leading-relaxed mb-3 flex-grow">
                      <p className="mb-2"><strong>Activities:</strong> Kathmandu University Computer Club (KUCC)</p>
                      <p><strong>Courses:</strong> AI, ML, DSA, Algorithm and Complexity, Software Engineering, Probability and Statistics, Speech and Language Processing</p>
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">C/C++</span>
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">DBMS</span>
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">Algorithms</span>
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">Software Eng</span>
                    </div>
                  </div>
                </div>

                {/* Microdegree - 2019-2020 */}
                <div className="relative">
                  {/* Timeline Node - positioned on the line */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full border-4 border-background shadow-lg z-30 pointer-events-none hidden md:block"></div>
                  
                  {/* Connector Line from node to card */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-gray-800 hidden md:block z-20 pointer-events-none"></div>
                  
                  {/* Mobile Timeline Node */}
                  <div className="flex justify-center mb-4 md:hidden">
                    <div className="w-4 h-4 bg-gray-800 rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  
                  {/* Card */}
                  <div className="bg-background rounded-2xl border border-border p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-800/30 hover:scale-[1.02] mt-16 md:mt-20 h-80 flex flex-col">
                    <div className="text-center mb-3">
                      <span className="px-3 py-1 bg-gray-800/10 text-gray-800 rounded-full text-xs font-semibold border border-gray-800/20">
                        September 2019 - May 2020
                      </span>
                    </div>
                    <h4 className="font-bold text-foreground text-base mb-2 text-center">Microdegree in ML & DL</h4>
                    <p className="text-sm text-muted-foreground text-center mb-2">Fusemachines AI School</p>
                    <div className="text-center mb-3">
                      <span className="px-2 py-1 bg-gray-800/20 text-gray-800 rounded text-xs font-bold">Grade: A</span>
                    </div>
                    <div className="text-xs text-muted-foreground text-center leading-relaxed mb-3 flex-grow">
                      <p className="mb-2"><strong>Focus:</strong> Machine Learning and Deep Learning</p>
                      <p><strong>Topics:</strong> Supervised/Unsupervised Learning, Neural Networks, CNNs, RNNs, Transformers, Reinforcement Learning</p>
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">Python</span>
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">TensorFlow</span>
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">Scikit-Learn</span>
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">Pandas</span>
                    </div>
                  </div>
                </div>

                {/* M.Tech - 2021-2023 (Most Recent) */}
                <div className="relative">
                  {/* Timeline Node - positioned on the line */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full border-4 border-background shadow-lg z-30 pointer-events-none hidden md:block"></div>
                  
                  {/* Connector Line from node to card */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-gray-800 hidden md:block z-20 pointer-events-none"></div>
                  
                  {/* Mobile Timeline Node */}
                  <div className="flex justify-center mb-4 md:hidden">
                    <div className="w-4 h-4 bg-gray-800 rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  
                  {/* Card */}
                  <div className="bg-background rounded-2xl border border-border p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-800/30 hover:scale-[1.02] mt-16 md:mt-20 h-80 flex flex-col">
                    <div className="text-center mb-3">
                      <span className="px-3 py-1 bg-gray-800/10 text-gray-800 rounded-full text-xs font-semibold border border-gray-800/20">
                        August 2021 - July 2023
                      </span>
                    </div>
                    <h4 className="font-bold text-foreground text-base mb-2 text-center">M.Tech Computer Science & Engineering</h4>
                    <p className="text-sm text-muted-foreground text-center mb-2">Indian Institute of Technology, Hyderabad (IITH)</p>
                    <div className="text-center mb-3">
                      <span className="px-2 py-1 bg-gray-800/20 text-gray-800 rounded text-xs font-bold">CGPA: 9.06/10</span>
                    </div>
                    <div className="text-xs text-muted-foreground text-center leading-relaxed mb-3 flex-grow">
                      <p className="mb-2"><strong>Advisor:</strong> Dr. Maunendra Sankar Desarkar</p>
                      <p className="mb-2"><strong>Lab:</strong> Natural Language Information Processing</p>
                      <p><strong>Focus:</strong> Recommendation Systems & Hostility Detection</p>
                    </div>
                    <div className="text-xs text-gray-800 text-center font-medium mb-3">
                      Thesis: "Inclusivity in Job Recommendation based on heuristic and learning approaches" (Patent Approved)
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">NLP</span>
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">ML</span>
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">Transformers</span>
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">PyTorch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Competencies Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-12 text-center">Technical Competencies</h3>
          
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
        </div>

        {/* Recent Achievements */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Recent Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  <span className="text-foreground font-medium">Senior ML Engineer at GoDaddy</span> - GenAI for Enterprise Applications (January 2025)
                </p>
              </div>
            </div>
            <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  <span className="text-foreground font-medium">Bravo Award X3</span> at BOSCH for excellent engineering skills in GenAI use cases
                </p>
              </div>
            </div>
            <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  <span className="text-foreground font-medium">€10M Annual Savings</span> - Legal document classification system at BOSCH
                </p>
              </div>
            </div>
            <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  <span className="text-foreground font-medium">Patent Approved</span> - Job Recommendation System with inclusivity focus
                </p>
              </div>
            </div>
            <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  <span className="text-foreground font-medium">AWS ML Specialty Certified</span> - Amazon Web Services certification
                </p>
              </div>
            </div>
            <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  <span className="text-foreground font-medium">Top Impact Project</span> - Fuse Studio automated video generation platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
