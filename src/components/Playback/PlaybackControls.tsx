"use client";
import React from "react";
import {
  Shuffle,
  SkipForward,
  SkipBack,
  PauseCircle,
  Repeat,
} from "react-feather";
import { Tooltip } from "react-tooltip";
import Button from "../Button";

const tooltips = [
  { id: "shuffle", tooltip: "Shuffle" },
  { id: "previous", tooltip: "Previous" },
  { id: "pause", tooltip: "Pause" },
  { id: "next", tooltip: "Next" },
  { id: "repeat", tooltip: "Repeat" },
];

const PlaybackControls = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center gap-5">
        <Button id="shuffle">
          <Shuffle className="text-spotify-playback" />
        </Button>
        <Button id="previous">
          <SkipBack fill="#BCBABB" stroke="#BCBABB" />
        </Button>
        <Button id="pause">
          <PauseCircle size={50} fill="#BCBABB" />
        </Button>
        <Button id="next">
          <SkipForward fill="#BCBABB" stroke="#BCBABB" />
        </Button>
        <Button id="repeat">
          <Repeat className="text-spotify-playback" />
        </Button>
      </div>
      {tooltips.map(({ id, tooltip }) => (
        <Tooltip key={id} anchorSelect={`#${id}`} place="top">
          {tooltip}
        </Tooltip>
      ))}
    </React.Fragment>
  );
};

export default PlaybackControls;
