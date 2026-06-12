import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "MotoManager — Bike & Scooter Rental Management App",
    template: "%s",
  },
  description:
    "Run your bike rental business from your phone — receipts, fleet, staff, and customers, all in one app. Built for shop owners across India.",
  openGraph: {
    title: "MotoManager — Bike & Scooter Rental Management App",
    description:
      "Run your bike rental business from your phone — receipts, fleet, staff, and customers, all in one app.",
    type: "website",
    siteName: "MotoManager",
    images: [{ url: "/logo.png", width: 1254, height: 1254 }],
  },
  twitter: {
    card: "summary",
    title: "MotoManager — Bike & Scooter Rental Management App",
    description:
      "Run your bike rental business from your phone — receipts, fleet, staff, and customers, all in one app.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white font-sans text-gray-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
