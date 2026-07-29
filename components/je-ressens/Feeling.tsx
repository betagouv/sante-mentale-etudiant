import { Feeling as FeelingType } from "@/lib/feelings/types";
import FeelingVideo from "./video/FeelingVideo";
import FeelingRecap from "./FeelingRecap";
import FeelingUnderstand from "./FeelingUnderstand";

type Props = {
  feeling: FeelingType;
};
export default function Feeling({ feeling }: Props) {
  return (
    <>
      <FeelingVideo feeling={feeling} />
      <FeelingRecap feeling={feeling} />
      <FeelingUnderstand feeling={feeling} />
    </>
  );
}
