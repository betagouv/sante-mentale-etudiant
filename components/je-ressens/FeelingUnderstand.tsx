import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./FeelingUnderstand.module.scss";
import { Feeling as FeelingType } from "@/lib/feelings/types";
import { Accordion } from "@codegouvfr/react-dsfr/Accordion";
import { fr } from "@codegouvfr/react-dsfr";

type Props = {
  feeling: FeelingType;
};
export default function FeelingUnderstand({ feeling }: Props) {
  return (
    <FullBleedSection className={styles.section} containerClassName={styles.container}>
      <div className={styles.card}>
        <h2>{feeling.faq.title}</h2>
        <p>{feeling.faq.intro}</p>
        <div className={fr.cx("fr-accordions-group")}>
          {feeling.faq.items.map((item, index) => (
            <Accordion key={`faq__${index}`} label={item.question}>
              {item.answer ?? <></>}
            </Accordion>
          ))}
        </div>
      </div>
    </FullBleedSection>
  );
}
