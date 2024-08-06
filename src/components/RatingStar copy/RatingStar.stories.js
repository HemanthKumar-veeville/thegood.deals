import { RatingStar } from ".";

export default {
  title: "Components/RatingStar",
  component: RatingStar,
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    rating: {
      options: ["five-star", "two-star", "three-star", "one-star", "four-star"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    rating: "five-star",
    className: {},
  },
};
