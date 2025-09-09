"use client";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate AI researcher and engineer dedicated to advancing the field of Natural Language Processing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Bio */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I am currently a <span className="text-foreground font-medium">Senior Applied Research Engineer</span> at 
                BOSCH Global Software Technology (BGSW) at their Research and Technology Center (RTC) India, 
                where I focus on high-impact projects leveraging Large Language Models (LLMs).
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans <span className="text-foreground font-medium">Artificial Intelligence</span>, 
                <span className="text-foreground font-medium"> Natural Language Processing</span>, 
                <span className="text-foreground font-medium"> Machine Learning</span>, and 
                <span className="text-foreground font-medium"> Deep Learning</span>, with a particular 
                specialization in Large Language Models.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I hold an <span className="text-foreground font-medium">M.Tech in Computer Engineering</span> from 
                IIT Hyderabad with a CGPA of 9.06/10, where I developed a Hybrid Recommendation System 
                for inclusive job recommendations. I'm passionate about making AI accessible and impactful 
                for real-world applications.
              </p>
            </div>

            {/* Personal Details */}
            <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Personal Details</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Location:</span>
                  <span className="text-foreground ml-2">Bengaluru, Karnataka, India</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Philosophy:</span>
                  <span className="text-foreground ml-2">"As pure as a CS student can be"</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-muted-foreground">Hobbies:</span>
                  <span className="text-foreground ml-2">Reading books, cooking new cuisines, traveling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Education */}
          <div className="space-y-8">
            {/* Core Skills */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Core Expertise</h3>
              <div className="space-y-3">
                {[
                  { skill: "Large Language Models (LLMs)", level: "Expert" },
                  { skill: "Natural Language Processing", level: "Expert" },
                  { skill: "Machine Learning & Deep Learning", level: "Expert" },
                  { skill: "Python & PyTorch", level: "Expert" },
                  { skill: "Transformers & Langchain", level: "Advanced" },
                  { skill: "RAG & Fine-tuning", level: "Advanced" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{item.skill}</span>
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Highlights */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">M.Tech Computer Engineering</h4>
                  <p className="text-sm text-muted-foreground">IIT Hyderabad • 2021-2023 • CGPA: 9.06/10</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Thesis: "Inclusivity in Job Recommendation based on heuristic and learning approaches"
                  </p>
                </div>
                <div className="border-l-2 border-secondary pl-4">
                  <h4 className="font-semibold text-foreground">B.E. Computer Engineering</h4>
                  <p className="text-sm text-muted-foreground">Kathmandu University • 2016-2020 • 92.03%</p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">Microdegree in ML & DL</h4>
                  <p className="text-sm text-muted-foreground">Fusemachines AI School • 2019-2020 • Grade A</p>
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Recent Achievements</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Stand out Performer Award</span> from NLP Cluster at RTC-IN @BOSCH (April 2024)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Panelist at GenAI Summit</span> by Inc24 @ JW Marriot Hotel, Bengaluru (April 2024)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Official Contributor to Langgraph</span> - contributed to agentic_rag (March 2024)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Bravo Award</span> for completing first Generative AI PoC within 3 months
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
