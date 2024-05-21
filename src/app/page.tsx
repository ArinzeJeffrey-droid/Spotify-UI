import { Card } from "@/components/ui/card";
import "./styles/index.css";
import Playback from "@/components/Playback/Playback";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <div className="page-wrapper">
        <section className="py-2 px-1">
          <Card className="h-10 bg-spotify-dark border-none"></Card>
        </section>
        <section className="py-2 px-1">
          <Card className="h-10 bg-spotify-dark border-none"></Card>
        </section>
        <section className="py-2 px-1">
          <Card className="h-10 bg-spotify-dark border-none"></Card>
        </section>
      </div>
      <Playback className="w-full fixed bottom-0 left-0" />
    </main>
  );
}
