import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Google Fonts ulash
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🔥 SEO uchun maksimal darajada optimallashtirilgan metadata
export const metadata: Metadata = {
  title: "Zoyidjon | Full-Stack Developer & AI Mutaxassisi",
  description:
    "Men Zoyidjon, tajribali Full-Stack Developer. Next.js, Nuxt.js, NestJS, AI, Data Science, Computer Vision, NLP va React Native texnologiyalarida mutaxassis.",
  keywords: [
    "Full-Stack Developer",
    "Next.js Mutaxassisi",
    "Nuxt.js Dasturchi",
    "NestJS Backend Developer",
    "AI Developer",
    "Data Science",
    "Computer Vision",
    "Natural Language Processing",
    "NLP",
    "React Native Developer",
    "Web Dasturchi",
    "Machine Learning",
    "Deep Learning",
  ],
  authors: [{ name: "Zoyidjon", url: "https://yourwebsite.com" }],
  creator: "Zoyidjon",
  openGraph: {
    title: "Zoyidjon | AI, Data Science va Full-Stack Dasturchi",
    description:
      "Next.js, Nuxt.js, NestJS, AI, Data Science, Computer Vision, NLP va React Native texnologiyalarida tajribaga ega mutaxassis. Portfolio va loyihalarim bilan tanishing.",
    url: "https://yourwebsite.com",
    siteName: "Zoyidjon Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // Rasm URL manzili
        width: 1200,
        height: 630,
        alt: "Ismingiz Portfolio Preview",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ismingiz | Full-Stack Developer & AI Specialist",
    description:
      "AI, Data Science, Next.js, Nuxt.js, NestJS va React Native texnologiyalari bo‘yicha mutaxassis.",
    creator: "@yourTwitterHandle",
    images: ["https://yourwebsite.com/og-image.jpg"],
  },
  metadataBase: new URL("https://yourwebsite.com"),
  robots: {
    index: true, // Google uchun indeksatsiya yoqilgan
    follow: true, // Linklar kuzatilsin
    nocache: false,
  },
  alternates: {
    canonical: "https://yourwebsite.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <head>
        {/* 🔍 Schema.org (Strukturaviy ma’lumotlar) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ismingiz",
              jobTitle: "Full-Stack Developer, AI Specialist",
              url: "https://yourwebsite.com",
              sameAs: [
                "https://linkedin.com/in/yourprofile",
                "https://github.com/yourusername",
                "https://twitter.com/yourTwitterHandle",
              ],
              knowsAbout: [
                "Next.js",
                "Nuxt.js",
                "NestJS",
                "AI",
                "Data Science",
                "Machine Learning",
                "Deep Learning",
                "Computer Vision",
                "Natural Language Processing",
                "React Native",
                "Web Development",
                "Backend Development",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelancer",
              },
              description:
                "Men tajribali Full-Stack Developer va AI mutaxassisiman. Next.js, Nuxt.js, NestJS, Data Science, Computer Vision, NLP va React Native texnologiyalarida yetakchiman.",
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
