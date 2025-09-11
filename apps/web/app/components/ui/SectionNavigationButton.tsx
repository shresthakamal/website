"use client";

interface SectionNavigationButtonProps {
  nextSection: string;
  nextSectionName: string;
}

export function SectionNavigationButton({ nextSection, nextSectionName }: SectionNavigationButtonProps) {
  const handleClick = () => {
    document.querySelector(nextSection)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center mt-12">
      <button
        onClick={handleClick}
        className="group flex items-center gap-3 px-8 py-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-full font-medium transition-all duration-300 hover:scale-105 border border-primary/20 hover:border-primary/40"
      >
        <span>Next: {nextSectionName}</span>
        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>
  );
}
