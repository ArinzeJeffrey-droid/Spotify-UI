import React from "react";
import SmallPlayListCard from "../SmallPlayListCard";
import PlaybackProgressBar from "./PlaybackProgressBar";
import PlaybackControls from "./PlaybackControls";
import MediaControls from "./MediaControls";
import clsx from "clsx";

type Props = {
  className?: string;
};

const Playback = ({ className }: Props) => {
  return (
    <div className={clsx("flex justify-between items-center", className)}>
      <div className="w-[30%]">
        <SmallPlayListCard
          title="Lovesong"
          subtitle="Adele"
          imgSrc="/img/chocolate.jpg"
        />
      </div>
      <div className="w-[40%]">
        <PlaybackControls />
        <PlaybackProgressBar />
      </div>

      <MediaControls />
    </div>
  );
};

export default Playback;
