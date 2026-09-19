type HeroProps = {
  kicker?: string;
  headline?: string;
  subtext?: string;
  marginNotes?: { id: string; bold: string; rest: string; order: number }[];
};

export function Hero({ kicker, headline, subtext }: HeroProps) {
  return (
    <section className="border-b border-border">
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-12 px-4">
        {/* Blank Centered Spatial Placeholder Container */}
        <div
          aria-hidden="true"
          className="rounded-full mx-auto mb-6 w-36 h-36 md:w-44 md:h-44 border-4 border-dashed border-border bg-card/40 flex items-center justify-center"
        />

        {/* Centered Identity & Name */}
        <h1 className="text-center font-serif text-3xl sm:text-5xl font-bold tracking-tight text-text mb-2">
          Shahid KN
        </h1>

        {/* Designation */}
        <p className="text-red text-sm sm:text-base font-semibold uppercase tracking-wider mb-4">
          SEO Specialist &amp; Technical Content Editor
        </p>

        {/* Core Introductory Bio */}
        <p className="text-text-dim text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          {subtext ||
            "I take rough, AI-generated drafts on software and AI tools — fact-check claims, fix keyword stuffing, restructure for readability, and deliver publish-ready copy that ranks and reads naturally."}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="inline-flex items-center px-6 py-3 bg-red text-white font-medium rounded-md hover:opacity-90 transition-opacity"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-border text-text font-medium rounded-md hover:bg-card transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
