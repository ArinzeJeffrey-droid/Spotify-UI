import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { Play as PlayIcon } from "react-feather";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "SpotifyDark",
      values: [{ name: "SpotifyDark", value: "#121212" }],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: "All",
    variant: "badge",
  },
};

export const Play: Story = {
  args: {
    children: <PlayIcon fill="black" />,
    variant: "play",
  },
};
