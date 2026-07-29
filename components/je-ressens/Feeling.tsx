import { Feeling as FeelingType } from "@/lib/feelings/types";
import FeelingVideo from "./video/FeelingVideo";
import FeelingRecap from "./FeelingRecap";

type Props = {
  feeling: FeelingType;
};
export default function Feeling({ feeling }: Props) {
  return (
    <>
      <FeelingVideo feeling={feeling} />
      <FeelingRecap feeling={feeling} />
    </>
  );
}
