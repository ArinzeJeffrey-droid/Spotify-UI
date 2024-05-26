"use client";

import React from "react";
import { Icon as FeatherIcon } from "react-feather";
import ProgressBar from "../../ProgressBar";
import { Tooltip } from "react-tooltip";
import Button from "../../Button";
import { buttons } from "./buttons";

type MediaButtonProps = {
  id: string;
  icon: FeatherIcon;
  label: string;
};
const ICON_COLOR = "#BCBABB";

const MediaButton = ({ id, icon: Icon, label }: MediaButtonProps) => (
  <Button id={id} aria-label={label}>
    <Icon stroke={ICON_COLOR} />
  </Button>
);

const MediaControls = () => {
  return (
    <React.Fragment>
      <div className="flex justify-end gap-4 pr-3 items-center w-[40%]">
        {buttons.slice(0, 5).map(({ id, icon, label }) => (
          <MediaButton key={id} id={id} icon={icon} label={label} />
        ))}
        <div className="w-[20%]">
          <ProgressBar />
        </div>
        {buttons.slice(5, 7).map(({ id, icon, label }) => (
          <MediaButton key={id} id={id} icon={icon} label={label} />
        ))}
      </div>
      {buttons.map(({ id, tooltip }) => (
        <Tooltip key={id} anchorSelect={`#${id}`} place="top">
          {tooltip}
        </Tooltip>
      ))}
    </React.Fragment>
  );
};

export default MediaControls;
