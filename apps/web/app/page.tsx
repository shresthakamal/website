import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
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
      <Experience />
      <Projects />
      <Publications />
      <Contact />
      <ScrollToTop />
    </main>
  );
}