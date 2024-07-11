import { BreakpointDesktopWrapper } from ".";
import { placeHolderImage14 } from "../../images";

export default {
  title: "Components/BreakpointDesktopWrapper",
  component: BreakpointDesktopWrapper,
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
    text: "Notre approche",
    headingClassName: {},
    text1: "Embarquez dans l&#39;aventure des saveurs artisanales",
    text2:
      "En rejoignant notre communauté de commande groupée, bénéficiez de prix avantageux tout en partageant le plaisir de goûter au meilleur de l&#39;artisanat local. Faites de chaque achat une expérience unique, soutenant les artisans et partageant des moments avec vos proches.",
    headingClassNameOverride: {},
    text3: "Expérience de<br/>consommation partagée",
    text4:
      "Une expérience sociale enrichissante, renforçant les liens avec famille et amis tout en découvrant ensemble des produits exceptionnels.",
    divClassName: {},
    text5: "Soutien et valorisation<br/>des artisans locaux",
    text6:
      "En privilégiant les produits issus de l&#39;artisanat local, vous contribuez au maintien et à la valorisation des savoir-faire uniques de nos régions.",
    buttonText: "Comment ça fonctionne ?",
    buttonText1: "À propos de nous",
    placeholderImage: { placeHolderImage14 },
  },
};
