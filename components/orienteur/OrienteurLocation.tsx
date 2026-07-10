import type { ReactNode } from "react";
import { OrienteurAnswers } from "./data/orienteurTree";


type Props = {
    backButton?: ReactNode;
    answers: OrienteurAnswers;
};

export default function OrienteurLocation({ backButton, answers }: Props) {
    return (
        <>
            {backButton}
            <h1>Dans quelle zone recherches-tu de l'aide ?</h1>
            {console.log(answers)}
            {/* renvoyer les answers à la page pour préfiltrer non ? */}
        </>
    );
}
