import { Hero } from "@/components/sections/Hero";
import { Overview } from "@/components/sections/Overview";
import { Timeline } from "@/components/sections/Timeline";
import { Leaderboard } from "@/components/sections/Leaderboard";
import { Prizes } from "@/components/sections/Prizes";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-gold/30 selection:text-gold-glow">
      <Hero />
      <Overview />
      <Timeline />
      <Leaderboard />
      <Prizes />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
