import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahmoud Atiyah | Portfolio",
  description:
    "Developer, designer, and innovator building modern web apps, automations, and game prototypes.",
  openGraph: {
    title: "Mahmoud Atiyah | Portfolio",
    description:
      "Developer, designer, and innovator building modern web apps, automations, and game prototypes.",
    images: [{ url: "/images/img1.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud Atiyah | Portfolio",
    description:
      "Developer, designer, and innovator building modern web apps, automations, and game prototypes.",
    images: ["/images/img1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        />
      </head>
      <body className={`${poppins.variable} bg-slate-950 text-slate-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
