import {
  PlayCircle,
  Mic,
  Speaker,
  Layers,
  Volume2,
  Maximize2,
  Layout,
} from "react-feather";

export const buttons = [
  {
    id: "now-playing",
    icon: PlayCircle,
    tooltip: "Now playing view",
    label: "Now playing",
  },
  { id: "lyrics", icon: Mic, tooltip: "Lyrics", label: "Lyrics" },
  {
    id: "connect",
    icon: Speaker,
    tooltip: "Connect to a device",
    label: "Connect",
  },
  { id: "queue", icon: Layers, tooltip: "Queue", label: "Queue" },
  { id: "mute", icon: Volume2, tooltip: "Mute", label: "Mute" },
  {
    id: "mini-player",
    icon: Layout,
    tooltip: "Open Miniplayer",
    label: "Miniplayer",
  },
  {
    id: "fullscreen",
    icon: Maximize2,
    tooltip: "Fullscreen",
    label: "Fullscreen",
  },
];
