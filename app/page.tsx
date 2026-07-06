import LaunchOrienteur from "@/components/home/LaunchOrienteur";
import { StartDsfrOnHydration } from "../dsfr-bootstrap";

export default function Home() {
  return (
    <>
      <StartDsfrOnHydration />
      <main role="main" id="content">
        <LaunchOrienteur />
      </main>
    </>
  );
}
