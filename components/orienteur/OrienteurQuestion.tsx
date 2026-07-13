"use client";
import Button from "@codegouvfr/react-dsfr/Button";
import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";
import { useState } from "react";
import styles from "./Orienteur.module.scss";
import type { OrienteurOption, OrienteurQuestionNode } from "./data/orienteurTree";

type Props = {
  node: OrienteurQuestionNode;
  onAnswer: (option: OrienteurOption) => void;
};

export default function OrienteurQuestion({ node, onAnswer }: Props) {
  const [value, setValue] = useState<string>();
  const selected = node.options.find((option) => option.value === value);

  return (
    <>
      <p className={styles.hint}>
        Les champs marqués du symbole <span className={styles.error}>*</span> sont obligatoires.
      </p>
      {node.showMedicalDisclaimer && (
        <p className={styles.hint}>
          Ce questionnaire t'oriente et ne pose en aucun cas un diagnostic médical.
        </p>
      )}

      <h1>{node.title}</h1>

      <p>
        {node.legend} <span className={styles.error}>*</span>
      </p>

      <RadioButtons
        name={node.id}
        state="default"
        options={node.options.map((option) => ({
          label: option.label,
          illustration: option.illustration ? (
            <img src={`/images/icons/${option.illustration}.svg`} alt="" />
          ) : undefined,
          hintText: option.hint,
          nativeInputProps: {
            value: option.value,
            checked: value === option.value,
            onChange: () => setValue(option.value),
          },
        }))}
      />

      <Button
        iconId="fr-icon-arrow-right-line"
        iconPosition="right"
        disabled={!selected}
        onClick={() => selected && onAnswer(selected)}
      >
        Continuer
      </Button>
    </>
  );
}
