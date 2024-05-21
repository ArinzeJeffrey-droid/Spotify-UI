import type { Meta, StoryObj } from "@storybook/react";
import SmallPlayListCard from "./SmallPlayListCard";

const meta = {
  title: "Components/SmallPlayListCard",
  component: SmallPlayListCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "SpotifyDark",
      values: [{ name: "SpotifyDark", value: "#121212" }],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SmallPlayListCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: "Liked songs",
    subtitle: " Album . John Legend",
    imgSrc: "/img/chocolate.jpg",
  },
};

export const WithoutSubtitle: Story = {
  args: {
    title: "Favorite",
    imgSrc: "/img/chocolate.jpg",
  },
};
