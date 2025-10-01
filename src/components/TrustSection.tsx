export function TrustSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 text-foreground">
          Why I'm Doing This
        </h2>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <p className="text-lg sm:text-xl leading-relaxed">
            I've read your comments, DMs, and emails. For years, you've been
            asking for more—more in-depth training, tools to help you analyze
            deals, and a community where you can get your questions answered.
          </p>

          <p className="text-lg sm:text-xl leading-relaxed">
            I hear you, and I'm finally ready to deliver. But here's the
            thing: <span className="font-bold text-brand-red">I'm building this the right way</span>—no
            shortcuts, no half-baked products, no selling out.
          </p>

          <p className="text-lg sm:text-xl leading-relaxed">
            My goal has always been to serve you guys, not just make a quick
            buck. That's why I'm starting here—I want to hear what{" "}
            <span className="font-bold text-brand-red">YOU</span> actually need before I build it. This isn't
            about me pushing something on you. It's about creating tools and
            resources that genuinely help you succeed with car flipping.
          </p>

          <p className="text-lg sm:text-xl leading-relaxed font-semibold text-foreground">
            Join the waitlist, and let's build this together.
          </p>
        </div>
      </div>
    </section>
  );
}
