import { Button } from "@codegouvfr/react-dsfr/Button";
import styles from "./WhatIfCard.module.scss";
import { WhatIf } from "@/lib/feelings/types";

type Props = {
  whatIf: WhatIf;
};
export default function WhatIfCard({ whatIf }: Props) {
  return (
    <>
      <div className={styles.card}>
        <h4>{whatIf.title ?? "Et si ça ne passe pas ?"}</h4>
        {whatIf.content}
        <Button priority="primary">Voir les dispositifs d’aide</Button>
      </div>
    </>
  );
}
