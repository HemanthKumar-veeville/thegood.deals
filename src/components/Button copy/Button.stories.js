import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    kind: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "select" },
    },
    state: {
      options: ["disable", "hover", "active", "default"],
      control: { type: "select" },
    },
    round: {
      options: ["squire", "full-rounded", "semi-round"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    buttonText: "Button",
    kind: "primary",
    color: "primary",
    state: "disable",
    round: "squire",
    className: {},
    buttonTextClassName: {},
  },
};
