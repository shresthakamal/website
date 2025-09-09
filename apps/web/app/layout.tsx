
import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { Providers } from "./providers";


const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kamal Shrestha - AI Research Engineer",
  description: "Senior Applied Research Engineer specializing in AI, NLP, and Large Language Models. Passionate about advancing artificial intelligence and natural language processing.",
  keywords: "Kamal Shrestha, AI Engineer, NLP, Machine Learning, Deep Learning, Large Language Models, Research",
  authors: [{ name: "Kamal Shrestha" }],
  openGraph: {
    title: "Kamal Shrestha - AI Research Engineer",
    description: "Senior Applied Research Engineer specializing in AI, NLP, and Large Language Models",
    url: "https://shresthakamal.com.np",
    siteName: "Kamal Shrestha",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamal Shrestha - AI Research Engineer",
    description: "Senior Applied Research Engineer specializing in AI, NLP, and Large Language Models",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-inter`}>
        <Providers>
          <div className="min-h-screen bg-background text-foreground transition-colors">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}