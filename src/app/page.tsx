import { Card } from "@/components/ui/card";
import "./styles/index.css";
import Playback from "@/components/Playback/Playback";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex flex-col px-2">
      <div className="page-wrapper">
        <Sidebar />
        <section className="pt-2">
          <Card className="h-10 bg-spotify-dark border-none"></Card>
        </section>
        <section className="pt-2">
          <Card className="h-10 bg-spotify-dark border-none"></Card>
        </section>
      </div>
      <Playback className="w-full fixed bottom-0 left-0" />
    </main>
  );
}
