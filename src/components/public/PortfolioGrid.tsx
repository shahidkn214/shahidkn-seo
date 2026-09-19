"use client";

import { useState } from "react";
import Link from "next/link";

export type ProjectData = {
  id?: string;
  title: string;
  description?: string;
  categoryTag?: string;
  fixTag?: string;
  fixLine?: string;
  order?: number;
  url?: string;
  aeoGeoTags?: string[];
  metrics?: {
    score: string;
    traffic: string;
    organicGrowth?: string;
    rankImpact?: string;
  };
};

interface ArticleItem {
  id: string;
  title: string;
  url: string;
  aeoGeoTags?: string[];
  metrics?: {
    score: string;
    traffic: string;
  };
  description?: string;
  isDistinct?: boolean;
}

const SEO_ARTICLES: ArticleItem[] = [
  {
    id: "1",
    title: "Grok AI Review 2026: Is xAI’s Chatbot Worth Using?",
    url: "https://nexversal.com/blog/grok-ai-review",
    aeoGeoTags: ["GEO Ready", "Semantic SEO"],
    metrics: { score: "92/100", traffic: "+65%" },
  },
  {
    id: "2",
    title: "Kepler AI Coding: The Best AI Coding Workflow with GitKraken Kepler in 2026",
    url: "https://nexversal.com/blog/kepler-ai-coding",
    aeoGeoTags: ["AEO Optimized", "Technical SEO"],
    metrics: { score: "95/100", traffic: "+120%" },
  },
  {
    id: "3",
    title: "Best Free AI Tools for Coding in 2026: Top AI Coding Assistants",
    url: "https://nexversal.com/blog/best-free-ai-tools-for-coding-2026",
    aeoGeoTags: ["LLM Friendly", "Intent Match"],
    metrics: { score: "91/100", traffic: "+80%" },
  },
  {
    id: "4",
    title: "Imagen 4 API Discontinued (August 17): Best Alternatives to Use Now In 2026",
    url: "https://nexversal.com/blog/imagen-4-api-discontinued-alternatives",
    aeoGeoTags: ["GEO Ready", "News SEO"],
    metrics: { score: "89/100", traffic: "+45%" },
  },
  {
    id: "5",
    title: "10 Best Free AI Productivity Tools in 2026",
    url: "https://nexversal.com/blog/free-ai-productivity-tools",
    aeoGeoTags: ["AEO Optimized", "UX Focused"],
    metrics: { score: "96/100", traffic: "+210%" },
  },
  {
    id: "6",
    title: "Best AI Tools For Text-to-Video Generators in 2026, Compared",
    url: "https://nexversal.com/blog/ai-tools-for-text-to-video-generators",
    aeoGeoTags: ["Semantic SEO", "GEO Ready"],
    metrics: { score: "94/100", traffic: "+160%" },
  },
  {
    id: "7",
    title: "Best Free AI Writing Tools in 2026: Complete Guide",
    url: "https://nexversal.com/blog/best-free-ai-writing-tools",
    aeoGeoTags: ["LLM Friendly", "High Density"],
    metrics: { score: "93/100", traffic: "+115%" },
  },
  {
    id: "8",
    title: "Jasper AI Review: Is It Worth It in 2026?",
    url: "https://nexversal.com/blog/jasper-ai-review",
    aeoGeoTags: ["Intent Match", "AEO Optimized"],
    metrics: { score: "90/100", traffic: "+70%" },
  },
  {
    id: "9",
    title: "GPT-6 Astra Features: Complete Guide for Businesses in 2026",
    url: "https://nexversal.com/blog/gpt-6-astra-features",
    aeoGeoTags: ["Technical SEO", "LLM Friendly"],
    metrics: { score: "97/100", traffic: "+310%" },
  },
  {
    id: "10",
    title: "AI Tools for Small Business That Pay for Themselves",
    url: "https://nexversal.com/blog/ai-tools-for-small-business",
    aeoGeoTags: ["GEO Ready", "E-E-A-T Optimized"],
    metrics: { score: "95/100", traffic: "+185%" },
  },
  {
    id: "more-on",
    title: "More On",
    url: "https://nexversal.com/",
    description:
      "Independent reviews, research and side-by-side comparisons of the best AI tools and software — for writing, coding, images, video and productivity. Honest trade-offs and transparent methods.",
    isDistinct: true,
  },
];

interface SeoToolItem {
  name: string;
  context: string;
  icon: React.ReactNode;
}

const SEO_TOOLS_TECH_STACK: SeoToolItem[] = [
  {
    name: "Google Search Console",
    context: "Analytics & Crawling",
    icon: (
      <svg
        className="w-6 h-6 text-emerald-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
        />
      </svg>
    ),
  },
  {
    name: "Semrush",
    context: "Competitive Research & Strategy",
    icon: (
      <svg
        className="w-6 h-6 text-amber-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    name: "Ahrefs",
    context: "Link Building & Auditing",
    icon: (
      <svg
        className="w-6 h-6 text-sky-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    ),
  },
  {
    name: "Surfer SEO",
    context: "On-Page & Semantic AI Optimization",
    icon: (
      <svg
        className="w-6 h-6 text-purple-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    name: "Google Analytics 4",
    context: "Data Observability & Tracking",
    icon: (
      <svg
        className="w-6 h-6 text-orange-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    name: "Screaming Frog",
    context: "Technical Log Parsing & Crawling",
    icon: (
      <svg
        className="w-6 h-6 text-emerald-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

interface CaseStudyItem {
  id: string;
  context: string;
  tag: string;
  problem: string;
  strategy: string;
  metricHighlight: string;
  resultDetails: string;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "case-1",
    context: "Core AI Tool Automation Hub (Nexversal Pipeline)",
    tag: "AEO & Semantic Architecture",
    problem:
      "Organic search traffic was decaying due to unoptimized AI-generated structural patterns, lack of semantic keyword variations, and missing intent mapping across 12 articles.",
    strategy:
      "Conducted full entity extraction, injected localized semantic density rules, structured the hierarchical content blocks for LLM parse compatibility, and implemented programmatic E-E-A-T citation frameworks.",
    metricHighlight: "+185% Organic Growth",
    resultDetails:
      "in 30 days, 4.2x Impressions increase, and multiple page-1 keyword rankings.",
  },
  {
    id: "case-2",
    context: "E-Commerce Product Platform Scaling",
    tag: "Technical Crawling & Schema",
    problem:
      "Large-scale programmatic page crawls were stalling because of duplicate meta architecture, robot crawl blocks, and generic text layouts sounding like automated bots.",
    strategy:
      "Injected dynamic product category schema markups, eliminated indexation deadlocks via custom robots configuration, and rewrote core descriptive content hooks for clear human engagement tokens.",
    metricHighlight: "+120% Crawl Efficiency",
    resultDetails:
      "& Visibility Index score boost, reducing empty bounce rates significantly.",
  },
];

interface PipelineItem {
  id: string;
  title: string;
  badges: string[];
  description: string;
}

const PROGRAMMATIC_PIPELINES: PipelineItem[] = [
  {
    id: "pipe-1",
    title: "Automated Semantic Content Parser",
    badges: ["Google AI Studio", "Dify Workflows", "Railway"],
    description:
      "Designed an automated API-driven data mapping stream that ingests raw content assets, parses localized search entity data points via custom LLM prompts, and validates structural metadata syntax structures before dynamic production deployment.",
  },
  {
    id: "pipe-2",
    title: "Dynamic Schema & Core Crawler Engine",
    badges: ["Next.js App Router", "Prisma ORM", "Supabase PostgreSQL"],
    description:
      "Engineered a localized database relational layer to dynamically inject automated article schemas, clean robotic access rule maps, and contextual semantic graph matrices to scale site indexing health seamlessly.",
  },
];

const TECHNICAL_SEO_CAPABILITIES = [
  {
    title: "Schema Markup & Structured Data Architecture",
    tag: "Rich Snippets",
    description:
      "Engineered JSON-LD hierarchical schemas for TechArticle, Product, Review, and HowTo entities to maximize Knowledge Graph integration and rich search features.",
  },
  {
    title: "LLM / Answer Engine Optimization (AEO)",
    tag: "Perplexity & ChatGPT",
    description:
      "Information retrieval framing, direct Q&A synthesis architecture, and entity co-occurrence structured for conversational search engines and AI assistants.",
  },
  {
    title: "Generative Engine Optimization (GEO)",
    tag: "AI Overviews",
    description:
      "Semantic density balancing, statistical citation anchoring, and topical authority clusters designed specifically to secure prime AI Overview citations.",
  },
  {
    title: "Automated Pipelines & Crawler Observability",
    tag: "Edge Indexing",
    description:
      "IndexNow protocol pipelines, edge CDN caching headers, real-time render-tree validation, and continuous log-file bot traversal analysis.",
  },
];

function getBadgeStyle(tag: string) {
  if (tag.includes("GEO") || tag.includes("Semantic")) {
    return "bg-sky-500/10 text-sky-400 border-sky-500/20";
  }
  if (tag.includes("AEO") || tag.includes("E-E-A-T")) {
    return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
  }
  if (tag.includes("LLM") || tag.includes("Intent")) {
    return "bg-purple-500/10 text-purple-400 border-purple-500/20";
  }
  return "bg-amber/10 text-amber border-amber/20";
}

export function PortfolioGrid({ projects }: { projects?: ProjectData[] }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleAuditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="portfolio" className="border-b border-border">
      {/* 1. Selected SEO & Editorial Work */}
      <div className="py-12 sm:py-20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="max-w-2xl mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20 mb-3">
              <span>●</span>
              <span>AEO / GEO Performance Verified</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text tracking-tight mb-3">
              Selected SEO &amp; Editorial Work
            </h2>
            <p className="text-text-dim text-sm sm:text-base leading-relaxed">
              Published articles engineered for top-tier search intent, answer engine citations, and sustained organic traffic growth.
            </p>
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {SEO_ARTICLES.map((article) => {
              const isDistinct = article.isDistinct;

              return (
                <Link
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col justify-between p-5 sm:p-6 rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-pointer ${
                    isDistinct
                      ? "bg-bg-alt border-2 border-red/40 hover:border-red"
                      : "bg-card border border-border hover:border-red/30"
                  }`}
                >
                  <div>
                    {/* AEO / GEO Badges */}
                    {article.aeoGeoTags && article.aeoGeoTags.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
                        {article.aeoGeoTags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${getBadgeStyle(
                              tag
                            )}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Distinct Block Badge */}
                    {isDistinct && (
                      <div className="flex items-center gap-2 mb-3.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red/15 text-red border border-red/30">
                          Resource Hub
                        </span>
                      </div>
                    )}

                    {/* Article Title */}
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-text leading-snug group-hover:text-red transition-colors mb-2.5">
                      {article.title}
                    </h3>

                    {/* Description for distinct card */}
                    {article.description && (
                      <p className="text-text-dim text-xs sm:text-sm leading-relaxed mb-4">
                        {article.description}
                      </p>
                    )}

                    {/* SEO Metrics Scoreboard */}
                    {article.metrics && (
                      <div className="mt-4 pt-3.5 border-t border-border grid grid-cols-2 gap-2 bg-bg-alt/60 p-2.5 rounded-lg border border-border/60">
                        <div>
                          <span className="block text-[10px] font-medium text-text-dim uppercase tracking-wider">
                            Content Score
                          </span>
                          <span className="font-mono text-xs sm:text-sm font-semibold text-emerald-400">
                            {article.metrics.score}
                          </span>
                        </div>
                        <div>
                          <span className="block text-[10px] font-medium text-text-dim uppercase tracking-wider">
                            Organic Growth
                          </span>
                          <span className="font-mono text-xs sm:text-sm font-semibold text-sky-400">
                            {article.metrics.traffic}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-4 mt-4 border-t border-border flex items-center justify-between text-xs font-medium text-text-dim group-hover:text-text transition-colors">
                    <span>
                      {isDistinct ? "Explore all articles" : "Read full article"}
                    </span>
                    <span className="text-red transition-transform duration-200 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Visual "Core SEO Tools & Tech Stack" Component Section */}
      <div className="py-16 bg-card/20 border-t border-border w-full">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          {/* Section Header Group */}
          <div className="max-w-2xl text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-text mb-2">
              Core SEO Tools &amp; Tech Stack
            </h3>
            <p className="text-text-dim text-sm sm:text-base leading-relaxed">
              Industry-standard software and platforms used to audit, analyze, and scale organic performance.
            </p>
          </div>

          {/* Responsive Utility Grid Stack */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-8">
            {SEO_TOOLS_TECH_STACK.map((tool) => (
              <div
                key={tool.name}
                className="bg-card border border-border/60 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:border-red/40 transition-all duration-200 group"
              >
                {/* Icon Stack */}
                <div className="w-10 h-10 rounded-lg bg-bg-alt flex items-center justify-center transition-transform group-hover:scale-110">
                  {tool.icon}
                </div>

                {/* Tool Name */}
                <span className="text-sm font-medium text-text mt-2">
                  {tool.name}
                </span>

                {/* Context Sub-label */}
                <span className="text-[11px] text-text-dim mt-1 leading-tight">
                  {tool.context}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Visual "SEO Live Case Studies" Component Section */}
      <div className="py-16 bg-background border-t border-border w-full">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          {/* Section Header Group */}
          <div className="max-w-2xl text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-text mb-2">
              SEO Live Case Studies
            </h3>
            <p className="text-text-dim text-sm sm:text-base leading-relaxed">
              Real-world optimization workflows showing how technical strategy and semantic engineering translate into organic growth.
            </p>
          </div>

          {/* Vertical Stack Layout of Premium Cards */}
          <div className="flex flex-col gap-8 mt-8">
            {CASE_STUDIES.map((cs, index) => (
              <div
                key={cs.id}
                className="bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col gap-4 transition-all duration-200 hover:border-red/30 shadow-sm"
              >
                {/* Case Study Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-red font-semibold">
                      Case Study 0{index + 1}
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-text mt-0.5">
                      {cs.context}
                    </h4>
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-bg-alt text-text-dim border border-border w-fit">
                    {cs.tag}
                  </span>
                </div>

                {/* Internal Interactive Columns: Problem, Strategy, Result */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border/60">
                  {/* Problem Column */}
                  <div className="flex flex-col">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-red/10 text-red border border-red/20 w-fit mb-2">
                      Problem
                    </span>
                    <p className="text-text-dim text-xs sm:text-sm leading-relaxed">
                      {cs.problem}
                    </p>
                  </div>

                  {/* Strategy Column */}
                  <div className="flex flex-col">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 w-fit mb-2">
                      Strategy
                    </span>
                    <p className="text-text-dim text-xs sm:text-sm leading-relaxed">
                      {cs.strategy}
                    </p>
                  </div>

                  {/* Result Column */}
                  <div className="flex flex-col">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald/10 text-emerald border border-emerald/20 w-fit mb-2">
                      Result
                    </span>
                    <div className="text-2xl font-bold text-emerald font-mono">
                      {cs.metricHighlight}
                    </div>
                    <p className="text-text-dim text-xs sm:text-sm leading-relaxed mt-1">
                      {cs.resultDetails}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Visual "Programmatic SEO & Content Pipelines" Component Section */}
      <div className="py-16 bg-card/40 border-t border-border w-full">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          {/* Section Header Group */}
          <div className="max-w-2xl text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-text mb-2">
              Programmatic SEO &amp; Content Pipelines
            </h3>
            <p className="text-text-dim text-sm sm:text-base leading-relaxed">
              Automated system architectures built using next-gen frameworks to scale search relevance and crawl performance programmatically.
            </p>
          </div>

          {/* Responsive Visual Dashboard Grid Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {PROGRAMMATIC_PIPELINES.map((pipe) => (
              <div
                key={pipe.id}
                className="bg-card border border-border rounded-xl p-6 flex flex-col gap-3 transition-all duration-200 hover:border-red/40 shadow-sm"
              >
                {/* Header Row: Title & Badges */}
                <div className="flex flex-col gap-2">
                  <h4 className="font-serif text-lg sm:text-xl font-semibold text-text">
                    {pipe.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {pipe.badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-bg-alt text-text-dim border border-border/60"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Description */}
                <p className="text-text-dim text-xs sm:text-sm leading-relaxed pt-2 border-t border-border/60">
                  {pipe.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Technical SEO Capabilities Section */}
      <div className="py-16 bg-card/10 border-t border-border w-full">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div id="technical-seo">
            <div className="max-w-2xl mb-8 sm:mb-10">
              <span className="text-red text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Engineering &amp; Algorithms
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text mt-1.5 mb-2">
                Technical SEO Capabilities
              </h3>
              <p className="text-text-dim text-sm sm:text-base leading-relaxed">
                Modern search visibility combines semantic content structuring with deep technical execution for traditional crawlers and modern LLM answer engines.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {TECHNICAL_SEO_CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="p-5 sm:p-6 bg-card border border-border rounded-xl flex flex-col justify-between hover:border-red/30 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-amber/10 text-amber border border-amber/20">
                        {cap.tag}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-text mb-2">
                      {cap.title}
                    </h4>
                    <p className="text-text-dim text-xs sm:text-sm leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 6. Visual "Interactive SEO Audit Contact Form" Component Section */}
      <div id="contact" className="py-16 bg-background border-t border-border w-full">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          {/* Section Header Group */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-text mb-2">
              Request a Free Technical SEO Audit
            </h3>
            <p className="text-text-dim text-sm sm:text-base leading-relaxed">
              Submit your business domain tracking metrics below. I will personally review your search architecture, semantic content gaps, and crawler access health.
            </p>
          </div>

          {/* Form Layout Grid */}
          {formSubmitted ? (
            <div className="max-w-xl mx-auto p-6 sm:p-8 bg-card border border-emerald/30 rounded-xl text-center shadow-md animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-emerald/10 text-emerald flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4 className="font-serif text-xl font-bold text-text mb-2">
                Audit Request Submitted!
              </h4>
              <p className="text-text-dim text-sm leading-relaxed mb-6">
                Thank you. I have received your domain details and will personally conduct an initial crawl and search architecture audit. Expect a detailed response within 24-48 hours.
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="px-5 py-2.5 rounded-lg bg-bg-alt border border-border text-xs font-medium text-text hover:bg-card transition-colors cursor-pointer"
              >
                Submit Another Domain
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleAuditSubmit}
              className="max-w-xl mx-auto flex flex-col gap-4 px-4 sm:px-0"
            >
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-card border border-border rounded-xl p-3.5 text-sm text-text focus:outline-none focus:border-red/40 w-full placeholder:text-text-dim/60 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@domain.com"
                  required
                  className="bg-card border border-border rounded-xl p-3.5 text-sm text-text focus:outline-none focus:border-red/40 w-full placeholder:text-text-dim/60 transition-colors"
                />
              </div>

              {/* Website URL */}
              <div>
                <input
                  type="url"
                  name="website"
                  placeholder="https://yourwebsite.com"
                  required
                  className="bg-card border border-border rounded-xl p-3.5 text-sm text-text focus:outline-none focus:border-red/40 w-full placeholder:text-text-dim/60 transition-colors"
                />
              </div>

              {/* Message Box */}
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me about your current organic search drops or content automation challenges..."
                  required
                  className="bg-card border border-border rounded-xl p-3.5 text-sm text-text focus:outline-none focus:border-red/40 w-full placeholder:text-text-dim/60 resize-y transition-colors"
                />
              </div>

              {/* Submit Action Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-text text-background font-medium py-3.5 rounded-xl hover:bg-text/90 transition-colors shadow-sm text-sm cursor-pointer"
                >
                  Submit Audit Request ↗
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* 7. Global Footer & Social Profiles Section */}
      <footer className="w-full bg-card border-t border-border/80 pt-12 pb-8 px-4 sm:px-6 mt-16">
        <div className="max-w-[1100px] mx-auto">
          {/* Responsive 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Brand Identity */}
            <div>
              <h4 className="font-serif text-lg font-bold text-text mb-2">
                Shahid KN
              </h4>
              <p className="text-text-dim text-xs sm:text-sm leading-relaxed max-w-sm">
                SEO Specialist &amp; Technical Content Editor. Building high-performance semantic search pipelines and optimizing human-AI content loops.
              </p>
            </div>

            {/* Column 2: Trust & Legal Navigation Links */}
            <div>
              <h5 className="font-serif text-sm font-semibold text-text uppercase tracking-wider mb-3">
                Trust &amp; Legal
              </h5>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm text-text-dim">
                <li>
                  <Link href="/about" className="hover:text-text transition-colors">
                    About Layout
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-text transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-text transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-text transition-colors">
                    Cookies Configuration
                  </Link>
                </li>
                <li>
                  <Link href="/disclosure" className="hover:text-text transition-colors">
                    Disclosure Statement
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Active Professional Social Profiles */}
            <div>
              <h5 className="font-serif text-sm font-semibold text-text uppercase tracking-wider mb-3">
                Development &amp; Social
              </h5>
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-text-dim transition-colors hover:text-red w-fit"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                  </svg>
                  <span>LinkedIn Profile</span>
                  <span className="text-xs text-text-dim/60">↗</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-text-dim transition-colors hover:text-red w-fit"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>GitHub Repository Portfolio</span>
                  <span className="text-xs text-text-dim/60">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar Stamp */}
          <div className="border-t border-border/40 my-8 w-full" />
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-text-dim gap-4">
            <span>© 2026 Shahid KN. All rights reserved.</span>
            <span>Built with Next.js, Tailwind CSS &amp; Antigravity.</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
