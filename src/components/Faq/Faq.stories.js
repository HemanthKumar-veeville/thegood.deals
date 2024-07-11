import { Faq } from ".";

export default {
  title: "Components/Faq",
  component: Faq,
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
    divClassName: {},
    text:
      "Vous trouverez des réponses aux questions les plus courantes concernant notre plateforme de commande groupée de produits artisanaux.",
    buttonText: "Des intérrogations ? Contactez-nous",
    buttonStylePrimarySmallClassName: {},
    text1: "Comment fonctionne la commande groupée sur votre plateforme ?",
    questionClassName: {},
    text2: "Qui sont les artisans partenaires ?",
    text3: "Comment inviter mes proches à rejoindre une commande groupée ?",
    text4: "Comment est calculé le prix des produits ?",
    text5: "Comment fonctionne la livraison ?",
    buttonDivClassName: {},
    questionClassNameOverride: {},
  },
};
