"use client";
import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";
import { useState } from "react";
import styles from "./Orienteur.module.scss";
import type { OrienteurQuestionNode } from "./data/orienteurTree";
import { ButtonsGroup } from "@codegouvfr/react-dsfr/ButtonsGroup";
import { ButtonProps } from "@codegouvfr/react-dsfr/Button";

import Warning from "@codegouvfr/react-dsfr/picto/Warning";
import EarOff from "@codegouvfr/react-dsfr/picto/EarOff";
import CityHall from "@codegouvfr/react-dsfr/picto/CityHall";
import Avatar from "@codegouvfr/react-dsfr/picto/Avatar";
import Calendar from "@codegouvfr/react-dsfr/picto/Calendar";
import Ecosystem from "@codegouvfr/react-dsfr/picto/Ecosystem";
import Search from "@codegouvfr/react-dsfr/picto/Search";
import SelfTraining from "@codegouvfr/react-dsfr/picto/SelfTraining";
import Smartphone from "@codegouvfr/react-dsfr/picto/Smartphone";
import HumanCooperation from "@codegouvfr/react-dsfr/picto/HumanCooperation";
import Community from "@codegouvfr/react-dsfr/picto/Community";
import Information from "@codegouvfr/react-dsfr/picto/Information";

export const orienteurPictoMap = {
  Warning,
  EarOff,
  CityHall,
  Avatar,
  Calendar,
  Ecosystem,
  Search,
  SelfTraining,
  Smartphone,
  HumanCooperation,
  Community,
  Information,
};

export type OrienteurPictoName = keyof typeof orienteurPictoMap;

type Props = {
  node: OrienteurQuestionNode;
  onAnswer: (option: { next: string; patchAnswers: Record<string, string> }) => void;
  defaultAnswer: string;
};

export default function OrienteurQuestion({ node, onAnswer, defaultAnswer }: Props) {
  const [value, setValue] = useState<string>(defaultAnswer);
  const selected = node.options.find((option) => option.value === value);

  const skip = node.skip;

  const buttonsList: ButtonProps[] = [
    ...(skip
      ? [
          {
            children: skip.label,
            priority: "secondary" as const,
            onClick: () => onAnswer({ next: skip.next, patchAnswers: { [node.id]: skip.value } }),
          },
        ]
      : []),
    {
      children: "Continuer",
      iconId: "fr-icon-arrow-right-line",
      disabled: !selected,
      onClick: () =>
        selected && onAnswer({ next: selected.next, patchAnswers: { [node.id]: selected.value } }),
    },
  ];

  return (
    <>
      <p className={styles.hint}>
        Sauf mention contraire “optionnel”, tous les champs sont obligatoires.
      </p>
      {node.showMedicalDisclaimer && (
        <p className={styles.hint}>
          Ce questionnaire t'oriente et ne pose en aucun cas un diagnostic médical.
        </p>
      )}

      <h1>{node.title}</h1>

      <p>{node.legend}</p>

      <RadioButtons
        name={node.id}
        state="default"
        options={node.options.map((option) => {
          const Picto = orienteurPictoMap[option.illustration];
          return {
            label: option.label,
            illustration: <Picto fontSize="large" />,
            hintText: option.hint,
            nativeInputProps: {
              value: option.value,
              checked: value === option.value,
              onChange: () => setValue(option.value),
            },
          };
        })}
      />
      <ButtonsGroup
        buttonsIconPosition="right"
        buttonsSize="large"
        inlineLayoutWhen="md and up"
        alignment="right"
        buttons={buttonsList as [ButtonProps, ...ButtonProps[]]}
      />
    </>
  );
}
