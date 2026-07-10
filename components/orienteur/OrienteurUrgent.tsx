import type { ReactNode } from "react";
import { Tile } from "@codegouvfr/react-dsfr/Tile";
import Badge from "@codegouvfr/react-dsfr/Badge";

type Props = {
    backButton?: ReactNode;
};

export default function OrienteurUrgent({ backButton }: Props) {
    return (
        <>
            {backButton}
            <h1>Parlons-en tout de suite.</h1>
            <p>
                Ce que tu ressens compte, et ça ne doit pas attendre.
                Le <strong>3114</strong> est le numéro national de prévention du suicide : un professionnel te répond, <strong>gratuitement</strong> et <strong>en toute confidentialité</strong>.
            </p>
            <p>
                Ce numéro est aussi là pour toi si tu t’inquiètes pour un proche en crise. Les personnes qui répondent peuvent t'aider à comprendre la situation et à savoir quoi faire.
                en cas de pensées suicidaires
            </p>

            <div>
                <Tile
                    imageSvg
                    imageUrl="/images/icons/warning.svg"
                    orientation="horizontal"
                    start={<Badge noIcon severity="success">En cas de pensées suicidaires</Badge>}
                    title="Appelle le 3114"
                    titleAs="h3"
                    desc="Temps d'attente possible. Reste en ligne, un professionnel te répond dès que possible."
                />
                <Tile
                    imageSvg
                    imageUrl="/images/icons/warning.svg"
                    orientation="horizontal"
                    start={<Badge noIcon severity="success">en cas d’urgence vitale</Badge>}
                    title="Appelle le 15 (Samu) ou écris au 114"
                    titleAs="h3"
                    desc="Tu seras mis rapidement en relation avec les secours. 
                    Si tu es sourd, malentendant ou ne peux pas parler au téléphone, contacte les secours via le 114 (SMS, tchat, visio)."
                />
            </div>
        </>
    );
}
