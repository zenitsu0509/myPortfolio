import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/common/theme-provider";

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: 'swap',
});

const fontHeadline = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Himanshu Gangwar - AI & Machine Learning Engineer",
  description: "Portfolio of Himanshu Gangwar, AI & Machine Learning Engineer specializing in ASR, NLP, and intelligent systems development.",
  keywords: ["Himanshu Gangwar", "AI Engineer", "Machine Learning", "NLP", "ASR", "Portfolio", "Python", "Data Science"],
  authors: [{ name: "Himanshu Gangwar" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased",
          fontBody.variable,
          fontHeadline.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
