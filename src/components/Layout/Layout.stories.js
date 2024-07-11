import { Layout } from ".";
import { frame14x6, frame14x7, frame14x8 } from "../../images";

export default {
  title: "Components/Layout",
  component: Layout,
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
    headingClassName: {},
    text: "Savourez ensemble les délices de l&#39;artisanat local, en trois étapes simples",
    headingClassNameOverride: {},
    text1: "Créer votre annonce",
    text2:
      " En créant une annonce attrayante où vous définirez le prix, donnerez des détails sur les produits proposés et présenterez l&#39;artisan. Toutes les informations nécessaires à vos potentiels acheteurs.",
    divClassName: {},
    text3: "Inviter vos proches",
    text4:
      "Encouragez-les à explorer l&#39;offre et à passer commande, le tout facilité par une plateforme en ligne. C&#39;est l&#39;occasion de le faire découvrir des produits.",
    frameClassName: {},
    frame: { frame14x6 },
    divClassNameOverride: {},
    text5: "Livrer la marchandise",
    text6:
      "Cela inclut la préparation des colis par l&#39;artisan et leur acheminement jusqu&#39;à vous. Assurez-vous que la réception des produits par vos proches se déroule dans les meilleures conditions.",
    frameClassNameOverride: {},
    img: { frame14x7 },
    imgClassName: {},
    frame1: { frame14x8 },
  },
};
