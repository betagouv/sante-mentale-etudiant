export type OrienteurAnswers = Partial<{
    mode: "immediat" | "psy";
    canal: "ecrit" | "oral";
    lieu: "campus" | "libre";
}>;

export type OrienteurOption = {
    label: string;
    value: string;
    next: string;
    illustration: string;
    hint?: string;
    answer?: Partial<OrienteurAnswers>;
};

export type OrienteurQuestionNode = {
    type: "question";
    id: string;
    image: string;
    legend: string;
    title: string;
    showMedicalDisclaimer?: boolean;
    options: OrienteurOption[];
};

export type OrienteurTerminalNode = {
    type: "terminal";
    id: string;
    image: string;
    // TODO modifier placeholder dès que plus d'infos
    component: "urgence" | "location" | "placeholder";
};

export type OrienteurNode = OrienteurQuestionNode | OrienteurTerminalNode;

export const ORIENTEUR_ROOT_ID = "risque-immediat";

const IMAGE_DEFAULT = "/images/illustrations/student-mood.svg";

export const orienteurTree: Record<string, OrienteurNode> = {
    [ORIENTEUR_ROOT_ID]: {
        type: "question",
        id: ORIENTEUR_ROOT_ID,
        image: IMAGE_DEFAULT,
        legend: "Ma situation",
        title: "As-tu des pensées suicidaires, ou crains-tu pour la sécurité d'un proche ?",
        showMedicalDisclaimer: true,
        options: [
            { label: "Oui, j'ai besoin d'aide immédiatement", hint: "Pour moi ou pour aider une personne de mon entourage", value: "yes", next: "urgence", illustration: "warning" },
            { label: "Non, mais je ne me sens pas bien en ce moment.", hint: "Je cherche du soutien, sans urgence vitale.", value: "no", next: "pour-qui", illustration: "warning" },
        ],
    },

    "pour-qui": {
        type: "question",
        id: "pour-qui",
        image: IMAGE_DEFAULT,
        legend: "Personne concernée",
        title: "Pour qui recherches-tu de l'aide ?",
        options: [
            { label: "Pour moi", value: "moi", next: "aide-moi", illustration: "warning" },
            {
                label: "Pour un proche",
                value: "proche", next: "aide-proche",
                illustration: "warning",
                hint: "Par exemple, un ami ou un membre de ma famille"
            },
        ],
    },

    "aide-moi": {
        type: "question",
        id: "aide-moi",
        image: IMAGE_DEFAULT,
        legend: "Mon besoin",
        title: "Qu'est-ce qui t'aiderait le mieux en ce moment ?",
        options: [
            {
                label: "Me confier maintenant et être orienté",
                hint: "Une personne à l'écoute, qui peut t'aider à trouver l'aide la plus adaptée",
                illustration: "warning",
                value: "maintenant",
                next: "canal-echange",
                answer: { mode: "immediat" },
            },
            {
                label: "Un suivi psy gratuit, près de chez moi",
                hint: "Des rendez-vous réguliers avec un professionnel",
                illustration: "warning",
                value: "psy",
                next: "suivi-psy",
                answer: { mode: "psy" },
            },
        ],
    },

    "aide-proche": {
        type: "question",
        id: "aide-proche",
        image: IMAGE_DEFAULT,
        legend: "Mon besoin",
        title: "Comment peut-on t'aider ?",
        options: [
            {
                label: "Je recherche des ressources ou des témoignages pour soutenir un proche",
                illustration: "warning",
                value: "ressources",
                next: "a-venir", // TODO: destination à définir
            },
            {
                label: "J'ai besoin de me confier maintenant",
                illustration: "warning",
                value: "confier",
                next: "a-venir", // TODO: destination à définir
            },
        ],
    },

    "canal-echange": {
        type: "question",
        id: "canal-echange",
        image: IMAGE_DEFAULT,
        legend: "Soutien",
        title: "Pour parler tout de suite, tu es plus à l'aise...",
        options: [
            {
                label: "À l'écrit",
                hint: "Par Tchat (uniquement le soir et la nuit)",
                illustration: "warning",
                value: "ecrit",
                next: "location",
                answer: { canal: "ecrit" }
            },
            {
                label: "À l'oral",
                hint: "Par téléphone ou en personne",
                illustration: "warning",
                value: "oral",
                next: "location",
                answer: { canal: "oral" }
            },
        ],
    },

    "suivi-psy": {
        type: "question",
        id: "suivi-psy",
        image: IMAGE_DEFAULT,
        legend: "Soutien",
        title: "Pour ce suivi psy, tu préfères...",
        options: [
            {
                label: "Être suivi sur mon campus (ou tout près)",
                hint: "Par une équipe habituée aux étudiants",
                illustration: "warning",
                value: "campus",
                next: "location",
                answer: { lieu: "campus" }
            },
            {
                label: "Choisir moi-même mon psy",
                hint: "La spécialité et le lieu qui me conviennent",
                illustration: "warning",
                value: "libre",
                next: "location",
                answer: { lieu: "libre" }
            },
        ],
    },

    urgence: { type: "terminal", id: "urgence", image: IMAGE_DEFAULT, component: "urgence" },
    location: { type: "terminal", id: "location", image: IMAGE_DEFAULT, component: "location" },
    // TODO modifier le a venir dès que plus d'infos
    "a-venir": { type: "terminal", id: "a-venir", image: IMAGE_DEFAULT, component: "placeholder" },
};
