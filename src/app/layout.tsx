import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { Card } from "@/components/ui/card";
import Playback from "@/components/Playback/Playback";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import "./styles/index.css";
import QueueSection from "@/components/QueueSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify",
  description: "Spotify UI Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "bg-black overflow-hidden")}>
        <main className="flex h-screen gap-2">
          <Sidebar />
          <div className="page-wrapper">
            <section className="pt-2 h-full overflow-hidden">
              <Card className="bg-spotify-dark border-none">{children}</Card>
            </section>
            <QueueSection />
          </div>
        </main>
        <Playback className="w-full fixed bottom-0 left-0" />
      </body>
    </html>
  );
}
