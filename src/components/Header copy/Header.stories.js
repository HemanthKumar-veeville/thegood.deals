import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    HEADER: {
      options: ["OPEN", "CLOSE"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    HEADER: "OPEN",
    className: {},
  },
};
