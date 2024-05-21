import type { Meta, StoryObj } from "@storybook/react";
import PlaybackProgressBar from "./PlaybackProgressBar";

const meta = {
  title: "Components/Playback/PlaybackProgressBar",
  component: PlaybackProgressBar,
  parameters: {
    // layout: "centered",
    backgrounds: {
      default: "SpotifyDark",
      values: [{ name: "SpotifyDark", value: "#121212" }],
    },
  },
} satisfies Meta<typeof PlaybackProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
