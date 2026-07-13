"use client";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Button from "@codegouvfr/react-dsfr/Button";
import OrienteurWrapper from "./OrienteurWrapper";
import { orienteurTree, ORIENTEUR_ROOT_ID, OrienteurOption } from "./data/orienteurTree";

export default function Orienteur() {
  const router = useRouter();
  const [history, setHistory] = useState<string[]>([ORIENTEUR_ROOT_ID]);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentId = useMemo(() => history.at(-1) ?? ORIENTEUR_ROOT_ID, [history]);

  const node = orienteurTree[currentId];

  function goTo(questionId: string, option: OrienteurOption) {
    const { next, value } = option;
    if (next.startsWith("/")) {
      router.push(next);
      return;
    }
    setHistory((h) => [...h, next]);
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: value,
    }));
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
