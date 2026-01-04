import type { Metadata } from "next";
import { Bebas_Neue, Sora } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const displayFont = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sansFont = Sora({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/img1.png",
        width: 1200,
        height: 630,
        alt: "Mahmoud Atiyah portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/img1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body className="bg-background text-foreground antialiased" suppressHydrationWarning>
        <Header />
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-35" />
          <div className="pointer-events-none absolute -top-24 right-[-10%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,hsla(74,100%,60%,0.22),transparent_65%)] blur-3xl" />
          <div className="pointer-events-none absolute top-[35%] left-[-12%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,hsla(138,100%,55%,0.2),transparent_65%)] blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-18%] right-[8%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,hsla(190,100%,55%,0.18),transparent_65%)] blur-3xl" />
          <div className="relative z-10 flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
