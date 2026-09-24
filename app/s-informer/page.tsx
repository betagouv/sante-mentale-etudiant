import Articles from "@/components/articles/Articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "S’informer",
};

export default function ArticlesPage() {
  return <Articles />;
}
