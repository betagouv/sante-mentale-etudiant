import { FORMAT_CAMPUS, FORMAT_CHOOSE, NEED_COUNSELING, NEED_PSY } from "@/components/orienteur/data/orienteurTree";

type OPTION = {
    label: string;
    value: string;
};

type MAIN_OPTION = OPTION & {
    formatOptions: OPTION[]
}

type MAIN_OPTIONS = {
    [key: string]: MAIN_OPTION
}

export const OPTIONS_I_NEED: MAIN_OPTIONS = {
    whatever: {
        label: "Peu importe",
        value: 'whatever',
        formatOptions: [
        ]
    },
    talk: {
        label: 'Me confier et être orienté',
        value: NEED_COUNSELING,
        formatOptions: [
            {
                label: "Tous",
                value: 'all'
            },
            {
                label: "A l'écrit",
                value: 'write'
            },
            {
                label: "A l'oral / en personne",
                value: 'talk'
            }
        ]
    },
    psy: {
        label: "Un suivi psy gratuit",
        value: NEED_PSY,
        formatOptions: [
            {
                label: "Tous",
                value: 'all'
            },
            {
                label: "Suivi sur un campus",
                value: FORMAT_CAMPUS
            },
            {
                label: "Choisir moi-même mon praticien",
                value: FORMAT_CHOOSE
            }
        ]
    }
}