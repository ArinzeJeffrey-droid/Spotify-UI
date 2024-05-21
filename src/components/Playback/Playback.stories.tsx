import type { Meta, StoryObj } from "@storybook/react";
import Playback from "./Playback";

const meta = {
  title: "Components/Playback",
  component: Playback,
  parameters: {
    // layout: "centered",
    backgrounds: {
      default: "SpotifyDark",
      values: [{ name: "SpotifyDark", value: "#121212" }],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Playback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
