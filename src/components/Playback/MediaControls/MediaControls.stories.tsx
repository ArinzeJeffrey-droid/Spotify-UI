import type { Meta, StoryObj } from "@storybook/react";
import MediaControls from "./MediaControls";

const meta = {
  title: "Components/Playback/MediaControls",
  component: MediaControls,
  parameters: {
    // layout: "centered",
    backgrounds: {
      default: "SpotifyDark",
      values: [{ name: "SpotifyDark", value: "#121212" }],
    },
  },
} satisfies Meta<typeof MediaControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
