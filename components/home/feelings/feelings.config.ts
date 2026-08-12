export interface FeelingTileConfig {
  slug: string;
  fallbackLabel: string;
  icon: string;
}

// TODO: update with right feelings
export const FEELING_TILES: FeelingTileConfig[] = [
  { slug: "anxiety", fallbackLabel: "Anxiété / stress", icon: "https://www.systeme-de-design.gouv.fr/v1.14/storybook/img/placeholder.1x1.png" },
  { slug: "tiredness", fallbackLabel: "Fatigue", icon: "https://www.systeme-de-design.gouv.fr/v1.14/storybook/img/placeholder.1x1.png" },
  { slug: "solitude", fallbackLabel: "Solitude / isolement", icon: "https://www.systeme-de-design.gouv.fr/v1.14/storybook/img/placeholder.1x1.png" },
  { slug: "suicidalThoughts", fallbackLabel: "Idées suicidaires", icon: "https://www.systeme-de-design.gouv.fr/v1.14/storybook/img/placeholder.1x1.png" },
  { slug: "eatingDisorder", fallbackLabel: "Rapport compliqué à la nourriture", icon: "https://www.systeme-de-design.gouv.fr/v1.14/storybook/img/placeholder.1x1.png" },
  { slug: "substances", fallbackLabel: "Rapport compliqué à certaines substances", icon: "https://www.systeme-de-design.gouv.fr/v1.14/storybook/img/placeholder.1x1.png" },
  { slug: "painfulEvent", fallbackLabel: "Événement douloureux", icon: "https://www.systeme-de-design.gouv.fr/v1.14/storybook/img/placeholder.1x1.png" },
  { slug: "emotionalDifficulties", fallbackLabel: "Gestion difficile des émotions", icon: "https://www.systeme-de-design.gouv.fr/v1.14/storybook/img/placeholder.1x1.png" },
];
