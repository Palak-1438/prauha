import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Prauha | Full-Stack Developer",
    template: "%s | Prauha",
  },
  description: "Building Scalable Digital Products for Businesses, Founders, and Agencies.",
  keywords: ["Full-Stack Developer", "Next.js", "React", "Node.js", "SaaS Development", "Web App Development", "Software Engineer"],
  authors: [{ name: "Palak Dusiya" }],
  creator: "Palak Dusiya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prauha.com",
    title: "Prauha | Full-Stack Developer",
    description: "Building Scalable Digital Products for Businesses, Founders, and Agencies.",
    siteName: "Prauha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prauha | Full-Stack Developer",
    description: "Building Scalable Digital Products for Businesses, Founders, and Agencies.",
    creator: "@Palak24148",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}