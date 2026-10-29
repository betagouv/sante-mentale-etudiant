"use client";
import styles from "./findHelpResults.module.scss";
import { getResults, Result } from "./data/findHelp";
import { Coordinate } from "@/services/address";
import { Fragment, useEffect, useState } from "react";
import NightLineCard from "../common/NightLineCard";
import { SSE } from "@/lib/sse";
import { ModalSse } from "../modals/ModalSse";
import { BAPU } from "@/lib/bapu";
import { ModalBapu } from "../modals/ModalBapu";
import { useMatomo } from "@/hooks/useMatomo";
type Props = {
  addressLabel: string;
  coordinates?: Coordinate;
  whatINeed: string;
  format: string;
};
export default function FindHelpResults({ addressLabel, coordinates, whatINeed, format }: Props) {
  const [results, setResults] = useState<Result[]>([]);
  const [selectedSse, setSelectedSse] = useState<SSE | null>(null);
  const [selectedBapu, setSelectedBapu] = useState<BAPU | null>(null);
  const { trackBapuOpenModal, trackSseOpenModal } = useMatomo();

  useEffect(() => {
    if (selectedSse) {
      trackSseOpenModal(selectedSse);
    }
  }, [selectedSse, trackSseOpenModal]);

  useEffect(() => {
    if (selectedBapu) {
      trackBapuOpenModal(selectedBapu);
    }
  }, [selectedBapu, trackBapuOpenModal]);

  useEffect(() => {
    let cancelled = false;

    getResults(addressLabel, whatINeed, format, setSelectedSse, setSelectedBapu, coordinates).then(
      (r) => {
        if (!cancelled) setResults(r);
      }
    );

    return () => {
      cancelled = true;
    };
  }, [addressLabel, whatINeed, format, coordinates]);

  return (
    <>
      <ModalSse sse={selectedSse} />
      <ModalBapu bapu={selectedBapu} />
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
                <div className={styles.results}>
                  {cards?.map((card, i) => (
                    <Fragment key={i}>{card}</Fragment>
                  ))}
                </div>
              )}
              <div className={styles.separator} />
            </div>
          );
        })}
    </>
  );
}
