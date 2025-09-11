import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import TechnicalCompetencies from "./components/sections/TechnicalCompetencies";
import { ExperienceServer } from "./components/sections/ExperienceServer";
import { News } from "./components/sections/News";
import { Blogs } from "./components/sections/Blogs";
import { Projects } from "./components/sections/Projects";
import { Publications } from "./components/sections/Publications";
import { Contact } from "./components/sections/Contact";
import { Navigation } from "./components/Navigation";
import { ScrollToTop } from "./components/ui/ScrollToTop";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <TechnicalCompetencies />
      <News />
      <Blogs />
      <ExperienceServer />
      <Projects />
      <Publications />
      <Contact />
      <ScrollToTop />
    </main>
  );
}