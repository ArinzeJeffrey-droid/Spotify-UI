import React from "react";

const ProgressBar = () => {
  const progressPercentage = (80 / 184) * 100;

  return (
    <div className="relative w-full h-1 bg-spotify-light-gray rounded-md">
      <div
        className="absolute top-0 left-0 h-full bg-spotify-playback rounded-md"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
