"use client";
import styles from "./findHelpResults.module.scss";
import { getResults, Result } from "./data/findHelp";
import { Coordinate } from "@/services/address";
import { useEffect, useState } from "react";
type Props = {
  addressLabel: string;
  coordinates?: Coordinate;
  whatINeed: string;
  format: string;
};
export default function FindHelpResults({ addressLabel, coordinates, whatINeed, format }: Props) {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    let cancelled = false;

    getResults(addressLabel, whatINeed, format, coordinates).then((r) => {
      if (!cancelled) setResults(r);
    });

    return () => {
      cancelled = true;
    };
  }, [addressLabel, whatINeed, format, coordinates]);

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
