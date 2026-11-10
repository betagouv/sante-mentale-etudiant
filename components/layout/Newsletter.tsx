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
        title: "Des infos et des ressources directement dans ta boîte mail",
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
              href: "https://www.instagram.com/santementale_etudiant/",
            },
            type: "instagram",
          },
          {
            linkProps: {
              href: "https://www.linkedin.com/company/sante-mentale-etudiant/",
            },
            type: "linkedin",
          },
          {
            linkProps: {
              href: "https://www.tiktok.com/@sante.mentale.etudiant",
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
