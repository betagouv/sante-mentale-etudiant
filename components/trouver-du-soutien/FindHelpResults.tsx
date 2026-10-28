"use client";
import styles from "./findHelpResults.module.scss";
import { getResults, Result } from "./data/findHelp";
import { Coordinate } from "@/services/address";
import { useEffect, useState } from "react";
import NightLineCard from "../common/NightLineCard";
import { SSE } from "@/lib/sse";
import { ModalSse } from "../modals/ModalSse";
type Props = {
  addressLabel: string;
  coordinates?: Coordinate;
  whatINeed: string;
  format: string;
};
export default function FindHelpResults({ addressLabel, coordinates, whatINeed, format }: Props) {
  const [results, setResults] = useState<Result[]>([]);
  const [selectedSse, setSelectedSse] = useState<SSE | null>(null);

  useEffect(() => {
    let cancelled = false;

    getResults(addressLabel, whatINeed, format, setSelectedSse, coordinates).then((r) => {
      if (!cancelled) setResults(r);
    });

    return () => {
      cancelled = true;
    };
  }, [addressLabel, whatINeed, format, coordinates]);

  return (
    <>
      {selectedSse && <ModalSse sse={selectedSse} />}
      {results
        .filter((result) => result.isNightline || (result.cards && result.cards?.length > 0))
        .map(({ title, cards, isNightline }, index) => {
          return (
            <div key={`result__${index.toString()}`}>
              {title ? (
                <h2 className={styles.title}>
                  <span className={styles.index}>{String(title.index).padStart(2, "0")}</span>{" "}
                  {title.title}
                </h2>
              ) : (
                <div className={styles.emptyTitle} />
              )}
              {isNightline ? (
                <NightLineCard />
              ) : (
                <div className={styles.results}>{cards?.map((card) => card)}</div>
              )}
              <div className={styles.separator} />
            </div>
          );
        })}
    </>
  );
}
