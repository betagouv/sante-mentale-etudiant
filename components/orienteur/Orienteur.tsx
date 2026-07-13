"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@codegouvfr/react-dsfr/Button";
import OrienteurWrapper from "./OrienteurWrapper";
import { orienteurTree, ORIENTEUR_ROOT_ID, type OrienteurAnswers } from "./data/orienteurTree";

type Snapshot = { id: string; answers: OrienteurAnswers };

export default function Orienteur() {
  const router = useRouter();
  const [current, setCurrent] = useState<Snapshot>({ id: ORIENTEUR_ROOT_ID, answers: {} });
  const [history, setHistory] = useState<Snapshot[]>([]);

  const node = orienteurTree[current.id];

  function goTo(next: string, answerPatch?: Partial<OrienteurAnswers>) {
    if (next.startsWith("/")) {
      router.push(next);
      return;
    }
    setHistory((h) => [...h, current]);
    setCurrent({ id: next, answers: { ...current.answers, ...answerPatch } });
  }

  function goBack() {
    setHistory((h) => {
      if (h.length === 0) return h;
      setCurrent(h[h.length - 1]);
      return h.slice(0, -1);
    });
  }

  const backButton = history.length > 0 && (
    <Button priority="tertiary no outline" iconId="fr-icon-arrow-left-line" onClick={goBack}>
      Retour
    </Button>
  );

  return (
    <OrienteurWrapper
      node={node}
      backButton={backButton}
      onAnswer={(option) => goTo(option.next, option.answer)}
    />
  );
}
