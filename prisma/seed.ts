import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.project.deleteMany();
  await prisma.stat.deleteMany();
  await prisma.marginNote.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.processStep.deleteMany();

  // Seed SiteSettings
  await prisma.siteSettings.upsert({
    where: { id: "singleton" },
    update: {},
    create: {
      id: "singleton",
      heroKicker: "SEO Content Writer & Editor",
      heroHeadline: "I edit AI-written drafts\nuntil they read\nlike facts.",
      heroSubtext:
        "I take rough, AI-generated drafts on AI tools and software — fact-check every claim, fix keyword stuffing, restructure for readability, and deliver publish-ready copy that ranks and reads like it was written by a human who actually tested the product.",
      contactEmail: "shahidkn7877@gmail.com",
      footerName: "Shahid KN",
      footerRole: "SEO Content Writer & Editor",
      footerTagline: "Every satisfactory fact was once a rough draft.",
      metaTitle: "Shahid KN — SEO Specialist & Technical Content Editor",
      metaDescription:
        "I edit AI-written drafts on AI tools and software until they read like facts. Freelance SEO content writer and editor based in Pakistan.",
    },
  });

  // Seed Projects (9 articles)
  const projects = [
    {
      title: "Best AI Writing Tools in 2024: A Complete Comparison",
      description: "Comprehensive roundup of 12 AI writing assistants with pricing, features, and real output samples.",
      categoryTag: "AI Tools",
      fixTag: "Fact-check",
      fixLine: "Fixed — 3 tools listed pricing from 2022; updated all plans to current rates and removed a tool that was discontinued in March 2024.",
      order: 1,
    },
    {
      title: "Jasper vs Copy.ai vs Writesonic: Which One Actually Delivers?",
      description: "Head-to-head comparison testing each tool on the same 5 content briefs.",
      categoryTag: "Comparison",
      fixTag: "Fact-check",
      fixLine: "Fixed — original draft claimed Jasper had a free tier (it doesn't) and listed Copy.ai's word limit at 10k/month (actually 2k on free plan).",
      order: 2,
    },
    {
      title: "How to Use ChatGPT for SEO Content That Actually Ranks",
      description: "Step-by-step workflow for turning ChatGPT output into search-optimized articles.",
      categoryTag: "How-To",
      fixTag: "SEO",
      fixLine: "Fixed — draft stuffed 'AI SEO tool' 23 times in 1,200 words; reduced to 6 natural placements and added LSI variations.",
      order: 3,
    },
    {
      title: "Surfer SEO Review: Is It Worth the Price in 2024?",
      description: "Deep-dive review of Surfer's content editor, SERP analyzer, and audit features.",
      categoryTag: "AI Tools",
      fixTag: "Fact-check",
      fixLine: "Fixed — review cited 'NLP analysis' feature that was rebranded to 'Content Score' 18 months ago; corrected all feature names.",
      order: 4,
    },
    {
      title: "10 AI Image Generators Compared: Quality, Speed, and Cost",
      description: "Side-by-side comparison of Midjourney, DALL·E 3, Stable Diffusion, and 7 others.",
      categoryTag: "Comparison",
      fixTag: "Readability",
      fixLine: "Fixed — original was a wall of text with no clear winner per category; restructured into comparison tables with verdicts per use case.",
      order: 5,
    },
    {
      title: "How to Write Product Descriptions with AI (Without Sounding Like a Robot)",
      description: "Framework for using AI to draft e-commerce copy that converts.",
      categoryTag: "How-To",
      fixTag: "SEO",
      fixLine: "Fixed — draft used generic meta descriptions for all 5 examples; wrote unique, keyword-targeted descriptions for each product category.",
      order: 6,
    },
    {
      title: "Grammarly vs Hemingway vs ProWritingAid: The Editor's Verdict",
      description: "Tested all three on the same 2,000-word draft to measure real editing quality.",
      categoryTag: "Comparison",
      fixTag: "Fact-check",
      fixLine: "Fixed — draft said ProWritingAid catches passive voice 'better than Grammarly' with no data; ran both on the same text and added actual detection rates.",
      order: 7,
    },
    {
      title: "AI Content Detection: How to Make AI Text Undetectable (Ethically)",
      description: "Guide to editing AI-generated content so it passes detection tools while maintaining quality.",
      categoryTag: "How-To",
      fixTag: "Readability",
      fixLine: "Fixed — draft was ironic: an AI-sounding article about making AI sound human. Rewrote every section opening with specific anecdotes and varied sentence rhythm.",
      order: 8,
    },
    {
      title: "Notion AI vs Clickup AI: Which Workspace Tool Does AI Better?",
      description: "Feature-by-feature comparison of AI capabilities in the two leading workspace platforms.",
      categoryTag: "Comparison",
      fixTag: "Fact-check",
      fixLine: "Fixed — draft claimed ClickUp AI could generate Gantt charts (it can't); also corrected Notion AI's pricing from $8 to $10/member/month.",
      order: 9,
    },
  ];

  for (const project of projects) {
    await prisma.project.create({ data: project });
  }

  // Seed Stats
  const stats = [
    { value: "54", label: "Articles edited & published", order: 1 },
    { value: "120+", label: "Fabricated claims caught & removed", order: 2 },
    { value: "87", label: "Pricing & fact errors corrected", order: 3 },
    { value: "100%", label: "Original links & structure preserved", order: 4 },
  ];

  for (const stat of stats) {
    await prisma.stat.create({ data: stat });
  }

  // Seed Margin Notes
  const marginNotes = [
    {
      bold: "Fabricated spec",
      rest: "no source confirms this claim, cut it",
      order: 1,
    },
    {
      bold: "Hallucinated pricing",
      rest: "$8/mo plan doesn't exist, corrected to $10",
      order: 2,
    },
    {
      bold: "Keyword stuffing",
      rest: "'best AI tool' appears 14× in 800 words, reducing to 4",
      order: 3,
    },
    {
      bold: "Dead link",
      rest: "reference URL returns 404, replaced with archived source",
      order: 4,
    },
  ];

  for (const note of marginNotes) {
    await prisma.marginNote.create({ data: note });
  }

  // Seed Skills
  const skills = [
    { skill: "Fact-checking & source verification", tool: "Manual + Google Scholar", column: 0, order: 1 },
    { skill: "SEO content optimization", tool: "Surfer SEO / Clearscope", column: 0, order: 2 },
    { skill: "AI content humanization", tool: "Manual rewriting", column: 0, order: 3 },
    { skill: "Keyword research & mapping", tool: "Ahrefs / SEMrush", column: 0, order: 4 },
    { skill: "Readability editing", tool: "Hemingway + manual", column: 1, order: 1 },
    { skill: "Technical accuracy review", tool: "Product testing", column: 1, order: 2 },
    { skill: "Content structure & flow", tool: "Custom frameworks", column: 1, order: 3 },
    { skill: "Meta & title tag optimization", tool: "SERP analysis", column: 1, order: 4 },
  ];

  for (const skill of skills) {
    await prisma.skill.create({ data: skill });
  }

  // Seed Process Steps
  const processSteps = [
    {
      label: "First",
      title: "Verify",
      description: "Fact-check every claim, statistic, and product detail against primary sources.",
      order: 1,
    },
    {
      label: "Second",
      title: "Simplify",
      description: "Cut jargon, break up walls of text, and make every sentence earn its place.",
      order: 2,
    },
    {
      label: "Third",
      title: "Optimize",
      description: "Align headings, keywords, and structure with search intent — no stuffing.",
      order: 3,
    },
    {
      label: "Fourth",
      title: "Deliver",
      description: "Final proofread, meta tags, and a clean document ready to publish.",
      order: 4,
    },
  ];

  for (const step of processSteps) {
    await prisma.processStep.create({ data: step });
  }

  console.log("Seed data created successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
