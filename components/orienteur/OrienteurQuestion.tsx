"use client";
import Button from "@codegouvfr/react-dsfr/Button";
import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";
import { useState, type ReactNode } from "react";
import OrienteurWrapper from "./OrienteurWrapper";
import styles from "./Orienteur.module.scss";
import type { OrienteurOption, OrienteurQuestionNode } from "./data/orienteurTree";

type Props = {
  question: OrienteurQuestionNode;
  backButton?: ReactNode;
  onAnswer: (option: OrienteurOption) => void;
};

export default function OrienteurQuestion({ question, backButton, onAnswer }: Props) {
  const [value, setValue] = useState<string>();
  const selected = question.options.find((option) => option.value === value);

  return (
    <OrienteurWrapper image={question.image}>
      {backButton}

      <p className={styles.hint}>
        Les champs marqués du symbole <span className={styles.error}>*</span> sont obligatoires.
      </p>
      {question.showMedicalDisclaimer && (
        <p className={styles.hint}>
          Ce questionnaire t'oriente et ne pose en aucun cas un diagnostic médical.
        </p>
      )}

      <h1 className={styles.title}>{question.title}</h1>

      <p>
        {question.legend} <span className={styles.error}>*</span>
      </p>

      <RadioButtons
        name={question.id}
        state="default"
        options={question.options.map((option) => ({
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
    </OrienteurWrapper>
  );
}
