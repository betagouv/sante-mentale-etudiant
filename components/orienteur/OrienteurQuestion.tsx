"use client";
import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";
import { useState } from "react";
import styles from "./Orienteur.module.scss";
import type { OrienteurQuestionNode } from "./data/orienteurTree";
import { ButtonsGroup } from "@codegouvfr/react-dsfr/ButtonsGroup";
import { ButtonProps } from "@codegouvfr/react-dsfr/Button";
import RequiredField from "../common/RequiredField";

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
        Les champs marqués du symbole
        <RequiredField /> sont obligatoires.
      </p>
      {node.showMedicalDisclaimer && (
        <p className={styles.hint}>
          Ce questionnaire t'oriente et ne pose en aucun cas un diagnostic médical.
        </p>
      )}

      <h1>{node.title}</h1>

      <p>
        {node.legend}
        <RequiredField />
      </p>

      <RadioButtons
        name={node.id}
        state="default"
        options={node.options.map((option) => ({
          label: option.label,
          illustration: option.illustration ? (
            <img src={`/images/pictograms/${option.illustration}.svg`} alt="" />
          ) : undefined,
          hintText: option.hint,
          nativeInputProps: {
            value: option.value,
            checked: value === option.value,
            onChange: () => setValue(option.value),
          },
        }))}
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
