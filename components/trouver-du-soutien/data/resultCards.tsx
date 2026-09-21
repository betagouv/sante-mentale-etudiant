import CustomCard from "@/components/common/CustomCard";
import { Button } from "@codegouvfr/react-dsfr/Button";
import logo_3040 from "@/public/images/logos/3040.png";
import logo_spe from "@/public/images/logos/SPE.png";
import { BADGE_DAY, BADGE_PROFESSIONELS } from "@/components/common/Badges";
import { SSE } from "@/lib/sse";
import { Coordinate } from "@/services/address";
import { sseModal, bapuModal } from "@/components/modals";
import { BAPU } from "@/lib/bapu";
import { ModalBapu } from "@/components/modals/ModalBapu";
import { ModalSse } from "@/components/modals/ModalSse";

export const CARD_3040 = (
  <CustomCard
    title="Appelle le 3040"
    subtitle="Le numéro pour la santé mentale des étudiants"
    description="Des psychologues et travailleurs sociaux à ton écoute pour t'informer et t'orienter vers les services adaptés."
    image={logo_3040}
    button={<Button priority="secondary">Appeler le 3040</Button>}
    badges={[BADGE_PROFESSIONELS, BADGE_DAY]}
    location="A distance"
    openingHours="7j/7 • 9h-23h"
  />
);

export const get_CARD_SPE = (addressLabel: string, coordinates?: Coordinate) => {
  const params = new URLSearchParams();

  if (addressLabel) {
    params.set("address", addressLabel);
  }
  if (coordinates) {
    params.set("lat", coordinates.latitude.toString());
    params.set("lon", coordinates.longitude.toString());
  }
  params.set("page", "1");

  const queryString = params.toString();
  const url = queryString
    ? `${process.env.NEXT_PUBLIC_SPE_URL}trouver-un-psychologue?${queryString}`
    : `${process.env.NEXT_PUBLIC_SPE_URL}trouver-un-psychologue`;

  return (
    <CustomCard
      title="Consulte un psychologue libéral"
      subtitle="Consultations gratuites avec le psy de ton choix"
      description="12 séances gratuites avec un psychologue de ton choix parmi plus de 1500 partout en France, en présentiel ou à distance"
      image={logo_spe}
      button={
        <Button
          priority="secondary"
          linkProps={{
            href: url,
            target: "_blank",
          }}
        >
          Trouver un psychologue
        </Button>
      }
      badges={[BADGE_PROFESSIONELS, BADGE_DAY]}
      location={`Près de ${addressLabel || "chez toi"}`}
    />
  );
};

export const CARD_DOCTOR = (
  <CustomCard
    title="Parles-en à ton médecin généraliste"
    subtitle="Il peut t'écouter et t'orienter"
    description="Aucun dispositif ne te convient ? Tu as du mal à trouver des disponibilités ? Ne reste pas seul."
    badges={[BADGE_PROFESSIONELS, BADGE_DAY]}
  />
);

export const get_CARD_SSE = (sse: SSE, addressLabel: string) => (
  <>
    <CustomCard
      title={`Contacte le SSE ${sse.displayName}`}
      subtitle={`Service de santé de ${sse.displayUniversityName}`}
      description="Consultations avec des psychologue et psychiatres, sans limite de séances, en présentiel dans ton académie."
      button={
        <Button priority="secondary" nativeButtonProps={sseModal.buttonProps}>
          Infos et contacts
        </Button>
      }
      badges={[BADGE_PROFESSIONELS, BADGE_DAY]}
      location={`Près de ${addressLabel}`}
    />
    <ModalSse sse={sse} />
  </>
);

export const CARD_DEFAULT_SSE = (
  <CustomCard
    title="Rends-toi au SSE le plus proche"
    subtitle="Service de santé de l'université la plus proche"
    description="Viens te confier à un professionnel de santé qui t'écoute et t'oriente vers la prise en charge adaptée à ta situation."
    badges={[BADGE_PROFESSIONELS, BADGE_DAY]}
  />
);

export const get_CARD_BAPU = (bapu: BAPU, addressLabel: string) => (
  <>
    <CustomCard
      title={`Contacte le ${bapu.name}`}
      subtitle={`Bureau d'aide psychologique universitaire de ${bapu.city}`}
      description="Consultations gratuites avec des psychologues et psychiatres, sans limite de séances, prises en charge à 100% par la Sécu."
      button={
        <Button priority="secondary" nativeButtonProps={bapuModal.buttonProps}>
          Infos et contacts
        </Button>
      }
      badges={[BADGE_PROFESSIONELS, BADGE_DAY]}
      location={`Près de ${addressLabel}`}
    />
    <ModalBapu bapu={bapu} />
  </>
);

export const CARD_DEFAULT_BAPU = (
  <CustomCard
    title="Rends-toi au BAPU le plus proche"
    subtitle="Bureau d'aide psychologique universitaire"
    description="Consultations gratuites avec des psychologues et psychiatres, sans limite de séances, prises en charge à 100% par la Sécu."
    badges={[BADGE_PROFESSIONELS, BADGE_DAY]}
  />
);
