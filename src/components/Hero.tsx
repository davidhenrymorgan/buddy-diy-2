import { BuddysDIYLogo } from "./BuddysDIYLogo";
import { EmailForm } from "./EmailForm";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <BuddysDIYLogo
            variant="color"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        {/* Hero Content */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Greeting */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight">
            What's going on Everybuddy! 👋
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-4 leading-relaxed">
            I'm building something for you guys...
          </p>

          <p className="text-base sm:text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            After 4 years of teaching car flipping on YouTube, I'm creating
            tools and resources to help <span className="font-bold text-brand-red">YOU</span> succeed faster.
            Join the waitlist to be first to know.
          </p>

          {/* Email Form */}
          <EmailForm />
        </div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-pattern"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#hero-pattern)" />
        </svg>
      </div>
    </section>
  );
}
