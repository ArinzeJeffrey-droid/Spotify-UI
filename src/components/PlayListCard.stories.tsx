import type { Meta, StoryObj } from "@storybook/react";
import PlayListCard from "./PlayListCard";

const meta = {
  title: "Components/PlayListCard",
  component: PlayListCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "SpotifyDark",
      values: [{ name: "SpotifyDark", value: "#121212" }],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PlayListCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: "80s Pop Rock",
    subtitle: "The essential pop rock songs from the 80s...",
    imgSrc: "/img/chocolate.jpg",
  },
};
