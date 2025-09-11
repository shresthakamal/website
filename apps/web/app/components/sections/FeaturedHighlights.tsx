"use client";

import { useState, useEffect } from "react";

interface Highlight {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

export default function FeaturedHighlights() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const highlights: Highlight[] = [
    {
      id: "godaddy-role",
      title: "Senior ML Engineer at GoDaddy",
      subtitle: "GenAI for Enterprise Applications",
      description: "Leading GenAI initiatives and enterprise AI solutions",
      image: "/assets/img/godaddy/joining.jpeg",
      category: "Career Achievement",
      link: "#"
    },
    {
      id: "bravo-awards",
      title: "Bravo Award X3",
      subtitle: "BOSCH Engineering Excellence",
      description: "Recognized for excellent engineering skills in GenAI use cases",
      image: "/assets/img/bosch/team.jpg",
      category: "Awards",
      link: "#"
    },
    {
      id: "cost-savings",
      title: "€10M Annual Savings",
      subtitle: "Legal Document Classification",
      description: "Developed AI system saving millions at BOSCH",
      image: "/assets/img/bosch/5.jpeg",
      category: "Impact Project",
      link: "#"
    },
    {
      id: "patent-approved",
      title: "Patent Approved",
      subtitle: "Job Recommendation System",
      description: "Patent for inclusivity-focused job recommendation system",
      image: "/assets/files/iith/semester-4/thesis/0.jpg",
      category: "Innovation",
      link: "#"
    },
    {
      id: "aws-certification",
      title: "AWS ML Specialty Certified",
      subtitle: "Amazon Web Services",
      description: "Achieved AWS Machine Learning Specialty certification",
      image: "/assets/img/aws/certification.jpeg",
      category: "Certification",
      link: "#"
    },
    {
      id: "fuse-studio",
      title: "Top Impact Project",
      subtitle: "Fuse Studio Platform",
      description: "Automated video generation platform with significant impact",
      image: "/assets/files/fuse/paper/clickbait/clickbait.jpg",
      category: "Innovation",
      link: "#"
    }
  ];

  // Auto-slide every 3 seconds (pause when hovering)
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [highlights.length, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % highlights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  return (
    <div className="w-full px-6 py-8">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          Highlights
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Featured Highlights
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Here are some awards, articles, documents, certificates, and whatever else I am proud of.
        </p>
      </div>

        {/* Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-20 z-10 bg-primary/20 hover:bg-primary/40 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous highlight"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-20 z-10 bg-primary/20 hover:bg-primary/40 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next highlight"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 min-h-72 sm:h-64 lg:h-72 transition-all duration-500 ease-in-out mx-2">
            {/* Display cards based on screen size: 1 on mobile, 2 on tablet, 3 on desktop */}
            {[0, 1, 2].map((offset) => {
              const index = (currentSlide + offset) % highlights.length;
              const highlight = highlights[index];
              const categoryColors = ["text-blue-400", "text-green-400", "text-purple-400", "text-orange-400", "text-red-400", "text-yellow-400"];
              
              if (!highlight) return null;
              
              return (
                <div 
                  key={`${highlight.id}-${currentSlide}`} 
                  className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl ${
                    offset === 0 ? '' : 
                    offset === 1 ? 'hidden lg:block' : 
                    'hidden xl:block'
                  }`}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${highlight.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/60"></div>
                  </div>
                  <div className="relative h-full flex flex-col justify-end p-8 text-white">
                    <div className={`text-sm font-semibold mb-3 uppercase tracking-wider ${categoryColors[index % categoryColors.length]}`}>{highlight.category}</div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">{highlight.title}</h3>
                    <p className="text-base text-white/90 mb-4 leading-relaxed">{highlight.subtitle}</p>
                    <button className="flex items-center text-sm text-white/80 hover:text-white transition-colors font-medium">
                      VIEW DETAILS <span className="ml-2">↗</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-10 space-x-3">
            {highlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 relative overflow-hidden ${
                  index === currentSlide 
                    ? 'bg-primary shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              >
                {index === currentSlide && !isPaused && (
                  <div className="absolute inset-0 bg-primary-foreground/30 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
    </div>
  );
}
