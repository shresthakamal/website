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

        {/* Skills & Education Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Core Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Core Expertise</h3>
              <div className="space-y-4">
                {[
                  { skill: "Applied NLP & GenAI", level: "Expert" },
                  { skill: "LLM Fine-tuning & Deployment", level: "Expert" },
                  { skill: "End-to-End ML/DL Pipelines", level: "Expert" },
                  { skill: "Python & PyTorch/Lightning", level: "Expert" },
                  { skill: "Agentic AI & RAG Systems", level: "Expert" },
                  { skill: "Enterprise AI Solutions", level: "Advanced" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-background border border-border rounded-lg hover:shadow-md transition-shadow">
                    <span className="text-foreground font-medium text-lg">{item.skill}</span>
                    <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Highlights */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 bg-primary/5 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-foreground text-lg">M.Tech Computer Science and Engineering</h4>
                  <p className="text-base text-muted-foreground mt-2">IIT Hyderabad • 2021-2023 • CGPA: 9.06/10</p>
                  <p className="text-base text-muted-foreground mt-2">
                    Thesis: "Inclusivity in Job Recommendation based on heuristic and learning approaches" (Patent Approved)
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-6 bg-secondary/5 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-foreground text-lg">B.E. Computer Engineering</h4>
                  <p className="text-base text-muted-foreground mt-2">Kathmandu University • 2016-2020 • 92.30%</p>
                </div>
                <div className="border-l-4 border-accent pl-6 bg-accent/5 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-foreground text-lg">Microdegree in ML & DL</h4>
                  <p className="text-base text-muted-foreground mt-2">Fusemachines AI School • 2019-2020 • Grade A</p>
                </div>
              </div>
            </div>
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
