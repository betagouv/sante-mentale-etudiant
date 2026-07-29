"use client";
import { useState } from "react";
import { Follow } from "@codegouvfr/react-dsfr/Follow";
import { isValidEmail } from "@/utils/email";

type Status = "idle" | "loading" | "success" | "error";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function subscribe() {
    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Follow
      newsletter={{
        title: "Du soutien directement dans ta boîte mail",
        desc: "On partage régulièrement des conseils, des ressources et des témoignages pour prendre soin de ta santé mentale. Inscris-toi pour les recevoir directement dans ta boîte mail.",
        buttonProps: {
          disabled: status === "loading",
          type: "submit",
        },
        form: {
          success: status === "success",
          successMessage: "Ton inscription a bien été prise en compte.",
          consentHint:
            "En renseignant ton adresse e-mail, tu acceptes de recevoir nos actualités par courrier électronique. Tu peux te désinscrire à tout moment via le lien de désinscription présent dans chaque e-mail ou en nous contactant.",
          formComponent: ({ children }) => (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                subscribe();
              }}
            >
              {children}
            </form>
          ),
          inputProps: {
            nativeInputProps: {
              type: "email",
              name: "email",
              placeholder: "Ton adresse e-mail (ex. : nom@domaine.fr)",
              required: true,
              value: email,
              onChange: (e) => setEmail(e.target.value),
              disabled: status === "loading",
            },
            ...(status === "error" && {
              state: "error",
              stateRelatedMessage: "Une erreur est survenue, réessaie dans quelques instants.",
            }),
          },
        },
      }}
      social={{
        title: "Suis-nous sur les réseaux sociaux",
        buttons: [
          {
            linkProps: {
              href: "https://www.facebook.com/profile.php?id=100075880725429",
            },
            type: "facebook",
          },
          {
            linkProps: {
              href: "https://www.instagram.com/sante_psyetudiant/",
            },
            type: "instagram",
          },
          {
            linkProps: {
              href: "https://www.linkedin.com/company/sant%C3%A9-psy-%C3%A9tudiant/",
            },
            type: "linkedin",
          },
          {
            linkProps: {
              href: "https://www.tiktok.com/@sante.psy.etudiant",
            },
            type: "tiktok",
          },
          {
            linkProps: {
              href: "https://www.youtube.com/@KaavanPodcast",
            },
            type: "youtube",
          },
        ],
      }}
    />
  );
}
