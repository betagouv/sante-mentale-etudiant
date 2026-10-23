import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./Articles.module.scss";
import ArticlesSearch from "./ArticlesSearch";
import { feelings, FeelingSlug } from "@/lib/feelings/data";
import { Disclaimer } from "../typography/Disclaimer";
import Link from "next/link";
import { getAllArticlesShuffledFeaturedFirst } from "@/lib/articles";

type Props = {
  defaultFeelingSlug?: FeelingSlug;
};
export default function Articles({ defaultFeelingSlug }: Props) {
  const articles = getAllArticlesShuffledFeaturedFirst();
  return (
    <FullBleedSection bgColor="grey">
      <div className={styles.pageContainer}>
        <h1 className={styles.title}>S’informer pour prendre soin de sa santé mentale</h1>
        <p className={styles.desc}>
          Des informations et des témoignages pour t’accompagner&nbsp;:
          <br />
          sites, articles, vidéos
        </p>
        <ArticlesSearch
          allArticles={articles}
          feelings={feelings}
          defaultFeelingSlug={defaultFeelingSlug}
        />
        <Disclaimer>
          Ces ressources t'aident à t'informer et à mettre des mots sur ce que tu vis. Elles ne
          couvrent pas tout et ne remplacent pas l'avis d'un professionnel. Une ressource à nous
          suggérer ? Écris-nous à{" "}
          <Link href="mailto:santementale.etudiant@enseignementsup.gouv.fr">
            santementale.etudiant@enseignementsup.gouv.fr
          </Link>
        </Disclaimer>
      </div>
    </FullBleedSection>
  );
}
