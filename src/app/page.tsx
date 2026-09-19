import { prisma } from "@/lib/prisma";
import { Header } from "@/components/public/Header";
import { Hero } from "@/components/public/Hero";
import { StatsBar } from "@/components/public/StatsBar";
import { PortfolioGrid } from "@/components/public/PortfolioGrid";

export default async function HomePage() {
  let settings = null;
  let stats: { id: string; value: string; label: string; order: number }[] = [];

  try {
    const [dbSettings, dbStats] = await Promise.all([
      prisma.siteSettings.findUnique({ where: { id: "singleton" } }),
      prisma.stat.findMany({ orderBy: { order: "asc" } }),
    ]);
    settings = dbSettings;
    stats = dbStats;
  } catch (e) {
    console.warn("Prisma fallback triggered:", e);
  }

  const s = settings ?? {
    heroKicker: "SEO Specialist & Technical Content Editor",
    heroHeadline: "I edit AI-written drafts\nuntil they read\nlike facts.",
    heroSubtext:
      "I take rough, AI-generated drafts on software and AI tools — fact-check claims, fix keyword stuffing, restructure for readability, and deliver publish-ready copy that ranks and reads naturally.",
  };

  const finalStats =
    stats && stats.length > 0
      ? stats
      : [
          { id: "1", value: "54", label: "Articles edited & published", order: 1 },
          { id: "2", value: "120+", label: "Fabricated claims caught & removed", order: 2 },
          { id: "3", value: "87", label: "Pricing & fact errors corrected", order: 3 },
          { id: "4", value: "100%", label: "Original links & structure preserved", order: 4 },
        ];

  return (
    <>
      <Header />
      <main>
        <Hero
          kicker={s.heroKicker}
          headline={s.heroHeadline}
          subtext={s.heroSubtext}
        />
        <StatsBar stats={finalStats} />
        <PortfolioGrid />
      </main>
    </>
  );
}
