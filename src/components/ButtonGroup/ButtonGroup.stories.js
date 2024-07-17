import { ButtonGroup } from ".";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    state: {
      options: ["active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "active",
    className: {},
    buttonClassName: {},
    text: "Support",
  },
};
