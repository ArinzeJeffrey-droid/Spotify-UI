import type { Meta, StoryObj } from "@storybook/react";
import PlaybackControls from "./PlaybackControls";

const meta = {
  title: "Components/Playback/PlaybackControls",
  component: PlaybackControls,
  parameters: {
    // layout: "centered",
    backgrounds: {
      default: "SpotifyDark",
      values: [{ name: "SpotifyDark", value: "#121212" }],
    },
  },
} satisfies Meta<typeof PlaybackControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
