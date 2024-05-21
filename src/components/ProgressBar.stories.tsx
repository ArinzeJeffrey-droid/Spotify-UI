import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "./ProgressBar";

const meta = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: {
    backgrounds: {
      default: "SpotifyDark",
      values: [{ name: "SpotifyDark", value: "#121212" }],
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
