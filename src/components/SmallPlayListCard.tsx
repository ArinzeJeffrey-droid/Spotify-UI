import React from "react";
import Image from "next/image";
import Button from "./Button";
import { Play as PlayIcon } from "react-feather";

type Props = {
  title: string;
  subtitle?: string;
  imgSrc: string;
};

const SmallPlayListCard = ({ title, subtitle, imgSrc }: Props) => {
  return (
    <div className="group flex p-2 rounded-md hover:bg-spotify-gray">
      <div className="w-28 h-24">
        <Image
          src={imgSrc}
          alt={"jd"}
          width={100}
          height={100}
          className="rounded-md w-full h-full"
        />
      </div>
      <div className="px-4 w-full flex justify-between items-center">
        <div>
          <p className="text-white">{title}</p>
          {subtitle && (
            <p className="text-spotify-text-subdued text-sm">{subtitle}</p>
          )}
        </div>
        {!subtitle && (
          <Button variant="green" className="invisible group-hover:visible">
            <PlayIcon className="text-black" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SmallPlayListCard;
