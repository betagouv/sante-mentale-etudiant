import NeedToTalkBanner from "../common/NeedToTalkBanner";
import HomeFeelings from "./feelings/HomeFeelings";
import HomeVideos from "./videos/HomeVideos";
import HomeStudentsStat from "./stats/HomeStudentsStat";
import HomeHero from "./hero/HomeHero";

export default function Homepage() {
  return (
    <>
      <HomeHero />
      <HomeStudentsStat />
      <HomeVideos />
      <HomeFeelings />
      <NeedToTalkBanner />
    </>
  );
}
