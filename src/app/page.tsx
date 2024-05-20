import { Card } from "@/components/ui/card";
import "./styles/index.css";

export default function Home() {
  return (
    <main className="main">
      <section className="py-2 px-1">
        <Card className="h-10 bg-spotify-dark border-none"></Card>
      </section>
      <section className="py-2 px-1">
        <Card className="h-10 bg-spotify-dark border-none"></Card>
      </section>
      <section className="py-2 px-1">
        <Card className="h-10 bg-spotify-dark border-none"></Card>
      </section>
    </main>
  );
}
