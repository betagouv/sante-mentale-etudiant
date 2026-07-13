import styles from "./Orienteur.module.scss";
import OrienteurLocation from "./OrienteurLocation";
import OrienteurQuestion from "./OrienteurQuestion";
import OrienteurUrgent from "./OrienteurUrgent";
import { OrienteurNode } from "./data/orienteurTree";
import { ReactNode } from "react";

type Props = {
  node: OrienteurNode;
  backButton?: ReactNode;
  onAnswer: (id: string, option: { next: string; value: string }) => void;
  answers: Record<string, string>;
};

export default function OrienteurWrapper({ node, backButton, onAnswer, answers }: Props) {
  const renderContent = () => {
    if (node.type === "question" && onAnswer) {
      return (
        <OrienteurQuestion
          key={node.id}
          node={node}
          onAnswer={onAnswer}
          defaultAnswer={answers[node.id]}
        />
      );
    }
    if (node.type !== "terminal") {
      return <p>Une erreur est survenue, reviens à l'accueil de l'orienteur.</p>;
    }
    if (node.component === "location") {
      return <OrienteurLocation onAnswer={onAnswer} />;
    }
    if (node.component === "urgence") {
      return <OrienteurUrgent />;
    }
    if (node.component === "placeholder") {
      return <p>Cette étape est en cours de construction</p>;
    }
  };
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <img src={node.image} alt="" className={styles.image} />
      </div>
      <div className={styles.content}>
        {backButton}
        {renderContent()}
      </div>
    </section>
  );
}
