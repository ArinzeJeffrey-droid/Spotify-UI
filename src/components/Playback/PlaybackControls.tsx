import React from "react";
import {
  Shuffle,
  SkipForward,
  SkipBack,
  PauseCircle,
  Repeat,
} from "react-feather";

const PlaybackControls = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      <Shuffle className="text-spotify-playback" />
      <SkipBack fill="#BCBABB" stroke="#BCBABB" />
      <PauseCircle size={50} fill="#BCBABB" />
      <SkipForward fill="#BCBABB" stroke="#BCBABB" />
      <Repeat className="text-spotify-playback" />
    </div>
  );
};

export default PlaybackControls;
