import { Textarea } from ".";

export default {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {
    state: {
      options: ["disabled", "focused", "hover", "default"],
      control: { type: "select" },
    },
    helperText: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    label1: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    secondLabel: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    typeHelperText: "Helper Text",
    secondLabelText: "0/50",
    placeholder: "Placeholder",
    label: "Label",
    state: "disabled",
    helperText: "off",
    label1: "off",
    secondLabel: "off",
    className: {},
    divClassName: {},
    divClassNameOverride: {},
    groupClassName: {},
  },
};
