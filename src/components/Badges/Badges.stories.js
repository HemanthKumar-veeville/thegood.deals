import { Badges } from ".";

export default {
  title: "Components/Badges",
  component: Badges,
  argTypes: {
    color: {
      options: ["warning", "danger", "info", "gray", "success", "secondary", "primary", "light", "dark"],
      control: { type: "select" },
    },
    state: {
      options: ["fill", "duo-tone", "outline"],
      control: { type: "select" },
    },
    round: {
      options: ["full-round", "semi-round"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Primary",
    color: "warning",
    state: "fill",
    round: "full-round",
    className: {},
    divClassName: {},
    text1: "Warning",
    text2: "Success",
    text3: "Info",
  },
};
