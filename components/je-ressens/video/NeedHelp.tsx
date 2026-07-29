import Link from "next/link";
import styles from "./NeedHelp.module.scss";
import {
  NEED_COUNSELING,
  NEED_PSY,
  WHAT_I_NEED_ID,
} from "@/components/orienteur/data/orienteurTree";
import MentalDisabilities from "@codegouvfr/react-dsfr/picto/MentalDisabilities";
import Community from "@codegouvfr/react-dsfr/picto/Community";
import SelfTraining from "@codegouvfr/react-dsfr/picto/SelfTraining";
import { Url } from "next/dist/shared/lib/router/router";
import { PictoProps } from "@codegouvfr/react-dsfr/picto/utils/PictoWrapper";
import { FC } from "react";

type CustomLinkProps = {
  href: Url;
  pictogram: FC<PictoProps>;
  title: string;
  desc: string;
};

const CustomLink = ({ href, pictogram: Pictogram, title, desc }: CustomLinkProps) => (
  <Link href={href} style={{ backgroundImage: "none" }}>
    <div className={styles.linkWrapper}>
      <Pictogram fontSize="3rem" aria-hidden="true" color="blue-ecume" />
      <div className={styles.linkText}>
        <div className={styles.linkTitle}>{title}</div>
        <div className={styles.linkDesc}>{desc}</div>
      </div>
    </div>
  </Link>
);

const Separator = () => <div aria-hidden="true" className={styles.separator} />;

export default function NeedHelp() {
  return (
    <div className={styles.container}>
      <h3>Besoin d’aide ?</h3>
      <p>Tu n’es pas seul. Des solutions existent.</p>
      <Separator />
      <CustomLink
        href={{ pathname: "/trouver-du-soutien", query: { [WHAT_I_NEED_ID]: NEED_PSY } }}
        pictogram={MentalDisabilities}
        title="Consulter un psychologue"
        desc="Près de chez toi ou en ligne"
      />
      <Separator />
      <CustomLink
        href={{ pathname: "/trouver-du-soutien", query: { [WHAT_I_NEED_ID]: NEED_COUNSELING } }}
        pictogram={Community}
        title="Me confier et être orienté"
        desc="Parle à quelqu’un maintenant"
      />
      <Separator />
      <CustomLink
        href="/orienteur"
        pictogram={SelfTraining}
        title="Guidez-moi"
        desc="Trouve le dispositif adapté"
      />
      <Separator />
      <div>
        <p className={styles.emergency}>
          <b>En cas d’urgence</b>
          <br />
          Si tu es en danger ou en grande détresse, appelle le <b>15</b> ou le <b>3114</b> ou le{" "}
          <b>112</b>
        </p>
      </div>
    </div>
  );
}
