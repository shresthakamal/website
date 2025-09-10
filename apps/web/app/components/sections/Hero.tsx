"use client";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Profile Image */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/10 flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src="/assets/img/prof_pic.jpg" 
                  alt="Kamal Shrestha - AI Researcher and Engineer"
                  className="w-72 h-72 sm:w-88 sm:h-88 lg:w-[380px] lg:h-[380px] rounded-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/10 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-center lg:text-left space-y-10 order-1 lg:order-2">
            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                <span className="block text-foreground">Kamal Shrestha</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-muted-foreground font-normal mt-3">
                  कमल श्रेष्ठ
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-primary font-medium">
                Senior Machine Learning Engineer
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Specializing in <span className="text-foreground font-medium">Applied NLP</span>, 
                <span className="text-foreground font-medium"> GenAI for Enterprise Applications</span>, and 
                <span className="text-foreground font-medium"> Large Language Models</span> at GoDaddy Inc.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Expert in end-to-end ML pipelines, fine-tuning LLMs, and deploying agentic AI solutions that drive tangible business outcomes.
              </p>
            </div>

            {/* Motto */}
            <div className="py-6">
              <blockquote className="text-lg sm:text-xl lg:text-2xl italic text-primary border-l-4 border-primary pl-6">
                "Discipline Equals Freedom"
              </blockquote>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center items-center">
              <button
                onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-lg"
              >
                Learn More
              </button>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors text-lg"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links - Centered below both columns */}
        <div className="flex justify-center space-x-8 pt-16 mt-8 border-t border-border/50">
            <a
              href="https://www.linkedin.com/in/shresthakamal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0A66C2] transition-colors duration-300 transform hover:scale-110"
              title="LinkedIn"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/shresthakamal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#333] dark:hover:text-[#f0f6ff] transition-colors duration-300 transform hover:scale-110"
              title="GitHub"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://medium.com/@shresthakamal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#00AB6C] transition-colors duration-300 transform hover:scale-110"
              title="Medium"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
            <a
              href="https://shresthakamal.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#3B82F6] transition-colors duration-300 transform hover:scale-110"
              title="Website"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
            </a>
          </div>
        </div>
    </section>
  );
}
