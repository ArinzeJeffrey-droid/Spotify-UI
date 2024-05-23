import Button from "@/components/Button";
import PlayListCard from "@/components/PlayListCard";
import SmallPlayListCard from "@/components/SmallPlayListCard";
import { playlists } from "@/mockData";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowDownCircle,
  Bell,
} from "react-feather";

export default function Home() {
  return (
    <div className="p-4 flex flex-col viewport-height-minus-padding">
      <div className="bg-spotify-dark mb-5 shrink-0">
        <div className="flex justify-between mb-5">
          <div>
            <Button variant="icon" className="mr-3">
              <ChevronLeft />
            </Button>
            <Button variant="icon">
              <ChevronRight />
            </Button>
          </div>
          <div className="flex gap-5">
            <Button variant="badge">
              <ArrowDownCircle />
              <span className="ml-2">Install App</span>
            </Button>
            <Button variant="icon">
              <Bell />
            </Button>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="badge">All</Button>
          <Button variant="badge">Music</Button>
          <Button variant="badge">Podcasts</Button>
        </div>
      </div>

      <div className="grow shrink min-h-0 overflow-auto">
        <ul className="grid grid-cols-3 gap-x-2 mb-10">
          {playlists.slice(0, 9).map((playlist, index) => (
            <li key={index} className="mb-1">
              <SmallPlayListCard
                title={playlist.title}
                imgSrc={playlist.imgSrc}
              />
            </li>
          ))}
        </ul>

        <div className="mb-10">
          <div className="flex justify-between">
            <Link href={"#"} className="text-lg text-white hover:underline">
              Made For John Doe
            </Link>
            <Link
              href={"#"}
              className="text-sm text-spotify-text-subdued hover:underline"
            >
              Show all
            </Link>
          </div>
          <ul className="grid grid-cols-4">
            {playlists.slice(0, 4).map((playlist, index) => (
              <li key={index} className="mb-1">
                <PlayListCard
                  title={playlist.title}
                  subtitle={playlist.subtitle}
                  imgSrc={playlist.imgSrc}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-10">
          <div className="flex justify-between">
            <Link href={"#"} className="text-lg text-white hover:underline">
              Recently Played
            </Link>
            <Link
              href={"#"}
              className="text-sm text-spotify-text-subdued hover:underline"
            >
              Show all
            </Link>
          </div>
          <ul className="grid grid-cols-4">
            {playlists.slice(4, 8).map((playlist, index) => (
              <li key={index} className="mb-1">
                <PlayListCard
                  title={playlist.title}
                  subtitle={playlist.subtitle}
                  imgSrc={playlist.imgSrc}
                />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex justify-between">
            <Link href={"#"} className="text-lg text-white hover:underline">
              Episodes For you
            </Link>
            <Link
              href={"#"}
              className="text-sm text-spotify-text-subdued hover:underline"
            >
              Show all
            </Link>
          </div>
          <ul className="grid grid-cols-4">
            {playlists.slice(8, 12).map((playlist, index) => (
              <li key={index} className="mb-1">
                <PlayListCard
                  title={playlist.title}
                  subtitle={playlist.subtitle}
                  imgSrc={playlist.imgSrc}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
