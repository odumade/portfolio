import { ChatWidget } from "@/components/chat-widget";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollTop } from "@/components/scroll-top";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { portfolio } from "@/data/portfolio";
import { siteUrl } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

const url = siteUrl(portfolio.siteUrl);

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: portfolio.seo.title,
    template: `%s · ${portfolio.name}`,
  },
  description: portfolio.seo.description,
  applicationName: portfolio.name,
  authors: [{ name: portfolio.name }],
  openGraph: {
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    url,
    siteName: portfolio.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.seo.title,
    description: portfolio.seo.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: url },
};

const themeScript = `(function(){try{var s=localStorage.getItem("theme");var t=s==="light"||s==="dark"?s:"dark";var d=document.documentElement;d.setAttribute("data-theme",t);d.style.colorScheme=t;}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.name,
    jobTitle: portfolio.role,
    email: portfolio.email,
    address: portfolio.location,
    url,
    description: portfolio.seo.description,
  };

  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${display.variable} ${mono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <a className="skip-link" href="#main-content">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="focus:outline-none" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <ChatWidget />
          <ScrollTop />
          <WhatsAppButton />
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
