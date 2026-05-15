import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pavulum — Objects, ideas & stories for a more conscious life",
    template: "%s — Pavulum",
  },
  description:
    "A curated space for books, courses, apparel, and meaningful conversations on intentional living, philosophy, and modern culture.",
  authors: [{ name: "Pavulum" }],
  openGraph: {
    title: "Pavulum — A more conscious life",
    description:
      "Books, courses, apparel and conversations for the intentional life. Curated by Pavulum.",
    type: "website",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2590373f-ab46-4a2c-ae9b-561217725630/id-preview-528bb50f--2325b69f-7fcc-4952-bae9-06d69f6a6bfc.lovable.app-1778599357383.png",
        width: 1200,
        height: 630,
        alt: "Pavulum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Pavulum",
    title: "Pavulum — A more conscious life",
    description:
      "Books, courses, apparel and conversations for the intentional life. Curated by Pavulum.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2590373f-ab46-4a2c-ae9b-561217725630/id-preview-528bb50f--2325b69f-7fcc-4952-bae9-06d69f6a6bfc.lovable.app-1778599357383.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
