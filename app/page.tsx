import { Hero } from "@/components/sections/hero";
import { WhatIsVibeCoding } from "@/components/sections/what-is-vibe-coding";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PlatformLadder } from "@/components/sections/platform-ladder";
import { CodingCrashCourse } from "@/components/sections/coding-crash-course";
import { Deploy } from "@/components/sections/deploy";
import { StarterRecipes } from "@/components/sections/starter-recipes";
import { ResourceBank } from "@/components/sections/resource-bank";
import { FAQ } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Theme Toggle - Fixed position */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <Hero
        variant="gradient"
        subtitle="CodeStarter.tech"
        title="Start Coding at the Speed of Thought"
        description="Learn to create real applications using natural language and AI assistants. No coding background required—just describe what you want to build."
        primaryCta={{
          label: "Get Started",
          href: "#what-is",
        }}
        secondaryCta={{
          label: "View Platforms",
          href: "#platform-ladder",
        }}
      />

      {/* What is Vibe Coding */}
      <WhatIsVibeCoding />

      {/* How It Works */}
      <HowItWorks />

      {/* Platform Ladder */}
      <PlatformLadder />

      {/* Coding Crash Course */}
      <CodingCrashCourse />

      {/* Deploy Section */}
      <Deploy />

      {/* Starter Recipes */}
      <StarterRecipes />

      {/* Resource Bank */}
      <ResourceBank />

      {/* FAQ + Glossary */}
      <FAQ />

      {/* Final CTA */}
      <Cta
        variant="gradient"
        title="Ready to Start Your CodeStarter Journey?"
        description="Pick a platform, choose a starter recipe, and build something today. The future of software development is conversational—and you're invited."
        primaryCta={{
          label: "Choose Your Platform",
          href: "#platform-ladder",
        }}
        secondaryCta={{
          label: "Browse Recipes",
          href: "#recipes",
        }}
      />
    </div>
  );
}
