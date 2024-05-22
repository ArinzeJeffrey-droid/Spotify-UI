import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Home as HomeIcon,
  Search,
  Book,
  Plus,
  ArrowRight,
  List,
} from "react-feather";
import Button from "@/components/Button";
import SmallPlayListCard from "@/components/SmallPlayListCard";
import { playlists } from "@/mockData";

const links = [
  {
    name: "Home",
    href: "#",
    icon: <HomeIcon className="mr-5" />,
  },
  {
    name: "Search",
    href: "#",
    icon: <Search className="mr-5 " />,
  },
];

const Sidebar = () => {
  return (
    <section className="pt-2 pl-2 h-full">
      <Card className="border-none bg-spotify-dark p-4">
        <ul className="mt-3">
          {links.map((link, index) => (
            <li className="mb-5" key={index}>
              <Link
                href={link.href}
                className="text-spotify-playback flex items-center hover:text-white"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Card>
      <Card className="border-none flex flex-col mt-2 column-height bg-spotify-dark p-4">
        <div className="bg-spotify-dark shrink-0">
          <div className="mt-3 flex justify-between items-center">
            <Link
              href={"#"}
              className="text-spotify-playback flex items-center hover:text-white"
            >
              <Book className="mr-3" />
              <span>Your Library</span>
            </Link>
            <div className="flex gap-5 text-spotify-playback">
              <Plus />
              <ArrowRight />
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <Button variant="badge">Playlists</Button>
            <Button variant="badge">Artists</Button>
            <Button variant="badge">Albums</Button>
          </div>
        </div>

        <div className="mt-5 grow shrink min-h-0 overflow-auto">
          <div className="flex text-sm justify-between items-center text-spotify-playback">
            <Search />
            <Link href={"#"} className="flex items-center">
              <span className="mr-1">Recents</span>
              <List />
            </Link>
          </div>
          <ul className="mt-6">
            {playlists.map((playlist, index) => (
              <li key={index} className="mb-4">
                <SmallPlayListCard
                  title={playlist.title}
                  subtitle={playlist.subtitle}
                  imgSrc={playlist.imgSrc}
                />
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </section>
  );
};

export default Sidebar;
