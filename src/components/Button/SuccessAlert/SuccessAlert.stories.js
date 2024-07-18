import { SuccessAlert } from ".";

export default {
  title: "Components/SuccessAlert",
  component: SuccessAlert,
  argTypes: {
    style: {
      options: ["two", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "two",
    className: {},
    frameClassName: {},
    groupClassName: {},
    divClassName: {},
    text: "Your item has been added successfully",
  },
};
