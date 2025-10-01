import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { ComingSoon } from "@/components/ComingSoon";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <TrustSection />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
}
