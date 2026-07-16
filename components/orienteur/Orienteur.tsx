"use client";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Button from "@codegouvfr/react-dsfr/Button";
import OrienteurWrapper from "./OrienteurWrapper";
import {
  orienteurTree,
  ORIENTEUR_ROOT_ID,
  WHAT_I_NEED_ID,
  FORMAT_PSY_ID,
  FORMAT_ECHANGE_ID,
} from "./data/orienteurTree";

export default function Orienteur() {
  const router = useRouter();
  const [history, setHistory] = useState<string[]>([ORIENTEUR_ROOT_ID]);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentId = useMemo(() => history.at(-1) ?? ORIENTEUR_ROOT_ID, [history]);

  const node = orienteurTree[currentId];

  function goTo(
    option: { next: string; patchAnswers: Record<string, string> },
    lastQuestion = false
  ) {
    const { next, patchAnswers } = option;

    if (next.startsWith("/")) {
      router.push(next);
      return;
    }
    const newAnswers = {
      ...answers,
      ...patchAnswers,
    };
    if (lastQuestion) {
      const paramMap: Record<string, string> = {
        location: "location",
        [WHAT_I_NEED_ID]: "what-i-need",
        [FORMAT_PSY_ID]: "format",
        [FORMAT_ECHANGE_ID]: "format",
        longitude: "lon",
        latitude: "lat",
        addressLabel: "addressLabel",
      };

      const params: Record<string, string> = {};

      for (const [answerKey, paramKey] of Object.entries(paramMap)) {
        if (answerKey in newAnswers) {
          params[paramKey] = newAnswers[answerKey];
        }
      }

      const searchParams = new URLSearchParams(params);
      router.push(`/trouver-du-soutien?${searchParams.toString()}`);

      return;
    }
    setHistory((h) => [...h, next]);
    setAnswers(newAnswers);
  }

  function goBack() {
    if (history.length > 1) {
      setHistory((h) => [...h.slice(0, -1)]);
    }
    setAnswers((currentAnswers) => {
      const { [currentId]: _, ...rest } = currentAnswers;
      return rest;
    });
  }

  const backButton = history.length > 1 && (
    <Button
      priority="tertiary no outline"
      iconId="fr-icon-arrow-left-line"
      onClick={() => goBack()}
    >
      Retour
    </Button>
  );

  return <OrienteurWrapper node={node} backButton={backButton} onAnswer={goTo} answers={answers} />;
}
