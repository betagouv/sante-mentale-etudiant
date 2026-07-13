import styles from "./Orienteur.module.scss";
import OrienteurLocation from "./OrienteurLocation";
import OrienteurQuestion from "./OrienteurQuestion";
import OrienteurUrgent from "./OrienteurUrgent";
import { OrienteurNode, OrienteurOption } from "./data/orienteurTree";
import { ReactNode } from "react";

type Props = {
  node: OrienteurNode;
  backButton?: ReactNode;
  onAnswer?: (option: OrienteurOption) => void;
};

export default function OrienteurWrapper({ node, backButton, onAnswer }: Props) {
  const renderContent = () => {
    console.log("renderContent node", node);
    if (node.type === "question" && onAnswer) {
      return <OrienteurQuestion node={node} onAnswer={onAnswer} />;
    }
    if (node.type !== "terminal") {
      return <p>Une erreur est survenue, reviens à l'accueil de l'orienteur.</p>;
    }
    if (node.component === "location") {
      return <OrienteurLocation />;
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
