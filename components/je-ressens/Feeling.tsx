import { Feeling as FeelingType } from "@/lib/feelings/types";
import FeelingVideo from "./video/FeelingVideo";
import FeelingRecap from "./FeelingRecap";
import FeelingUnderstand from "./FeelingUnderstand";
import FeelingTips from "./tips/FeelingTips";
import FeelingArticles from "./FeelingArticles";

type Props = {
  feeling: FeelingType;
};
export default function Feeling({ feeling }: Props) {
  return (
    <>
      <FeelingVideo feeling={feeling} />
      <FeelingRecap feeling={feeling} />
      <FeelingUnderstand feeling={feeling} />
      <FeelingTips feeling={feeling} />
      <FeelingArticles feeling={feeling} />
    </>
  );
}
