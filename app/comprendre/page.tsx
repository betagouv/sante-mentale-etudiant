import { SearchBar } from "@codegouvfr/react-dsfr/SearchBar";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";

export default function ComprendrePage() {
  return (
    <>
      <CallOut title="Je veux comprendre">
        Articles, vidéos et podcasts pour mieux comprendre la santé mentale.
      </CallOut>
      <SearchBar />
    </>
  );
}
