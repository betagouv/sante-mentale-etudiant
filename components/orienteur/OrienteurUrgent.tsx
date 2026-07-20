import { Tile } from "@codegouvfr/react-dsfr/Tile";
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { Title } from "../typography/Title";
import { TILE_3114 } from "../common/Tiles";

export default function OrienteurUrgent() {
  return (
    <>
      <Title>Parlons-en tout de suite.</Title>
      <p>
        Ce que tu ressens compte, et ça ne doit pas attendre. Le <strong>3114</strong> est le numéro
        national de prévention du suicide : un professionnel te répond,{" "}
        <strong>gratuitement</strong> et <strong>en toute confidentialité</strong>.
      </p>
      <p>
        Ce numéro est aussi là pour toi si tu t'inquiètes pour un proche en crise. Les personnes qui
        répondent peuvent t'aider à comprendre la situation et à savoir quoi faire. en cas de
        pensées suicidaires
      </p>

      <div className="flex-container">
        {TILE_3114}
        <Tile
          imageSvg
          imageUrl="/images/pictograms/health/hospital.svg"
          orientation="horizontal"
          start={
            <Badge noIcon severity="error">
              en cas d'urgence vitale
            </Badge>
          }
          title="Appelle le 15 (Samu) ou écris au 114"
          titleAs="h3"
          desc="Tu seras mis rapidement en relation avec les secours. 
                    Si tu es sourd, malentendant ou ne peux pas parler au téléphone, contacte les secours via le 114 (SMS, tchat, visio)."
        />
      </div>
    </>
  );
}
