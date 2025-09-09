"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto text-center">
        <div className="space-y-8">
          {/* 404 Illustration */}
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl font-bold text-primary">404</h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Page Not Found
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Or explore these sections:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "/#about", label: "About" },
                { href: "/#experience", label: "Experience" },
                { href: "/#projects", label: "Projects" },
                { href: "/#publications", label: "Publications" },
                { href: "/#contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
