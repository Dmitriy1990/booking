import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components";
import { Footer } from "./components/footer/footer";

const manrope = Manrope({
  variable: "--font-marope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Travila",
    template: "%S | Travila",
  },
  description: "Booking app",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
