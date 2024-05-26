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
        <main className="hidden lg:block">
          <div className="flex h-screen gap-2">
            <Sidebar />
            <div className="page-wrapper">
              <section className="pt-2 h-full overflow-hidden">
                <Card className="bg-spotify-dark border-none">{children}</Card>
              </section>
              <QueueSection />
            </div>
          </div>
          <Playback className="w-full fixed bottom-0 left-0" />
        </main>
        <div className="flex md:hidden h-screen justify-center items-center text-white text-center p-4">
          <p>
            Please view this app on a laptop or desktop for the best experience.
          </p>
        </div>
      </body>
    </html>
  );
}
