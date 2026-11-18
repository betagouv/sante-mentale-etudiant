import NeedToTalkBanner from "../common/NeedToTalkBanner";
import HomeFeelings from "./feelings/HomeFeelings";
import HomeVideos from "./videos/HomeVideos";
import HomeStudentsStat from "./stats/HomeStudentsStat";
import HomeHero from "./hero/HomeHero";

// tells browsers the site name, otherwise it shows etudiant.gouv.fr
// homepage only needed
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Santé Mentale Étudiant",
  alternateName: ["Santé Mentale Etudiant"],
  url: process.env.NEXT_PUBLIC_SME_URL ?? "http://localhost:3000",
};

export default function Homepage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHero />
      <HomeStudentsStat />
      <HomeVideos />
      <HomeFeelings />
      <NeedToTalkBanner />
    </>
  );
}
