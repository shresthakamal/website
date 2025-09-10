"use client";

import { ExperienceData } from '../../actions/experiences';

interface ExperienceProps {
  experiences: ExperienceData[];
}

export function Experience({ experiences }: ExperienceProps) {
  // Function to render company logo for timeline
  const renderTimelineLogo = (logoPath?: string, logoType?: string, companyName?: string) => {
    if (logoPath) {
      return (
        <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center overflow-hidden shadow-lg">
          <img 
            src={logoPath} 
            alt={companyName || "Company logo"}
            className="w-8 h-8 object-contain"
          />
        </div>
      );
    }

    const logoConfig = {
      godaddy: { bg: "bg-emerald-500", text: "text-white", initial: "G" },
      bosch: { bg: "bg-blue-500", text: "text-white", initial: "B" },
      veritus: { bg: "bg-green-500", text: "text-white", initial: "V" },
      fusemachines: { bg: "bg-purple-500", text: "text-white", initial: "F" },
      school: { bg: "bg-orange-500", text: "text-white", initial: "S" },
      herald: { bg: "bg-red-500", text: "text-white", initial: "H" },
    };
    
    const config = logoConfig[logoType as keyof typeof logoConfig] || logoConfig.fusemachines;
    
    return (
      <div className={`w-12 h-12 rounded-full ${config.bg} flex items-center justify-center border-2 border-white shadow-lg`}>
        <span className={`text-lg font-bold ${config.text}`}>{config.initial}</span>
      </div>
    );
  };

  // No longer need hardcoded data - using props from database

  // Extract year from period string
  const getStartYear = (period: string) => {
    const match = period.match(/(\d{4})/);
    return match ? parseInt(match[1] || "2020") : 2020;
  };

  // Render experience content component
  const renderExperienceContent = (exp: ExperienceData) => (
    <div className="bg-background rounded-2xl border border-border p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:scale-[1.02]">
      {/* Period Badge */}
      <div className="inline-flex items-center mb-4">
        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
          {exp.period}
        </span>
      </div>
      
      {/* Job Details */}
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 leading-tight">
        {exp.title}
      </h3>
      
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-primary font-semibold text-base sm:text-lg">{exp.company}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {exp.location}
          </span>
          <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
          <span className="px-2 py-1 bg-accent/50 text-accent-foreground rounded text-xs font-medium">
            {exp.type}
          </span>
        </div>
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {exp.description}
      </p>

      {/* Key Achievements */}
      {exp.achievements && exp.achievements.length > 0 && (
        <div className="mb-4 sm:mb-6">
          <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3 uppercase tracking-wide">Key Achievements</h4>
          <ul className="space-y-1 sm:space-y-2">
            {exp.achievements.slice(0, 3).map((achievement, achIndex) => (
              <li key={achIndex} className="flex items-start space-x-2 sm:space-x-3 text-xs sm:text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
            {exp.achievements.length > 3 && (
              <li className="text-xs sm:text-sm text-primary font-medium pl-4 sm:pl-5">
                +{exp.achievements.length - 3} more achievements
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {exp.technologies.slice(0, 6).map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 sm:px-3 py-1 bg-muted/50 text-muted-foreground rounded-md text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors border border-border/50"
          >
            {tech}
          </span>
        ))}
        {exp.technologies.length > 6 && (
          <span className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium border border-primary/20">
            +{exp.technologies.length - 6} more
          </span>
        )}
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-8xl mx-auto px-2 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Journey
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A timeline of AI research, engineering, and education across multiple organizations and continents
          </p>
        </div>

        {/* Timeline Container - Mobile Responsive */}
        <div className="relative w-full">
          {/* Timeline Line - Responsive positioning */}
          <div className="absolute left-8 sm:left-12 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary z-0"></div>
          
          {/* Timeline Items - Responsive containers */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => {
              const year = getStartYear(exp.period);
              const isLeft = index % 2 === 1;
              
              return (
                <div key={index} className="relative flex items-center min-h-[120px]">
                  {/* Timeline Node - Responsive positioning */}
                  <div className="absolute left-2 sm:left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-20">
                    <div className="flex flex-col items-center">
                      <div className="mb-1 md:mb-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                        {year}
                      </div>
                      {renderTimelineLogo(exp.logoPath || undefined, exp.logoType || undefined, exp.company)}
                    </div>
                  </div>
                  
                  {/* Mobile-First Content Containers */}
                  <div className="w-full flex">
                    {/* Mobile: All content on right side */}
                    <div className="w-full md:hidden">
                      <div className="ml-20 sm:ml-24">
                        {renderExperienceContent(exp)}
                      </div>
                    </div>
                    
                    {/* Desktop: Alternating left/right */}
                    <div className="hidden md:flex w-full">
                      {/* Left Side Container */}
                      {isLeft && (
                        <div className="w-full pr-4 lg:pr-6 flex justify-end">
                          <div className="w-full max-w-3xl">
                            {renderExperienceContent(exp)}
                          </div>
                        </div>
                      )}
                      
                      {/* Right Side Container */}
                      {!isLeft && (
                        <div className="w-full pl-4 lg:pl-6 flex justify-start">
                          <div className="w-full max-w-3xl">
                            {renderExperienceContent(exp)}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Experience Summary */}
        <div className="mt-20 bg-background rounded-xl border border-border p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Additional Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground mb-4 text-lg">Leadership & Community</h4>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>ACM - IIT Hyderabad Student Chapter - ML Moderator (11 months)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>IT MEET v8.0 Documentation Lead and Marketing Representative</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Executive Board Member at Kathmandu University Computer Club</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Ambassador for Em-Blood Android Application with Nepal Red Cross</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground mb-4 text-lg">Volunteer Work</h4>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>IT Meet Photography Contest Event Coordinator</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Medical Volunteer for Basketball Tournament with Nepal Red Cross</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Organized workshops and awareness campaigns</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Managed teams and secured funding for various initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
