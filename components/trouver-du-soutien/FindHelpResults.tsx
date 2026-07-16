import styles from "./findHelpResults.module.scss";
import { getResults } from "./data/findHelp";
type Props = {
  postcode: string;
  whatINeed: string;
  format: string;
};
export default function FindHelpResults({ postcode, whatINeed, format }: Props) {
  const results = getResults(postcode, whatINeed, format);

  return results
    .filter((result) => result.cards.length > 0)
    .map((result, index) => (
      <div key={`result__${index.toString()}`}>
        <h2 className={styles.title}>
          <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span> {result.title}
        </h2>
        <div className={styles.results}>{result.cards.map((card) => card)}</div>
      </div>
    ));
}
