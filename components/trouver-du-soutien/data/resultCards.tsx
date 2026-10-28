import CustomCard from "@/components/common/CustomCard";
import { Button } from "@codegouvfr/react-dsfr/Button";
import logo_3040 from "@/public/images/logos/3040.png";
import logo_3114 from "@/public/images/logos/3114.png";
import logo_spe from "@/public/images/logos/SPE.png";
import { BADGE_DAY, BADGE_H24, BADGE_PROFESSIONELS } from "@/components/common/Badges";
import { SSE } from "@/lib/sse";
import { Coordinate } from "@/services/address";
import { sseModal, bapuModal } from "@/components/modals";
import { BAPU } from "@/lib/bapu";
import { ModalBapu } from "@/components/modals/ModalBapu";

export const CARD_3040 = (
  <CustomCard
    title="Appelle le 3040"
    subtitle="Ligne d'écoute pour les étudiants en situation de mal-être"
    description="Des équipes professionnelles disponibles pour t'écouter avec bienveillance, t'informer et t'orienter selon tes besoins."
    image={logo_3040}
    button={
      <Button
        priority="secondary"
        linkProps={{
          href: "tel:3040",
          "aria-label":
            "Appeler le 3040, la ligne d'écoute pour les étudiants en situation de mal-être",
        }}
      >
        Appeler le 3040
      </Button>
    }
    badges={[BADGE_PROFESSIONELS, BADGE_DAY]}
    location="A distance"
    openingHours="Lun-ven: 10h-21h • Sam: 10h-14h"
  />
);

export const CARD_3114 = (
  <CustomCard
    title="Appelle le 3114"
    subtitle="Le numéro national de prévention du suicide"
    description="Pensées suicidaires, détresse ou inquiétude pour un proche : des professionnels t'écoutent et t'orientent. En cas d’urgence vitale : appelle le 15 ou contacte le 114 (sourds et malentendants)."
    image={logo_3114}
    button={
      <Button
        priority="secondary"
        linkProps={{
          href: "tel:3114",
          "aria-label": "Appeler le 3114, le numéro national de prévention du suicide",
        }}
      >
        Appeler le 3114
      </Button>
    }
    badges={[BADGE_PROFESSIONELS, BADGE_H24]}
    location="A distance"
    openingHours="7j/7 • 24h/24"
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
      subtitle="Consultations gratuites avec le psy que tu choisis"
      description="12 séances gratuites avec un psychologue que tu choisis parmi plus de 1500 partout en France, en présentiel ou à distance"
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
    subtitle="Un bon premier interlocuteur si tu ne te sens pas bien"
    description="C'est souvent un bon premier réflexe : il peut t'écouter, t'orienter, et si besoin te mettre en lien avec un spécialiste de la santé mentale."
    badges={[BADGE_PROFESSIONELS, BADGE_DAY]}
  />
);

export const get_CARD_SSE = (
  sse: SSE,
  addressLabel: string,
  setSelectedSse: (sse: SSE) => void
) => (
  <>
    <CustomCard
      title={`Contacte le SSE ${sse.displayName}`}
      subtitle={`Service de santé étudiante de ${sse.displayUniversityName}`}
      description="Consultations avec des psychologue et psychiatres, sans limite de séances, en présentiel dans ton académie."
      button={
        <Button
          priority="secondary"
          nativeButtonProps={sseModal.buttonProps}
          onClick={() => setSelectedSse(sse)}
        >
          Infos et contacts
        </Button>
      }
      badges={[BADGE_PROFESSIONELS, BADGE_DAY]}
      location={`Près de ${addressLabel}`}
    />
  </>
);

export const CARD_DEFAULT_SSE = (
  <CustomCard
    title="Rends-toi au SSE le plus proche"
    subtitle="Service de santé étudiante de l'université la plus proche"
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
