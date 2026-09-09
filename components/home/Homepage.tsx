import NeedToTalkBanner from "../common/NeedToTalkBanner";
import HomeFeelings from "./feelings/HomeFeelings";
import HomeHero from "./HomeHero";
import HomeVideos from "./videos/HomeVideos";
import HomeStudentsStat from "./HomeStudentsStat";

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
