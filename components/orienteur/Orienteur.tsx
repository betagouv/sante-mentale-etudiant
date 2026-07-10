"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@codegouvfr/react-dsfr/Button";
import OrienteurQuestion from "./OrienteurQuestion";
import OrienteurWrapper from "./OrienteurWrapper";
import { orienteurTree, ORIENTEUR_ROOT_ID, type OrienteurAnswers } from "./data/orienteurTree";
import OrienteurUrgent from "./OrienteurUrgent";
import OrienteurLocation from "./OrienteurLocation";

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
    <Button priority="tertiary" iconId="fr-icon-arrow-left-line" onClick={goBack}>
      Retour
    </Button>
  );

  if (node.type === "question") {
    return (
      <OrienteurQuestion
        question={node}
        backButton={backButton}
        onAnswer={(option) => goTo(option.next, option.answer)}
      />
    );
  }

  switch (node.component) {
    case "urgence":
      return (
        <OrienteurWrapper image={node.image}>
          <OrienteurUrgent backButton={backButton} />
        </OrienteurWrapper>
      );
    case "location":
      return (
        <OrienteurWrapper image={node.image}>
          <OrienteurLocation backButton={backButton} answers={current.answers} />
        </OrienteurWrapper>
      );
    // TODO modifier placeholder dès que plus d'infos
    case "placeholder":
      return (
        <OrienteurWrapper image={node.image}>
          {backButton}
          <p>Cette étape est en cours de construction</p>
        </OrienteurWrapper>
      );
    default:
      return (
        <OrienteurWrapper image={node.image}>
          <p>Une erreur est survenue, reviens à l'accueil de l'orienteur.</p>
        </OrienteurWrapper>
      );
  }
}
