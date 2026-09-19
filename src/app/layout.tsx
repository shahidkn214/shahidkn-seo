import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import { prisma } from "@/lib/prisma";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await prisma.siteSettings.findUnique({
    where: { id: "singleton" },
  });

  const title = "Shahid KN — SEO Specialist & Technical Content Editor";
  const description =
    settings?.metaDescription ??
    "I edit AI-written drafts on AI tools and software until they read like facts. Freelance SEO specialist and technical content editor.";

  return {
    title: settings?.metaTitle === "Shahid KN — SEO Content Writer & Editor" ? title : (settings?.metaTitle ?? title),
    description,
    openGraph: {
      title: settings?.metaTitle === "Shahid KN — SEO Content Writer & Editor" ? title : (settings?.metaTitle ?? title),
      description,
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="system" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light' || theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else {
                    document.documentElement.setAttribute('data-theme', 'system');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${sourceSerif.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
