export const renderReadingTime = (time: number) => (
  <>
    <span
      className="fr-icon--sm fr-icon-timer-line"
      aria-hidden="true"
      style={{ marginRight: "4px" }}
    />
    {time.toString()} minutes de lecture
  </>
);
