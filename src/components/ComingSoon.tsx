export function ComingSoon() {
  const offerings = [
    {
      title: "Advanced Car Flipping Courses",
      description:
        "Deep-dive training on finding, buying, fixing, and selling cars for maximum profit",
    },
    {
      title: "Private Community",
      description:
        "Get your questions answered, share deals, and connect with other car flippers",
    },
    {
      title: "Deal Analysis Tools",
      description:
        "Calculate profits, estimate repair costs, and evaluate deals before you buy",
    },
    {
      title: "Exclusive Market Insights",
      description:
        "Stay ahead with market trends, pricing data, and opportunities in your area",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-foreground">
            Here's what I'm considering...
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
            These are some ideas I'm working on. But I want{" "}
            <span className="font-bold text-brand-red">YOUR</span> input—that's why I'm
            starting here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-sm hover:border-brand-red hover:shadow-md transition-all duration-200"
            >
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 text-foreground">
                {offering.title}
              </h3>
              <p className="text-base text-foreground/90 leading-relaxed">
                {offering.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg sm:text-xl font-semibold text-foreground/95 max-w-2xl mx-auto">
            Have other ideas? Want to tell me what you need most? That's
            exactly why I'm building this list.{" "}
            <span className="text-brand-red font-bold">Your feedback matters.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
