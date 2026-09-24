import AboutUs from "@/components/about-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous",
};

export default function AboutUsPage() {
  return <AboutUs />;
}
