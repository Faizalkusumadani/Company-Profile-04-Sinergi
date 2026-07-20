import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Pageloader from "@/components/PageLoader";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// ─── Site Config ──────────────────────────────────────────────────────────────
const siteConfig = {
  url: "https://sinergimandiriperkasa.co.id/",
  name: "Sinergi Mandiri Perkasa",
  description:
    "PT Sinergi Mandiri Perkasa merupakan perusahaan distribusi dengan dua lini bisnis utama, yaitu Building Materials dan FMCG Products. Kami menghadirkan produk berkualitas melalui layanan distribusi yang profesional dan terpercaya.",
  ogImage: "/logo/og-image.png",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | Distributor Bahan Bangunan, Sanitary dan FMCG di Jabodetabek`,
    template: `${siteConfig.name} | %s`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}`,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Distributor Bahan Bangunan, Sanitary dan FMCG di Jabodetabek`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `Banner ${siteConfig.name}`,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Distributor Bahan Bangunan, Sanitary dan FMCG di Jabodetabek`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  alternates: {
    canonical: `${siteConfig.url}`,
    languages: {
      "id-ID": `${siteConfig.url}id`,
      "en-US": `${siteConfig.url}en`,
    },
  },

  manifest: "/manifest.webmanifest",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Mengambil ID GA dari environment variable
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body>
        <Pageloader />
        <main className="bg-gray-800 min-h-screen">{children}</main>

        {/* Komponen GA hanya akan muncul jika gaId tersedia */}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
