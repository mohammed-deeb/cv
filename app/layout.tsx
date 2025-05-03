import type { Metadata } from "next";
import ThemeProvider from "./theme/theme-provider";
import "./globals.css";

const domainPath = "https://mohammed-deeb.github.io/cv"

export const metadata: Metadata = {
  title: "MD Portfolio",
  description: "Professional resume of Mohammed Deeb. Shows my experience, and projects.",
  icons: domainPath + "/favicon.ico",
  robots: "index, follow",
  alternates: {
    canonical: domainPath + "",
  },
  openGraph: {
    title: "MD Portfolio",
    description: "Professional resume of Mohammed Deeb. Shows my experience, and projects",
    url: domainPath + "",
    siteName: "Mohammed Deeb Resume",
    images: [
      {
        url:  domainPath + "" + "/me_phd_squared_sm.png",
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
