export type OrienteurOption = {
    label: string;
    value: string;
    next: string;
    illustration: string;
    hint?: string;
};

export type OrienteurQuestionNode = {
    type: "question";
    id: string;
    image: string;
    legend: string;
    title: string;
    showMedicalDisclaimer?: boolean;
    skip?: {
        label: string,
        value: string,
        next: string
    }
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
export const WHAT_I_NEED_ID = 'what-i-need'
export const FORMAT_ECHANGE_ID = 'format-echange'
export const FORMAT_PSY_ID = 'format-psy'

export const NEED_COUNSELING = 'counseling'
export const NEED_PSY = 'psy'
export const FORMAT_TALK = 'talk'
export const FORMAT_WRITE = 'write'
export const FORMAT_CAMPUS = 'campus'
export const FORMAT_CHOOSE = 'choose-myself'

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
            { label: "Oui, j'ai besoin d'aide immédiatement", hint: "Pour moi ou pour aider une personne de mon entourage", value: "yes", next: "urgence", illustration: "system/warning" },
            { label: "Non, mais je ne me sens pas bien en ce moment.", hint: "Je cherche du soutien, sans urgence vitale.", value: "no", next: "pour-qui", illustration: "system/success" },
        ],
    },

    "pour-qui": {
        type: "question",
        id: "pour-qui",
        image: IMAGE_DEFAULT,
        legend: "Personne concernée",
        title: "Pour qui recherches-tu de l'aide ?",
        options: [
            { label: "Pour moi", value: "moi", next: WHAT_I_NEED_ID, illustration: "digital/avatar" },
            {
                label: "Pour un proche",
                value: "proche", next: "aide-proche",
                illustration: "digital/ecosystem",
                hint: "Par exemple, un ami ou un membre de ma famille"
            },
        ],
    },

    [WHAT_I_NEED_ID]: {
        type: "question",
        id: WHAT_I_NEED_ID,
        image: IMAGE_DEFAULT,
        legend: "Mon besoin",
        title: "Qu'est-ce qui t'aiderait le mieux en ce moment ?",
        skip: {
            label: "Je ne sais pas trop",
            value: "doesnt-know",
            next: "location"
        },
        options: [
            {
                label: "Me confier maintenant et être orienté",
                hint: "Une personne à l'écoute, qui peut t'aider à trouver l'aide la plus adaptée",
                illustration: "leisure/community",
                value: NEED_COUNSELING,
                next: FORMAT_ECHANGE_ID,
            },
            {
                label: "Un suivi psy gratuit, près de chez moi",
                hint: "Des rendez-vous réguliers avec un professionnel",
                illustration: "digital/calendar",
                value: NEED_PSY,
                next: FORMAT_PSY_ID,
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
                illustration: "digital/self-training",
                value: "ressources",
                next: "/aider-un-proche",
            },
            {
                label: "J'ai besoin de me confier maintenant",
                illustration: "leisure/community",
                value: "confier",
                next: "location",
            },
        ],
    },

    [FORMAT_ECHANGE_ID]: {
        type: "question",
        id: FORMAT_ECHANGE_ID,
        image: IMAGE_DEFAULT,
        legend: "Soutien",
        title: "Pour parler tout de suite, tu es plus à l'aise...",
        options: [
            {
                label: "À l'écrit",
                hint: "Par Tchat (uniquement le soir et la nuit)",
                illustration: "digital/self-training",
                value: FORMAT_WRITE,
                next: "location",
            },
            {
                label: "À l'oral",
                hint: "Par téléphone ou en personne",
                illustration: "digital/smartphone",
                value: FORMAT_TALK,
                next: "location",
            },
        ],
    },

    [FORMAT_PSY_ID]: {
        type: "question",
        id: FORMAT_PSY_ID,
        image: IMAGE_DEFAULT,
        legend: "Soutien",
        title: "Pour ce suivi psy, tu préfères...",
        options: [
            {
                label: "Être suivi sur mon campus (ou tout près)",
                hint: "Par une équipe habituée aux étudiants",
                illustration: "buildings/city-hall",
                value: FORMAT_CAMPUS,
                next: "location",
            },
            {
                label: "Choisir moi-même mon psy",
                hint: "La spécialité et le lieu qui me conviennent",
                illustration: "digital/search",
                value: FORMAT_CHOOSE,
                next: "location",
            },
        ],
    },

    urgence: { type: "terminal", id: "urgence", image: IMAGE_DEFAULT, component: "urgence" },
    location: { type: "terminal", id: "location", image: IMAGE_DEFAULT, component: "location" },
    // TODO modifier le a venir dès que plus d'infos
    "a-venir": { type: "terminal", id: "a-venir", image: IMAGE_DEFAULT, component: "placeholder" },
};
