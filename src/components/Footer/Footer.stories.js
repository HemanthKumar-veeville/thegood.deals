import { Footer } from ".";

export default {
  title: "Components/Footer",
  component: Footer,
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
    linksClassName: {},
    divClassName: {},
    text: "Plan du site",
    text1: "À propos",
    text2: "Comment ça marche ?",
    text3: "Commande groupée",
    text4: "Assistance / Contact",
    text5: "FAQ",
    text6: "Informations",
    text7: "Mentions légales",
    text8: "Politique de confidentialité",
    text9: "Conditions Générales<br/>de Ventes et d’Utilisation",
    text10: "Notre newsletter engagée",
    text11: "Restez informé (une seule fois par mois) de nos actualités",
    textInputTextInputClassName: {},
    textInputText: "Entrer votre email",
    textInputDivClassName: {},
    buttonText: "S’abonner",
    spanClassName: {},
    text12: "En vous abonnant, vous acceptez notre ",
    spanClassNameOverride: {},
    spanClassName1: {},
    text13: " et consentez à recevoir des mises à jour de notre société.",
    text14: "© 2024 The Good Deals. Tous droits réservés.",
    columnClassName: {},
  },
};
