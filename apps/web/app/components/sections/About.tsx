"use client";

import { SectionNavigationButton } from "../ui/SectionNavigationButton";

export function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Getting to know me
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate AI researcher and engineer dedicated to advancing the field of Natural Language Processing
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start mb-8">
          {/* Left Column - Profile Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="w-96 h-[28rem] bg-gradient-to-br from-primary/8 to-primary/5 rounded-2xl border-2 border-primary/10 flex items-center justify-center shadow-lg overflow-hidden">
                <img 
                  src="/assets/img/about.jpeg" 
                  alt="Kamal Shrestha"
                  className="w-82 h-[26rem] rounded-xl object-cover"
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
              {/* TLDR Section */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-left">TL;DR</h3>
                <div className="text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Working with <span className="text-foreground font-medium">ML, DL, NLP, (now LLMs) & AI since 2018</span>,
                    with <span className="text-foreground font-medium">4 years of professional experience as MLE</span>
                  </p>
                  <br />
                  <p className="text-lg leading-relaxed">
                    Passionate about <span className="text-foreground font-medium">solving real-world problems</span> with
                    intuitive & impactful solutions that <span className="text-foreground font-medium">bridge technology and business needs</span>
                  </p>
                  <br />
                  <p className="text-lg leading-relaxed">
                    Absolutely love <span className="text-foreground font-medium">cooking</span> and
                    <span className="text-foreground font-medium"> unwinding the day with a good movie</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
          
        </div>

        {/* Education Timeline Section */}
        <div>
          
          {/* Horizontal Timeline */}
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-semibold text-foreground mb-8 text-left ml-8">My Education Journey</h3>

            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line - Full width connecting all nodes */}
              <div className="absolute top-8 left-8 right-8 h-1 bg-muted-foreground hidden md:block z-10 pointer-events-none"></div>
              
              {/* Timeline Items */}
              <div className="relative grid md:grid-cols-4 gap-6 md:gap-8 pt-4 px-4">
                {/* St. Xavier's College - 2013-2015 (Oldest) */}
                <div className="relative">
                  {/* Year Label */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-sm font-bold text-foreground hidden md:block z-30 pointer-events-none">
                    July 2013 - August 2015
                  </div>
                  
                  {/* Timeline Node - positioned on the line */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-foreground rounded-full border-4 border-background shadow-lg z-30 pointer-events-none hidden md:block"></div>
                  
                  {/* Connector Line from node to card */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-foreground hidden md:block z-20 pointer-events-none"></div>
                  
                  {/* Mobile Timeline Node */}
                  <div className="flex justify-center mb-4 md:hidden">
                    <div className="w-4 h-4 bg-foreground rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  
                  {/* Card */}
                  <div className="bg-background rounded-2xl border border-border p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-foreground/30 hover:scale-[1.02] mt-10 md:mt-14 h-80 flex flex-col">
 
                    <h4 className="font-bold text-foreground text-base mb-2 text-center">Higher Secondary Education (+2)</h4>
                    <p className="text-sm text-muted-foreground text-center mb-2">St. Xavier's College, Maitighar</p>
                    <p className="text-xs text-muted-foreground text-center mb-2">Kathmandu, Nepal</p>
                    <div className="text-center mb-3">
                      <span className="px-2 py-1 bg-foreground/20 text-foreground rounded text-xs font-bold">Grade: 83%</span>
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
                  {/* Year Label */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-sm font-bold text-foreground hidden md:block z-30 pointer-events-none">
                    August 2016 - November 2020
                  </div>
                  
                  {/* Timeline Node - positioned on the line */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-foreground rounded-full border-4 border-background shadow-lg z-30 pointer-events-none hidden md:block"></div>
                  
                  {/* Connector Line from node to card */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-foreground hidden md:block z-20 pointer-events-none"></div>
                  
                  {/* Mobile Timeline Node */}
                  <div className="flex justify-center mb-4 md:hidden">
                    <div className="w-4 h-4 bg-foreground rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  
                  {/* Card */}
                  <div className="bg-background rounded-2xl border border-border p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-foreground/30 hover:scale-[1.02] mt-10 md:mt-14 h-80 flex flex-col">
       
                    <h4 className="font-bold text-foreground text-base mb-2 text-center">Bachelor in Computer Engineering</h4>
                    <p className="text-sm text-muted-foreground text-center mb-2">Kathmandu University (KU)</p>
                    <p className="text-xs text-muted-foreground text-center mb-2">Dhulikhel, Kavre, Nepal</p>
                    <div className="text-center mb-3">
                      <span className="px-2 py-1 bg-foreground/20 text-foreground rounded text-xs font-bold">Percentage: 92.30%</span>
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
                  {/* Year Label */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-sm font-bold text-foreground hidden md:block z-30 pointer-events-none">
                    September 2019 - May 2020
                  </div>
                  
                  {/* Timeline Node - positioned on the line */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-foreground rounded-full border-4 border-background shadow-lg z-30 pointer-events-none hidden md:block"></div>
                  
                  {/* Connector Line from node to card */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-foreground hidden md:block z-20 pointer-events-none"></div>
                  
                  {/* Mobile Timeline Node */}
                  <div className="flex justify-center mb-4 md:hidden">
                    <div className="w-4 h-4 bg-foreground rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  
                  {/* Card */}
                  <div className="bg-background rounded-2xl border border-border p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-foreground/30 hover:scale-[1.02] mt-10 md:mt-14 h-80 flex flex-col">

                    <h4 className="font-bold text-foreground text-base mb-2 text-center">Microdegree in ML & DL</h4>
                    <p className="text-sm text-muted-foreground text-center mb-2">Fusemachines AI School</p>
                    <div className="text-center mb-3">
                      <span className="px-2 py-1 bg-foreground/20 text-foreground rounded text-xs font-bold">Grade: A</span>
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
                  {/* Year Label */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-sm font-bold text-foreground hidden md:block z-30 pointer-events-none">
                    August 2021 - July 2023
                  </div>
                  
                  {/* Timeline Node - positioned on the line */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-foreground rounded-full border-4 border-background shadow-lg z-30 pointer-events-none hidden md:block"></div>
                  
                  {/* Connector Line from node to card */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-foreground hidden md:block z-20 pointer-events-none"></div>
                  
                  {/* Mobile Timeline Node */}
                  <div className="flex justify-center mb-4 md:hidden">
                    <div className="w-4 h-4 bg-foreground rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  
                  {/* Card */}
                  <div className="bg-background rounded-2xl border border-border p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-foreground/30 hover:scale-[1.02] mt-10 md:mt-14 h-80 flex flex-col">
                    <h4 className="font-bold text-foreground text-base mb-2 text-center">M.Tech Computer Science & Engineering</h4>
                    <p className="text-sm text-muted-foreground text-center mb-2">Indian Institute of Technology, Hyderabad (IITH)</p>
                    <div className="text-center mb-3">
                      <span className="px-2 py-1 bg-foreground/20 text-foreground rounded text-xs font-bold">CGPA: 9.06/10</span>
                    </div>
                    <div className="text-xs text-muted-foreground text-center leading-relaxed mb-3 flex-grow">
                      <p className="mb-2"><strong>Advisor:</strong> Dr. Maunendra Sankar Desarkar</p>
                      <p className="mb-2"><strong>Lab:</strong> Natural Language Information Processing</p>
                      <p><strong>Focus:</strong> Recommendation Systems & Hostility Detection</p>
                    </div>
                    <div className="text-xs text-foreground text-center font-medium mb-3">
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

      </div>
      
      <SectionNavigationButton nextSection="#skills" nextSectionName="Technical Skills" />
    </section>
  );
}
