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

export const OPTIONS_I_WANT: MAIN_OPTIONS = {
    whatever: {
        label: "Peu importe",
        value: 'whatever',
        formatOptions: [
        ]
    },
    talk: {
        label: 'Me confier et être orienté',
        value: "talk",
        formatOptions: [
            {
                label: "Tous",
                value: 'all'
            },
            {
                label: "A l'écrit",
                value: 'writing'
            },
            {
                label: "A l'oral / en personne",
                value: 'talking'
            }
        ]
    },
    psy: {
        label: "Un suivi psy gratuit",
        value: 'psy',
        formatOptions: [
            {
                label: "Tous",
                value: 'all'
            },
            {
                label: "Suivi sur un campus",
                value: 'campus'
            },
            {
                label: "Choisir moi-même mon praticien",
                value: 'choose'
            }
        ]
    }
}