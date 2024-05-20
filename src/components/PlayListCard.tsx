import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  imgSrc: string;
};

const PlayListCard = ({ title, subtitle, imgSrc }: Props) => {
  return (
    <Card className="group border-none shadow-none bg-transparent hover:bg-spotify-gray">
      <CardContent className="p-3">
        <div className="relative">
          <Image
            src={imgSrc}
            alt={title}
            width={200}
            height={200}
            className="w-full h-64 object-cover rounded-lg"
          />
          <button className="absolute bottom-2 hidden right-2 bg-spotify-green text-black p-2 rounded-full group-hover:block">
            Play
          </button>
        </div>
      </CardContent>
      <CardFooter className="flex-col px-3 text-white">
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-spotify-text-subdued">{subtitle}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PlayListCard;
