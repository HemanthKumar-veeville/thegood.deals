import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    breakpoint: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    breakpoint: "desktop",
    className: {},
    crEzPartagezEtClassName: {},
    text: "Créez, Partagez et Savourez avec une&nbsp;&nbsp;commande groupée !",
    text1:
      "En quelques clics, créez une commande, invitez vos proches et partagez le plaisir de découvrir ensemble les saveurs uniques de l&#39;artisanat local. Profitez de tarifs avantageux, soutenez les artisans de votre région, et transformez chaque achat en une expérience conviviale et enrichissante.",
    buttonText: "Créer un good deal",
    buttonStylePrimarySmallClassName: {},
    buttonDivClassName: {},
    buttonText1: "Gérer mes good deals",
  },
};
