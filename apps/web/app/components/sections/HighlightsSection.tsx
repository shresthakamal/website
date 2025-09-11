import FeaturedHighlights from "./FeaturedHighlights";

export default function HighlightsSection() {
  return (
    <section id="highlights" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedHighlights />
      </div>
    </section>
  );
}
