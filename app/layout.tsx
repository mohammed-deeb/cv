import type { Metadata } from "next";
import ThemeProvider from "./theme/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "MD Portfolio",
  description: "Professional resume of Mohammed Deeb. Shows my experience, and projects.",
  robots: "index, follow",
  alternates: {
    canonical: "https://mohammed-deeb.github.io/cv/",
  },
  openGraph: {
    title: "MD Portfolio",
    description: "Professional resume of Mohammed Deeb. Shows my experience, and projects",
    url: "https://mohammed-deeb.github.io/cv/",
    siteName: "Mohammed Deeb Resume",
    images: [
      {
        url:  "https://mohammed-deeb.github.io/cv/me_phd_squared_sm.png",
        width: 500,
        height: 394,
        alt: "MD photo preview",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="business" lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-[#191919] text-[#37352f] dark:text-[#ffffffcf]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
