import React from "react";
import {
  PlayCircle,
  Mic,
  Speaker,
  Layers,
  Volume2,
  Maximize2,
  Layout,
} from "react-feather";
import ProgressBar from "../ProgressBar";

const MediaControls = () => {
  return (
    <div className="flex justify-end gap-4 pr-3 items-center w-[40%]">
      <PlayCircle stroke="#BCBABB" />
      <Mic stroke="#BCBABB" />
      <Speaker stroke="#BCBABB" />
      <Layers stroke="#BCBABB" />
      <Volume2 stroke="#BCBABB" />
      <div className="w-[20%]">
        <ProgressBar />
      </div>
      <Layout stroke="#BCBABB" />
      <Maximize2 stroke="#BCBABB" />
    </div>
  );
};

export default MediaControls;
