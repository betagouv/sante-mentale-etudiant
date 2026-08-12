import NeedToTalkBanner from "../besoin-de-parler/NeedToTalkBanner";
import HomeFeelings from "./HomeFeelings";
import HomeHero from "./HomeHero";
import HomeStudentsStat from "./HomeStudentsStat";

export default function Homepage() {
  return (
    <>
      <HomeHero />
      <HomeStudentsStat />
      <HomeFeelings />
      <NeedToTalkBanner />
    </>
  );
}