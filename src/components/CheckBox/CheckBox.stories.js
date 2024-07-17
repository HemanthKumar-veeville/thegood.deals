import { CheckBox } from ".";

export default {
  title: "Components/CheckBox",
  component: CheckBox,
  argTypes: {
    checked: {
      options: ["ON", "OFF"],
      control: { type: "select" },
    },
    style: {
      options: ["two", "three", "four", "one", "five"],
      control: { type: "select" },
    },
    text1: {
      options: ["OFF", "ON"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Checkbox Text",
    checked: "ON",
    style: "two",
    text1: "OFF",
    checkedOffStyleClassName: {},
    rectangleClassName: {},
    rectangleClassNameOverride: {},
    divClassName: {},
  },
};
