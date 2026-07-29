import { Feeling } from "./types";

export const FEELING_ANXIETY: Feeling = {
  slug: "anxiety",
  name: "Anxiété",
  catch: {
    description: "Je ressens de l'épuisement",
    sentence:
      "Tu dors, mais tu te réveilles épuisé. Tu relis trois fois la même page sans rien retenir. Tout te demande un effort, même répondre à un message.<br>La fatigue ou l’épuisement qui durent n'est pas un manque de volonté. C'est un signal, et il y a des choses à faire.",
  },
  video: {
    duration: 5,
    guest: {
      name: "Jérôme Lacinga",
      role: "Psychologue clinicien",
    },
  },
  recap: [
    "Un stress qui dure use le corps autant que la tête.",
    "Une fatigue qui ne passe pas malgré le repos mérite un avis médical.",
    "Des leviers simples existent, à commencer par la régularité de tes horaires.",
    "Si ça ne passe pas, n’hésite pas à en parler à un médecin, un psy ou à un proche",
  ],
};

export const feelings = [FEELING_ANXIETY];
