
import Homepage from "@/components/home/Homepage";
import { StartDsfrOnHydration } from "../dsfr-bootstrap";

export default function Home() {
  return (
    <>
      <StartDsfrOnHydration />
      <main role="main" id="content">
        <Homepage />
      </main>
    </>
  );
}
