import React from "react";
import ProgressBar from "../ProgressBar";

const PlaybackProgressBar = () => {
  const currentTime = "1:20";
  const duration = "3:04";

  return (
    <div className="text-xs flex items-center gap-2 text-spotify-text-subdued">
      <span>{currentTime}</span>
      <ProgressBar />
      <span>{duration}</span>
    </div>
  );
};

export default PlaybackProgressBar;
