import Link from "next/link";
import { Card } from "./ui/card";
import Button from "./Button";
import { X } from "react-feather";
import SmallPlayListCard from "./SmallPlayListCard";
import { playlists } from "@/mockData";

const QueueSection = () => {
  return (
    <section className="pt-2 mr-2 hidden xl:block">
      <Card className="bg-spotify-dark border-none">
        <div className="p-4 flex flex-col viewport-height-minus-padding">
          <div className="shrink-0 flex justify-between mb-7 items-center">
            <Link href={"#"} className="text-white">
              Queue
            </Link>
            <Button variant="invisible">
              <X className="text-spotify-playback" />
            </Button>
          </div>

          <div className="grow shrink min-h-0 overflow-auto">
            <div className="mb-12">
              <p className="text-white mb-3">Now playing</p>
              <SmallPlayListCard
                title="Cola"
                subtitle="Lana Del Ray"
                imgSrc="/img/veggie.jpg"
              />
            </div>

            <p className="text-white mb-3">Next from: Liked Songs</p>
            <ul>
              {playlists.map((playlist, index) => (
                <li key={index} className="mb-4 last:mb-7">
                  <SmallPlayListCard
                    title={playlist.title}
                    subtitle={playlist.subtitle}
                    imgSrc={playlist.imgSrc}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default QueueSection;
