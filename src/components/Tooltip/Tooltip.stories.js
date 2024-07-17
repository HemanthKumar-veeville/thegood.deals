import { Tooltip } from ".";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    position: {
      options: ["left", "right", "top", "bottom"],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "white", "dark"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    position: "left",
    color: "primary",
    className: {},
    polygonClassName: {},
    text: "Tooltip",
    polygonClassNameOverride: {},
    polygon: "/img/polygon-1-2.svg",
  },
};
