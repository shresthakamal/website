import { getAllExperiences } from '../../actions/experiences';
import { Experience } from './Experience';
import { SectionNavigationButton } from "../ui/SectionNavigationButton";

export async function ExperienceServer() {
  try {
    const experiences = await getAllExperiences();
    return <Experience experiences={experiences} />;
  } catch (error) {
    console.error('Failed to load experiences:', error);
    
    // Fallback UI in case of error
    return (
      <section id="experience" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-secondary/20">
        <div className="max-w-8xl mx-auto px-2 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional Journey
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A timeline of AI research, engineering, and education across multiple organizations and continents
            </p>
          </div>
          <div className="text-center p-8 bg-background rounded-xl border border-border">
            <p className="text-muted-foreground">
              Unable to load experience data at the moment. Please try refreshing the page.
            </p>
          </div>
        </div>

        <SectionNavigationButton nextSection="#projects" nextSectionName="Projects" />

      </section>
    );
  }
}
