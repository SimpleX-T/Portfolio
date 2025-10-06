import type { Metadata } from "next";
import "./globals.css";
import {
  Bitcount_Grid_Double,
  Bricolage_Grotesque,
  Caveat,
} from "next/font/google";
import Layout from "@/components/Layout";
import Providers from "@/providers";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bg",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Mark Ndubuisi",
  description: "Software Engineer",
  keywords: ["Mark Ndubuisi", "software engineer", "freelancer"],
  authors: [{ name: "Mark Ndubuisi", url: "https://devtochukwu.me" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mark Ndubuisi",
    description: "Mark Ndubuisi is a software engineer and a freelancer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${caveat.variable} ${bricolage.className} tracking-tight`}
      >
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
