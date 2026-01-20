import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ludvigi Khukhunaishvili — Senior Full-Stack Web Developer",
  description:
    "Senior Full-Stack Web Developer & Program Director. Building scalable, high-performance web platforms with React, Vue, WordPress, Node.js, PHP, and MySQL.",
  metadataBase: new URL("https://example.com"), 
  openGraph: {
    title: "Ludvigi Khukhunaishvili — Senior Full-Stack Web Developer",
    description:
      "High-performance web platforms, dashboards & educational systems. React • Vue • WordPress • Node.js • PHP • MySQL",
    url: "https://example.com",
    siteName: "Ludvigi Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ludvigi Khukhunaishvili — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ludvigi Khukhunaishvili — Senior Full-Stack Web Developer",
    description:
      "High-performance web platforms, dashboards & educational systems. React • Vue • WordPress • Node.js • PHP • MySQL",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
