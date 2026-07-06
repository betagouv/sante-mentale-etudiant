import { CallOut } from "@codegouvfr/react-dsfr/CallOut";
import { Notice } from "@codegouvfr/react-dsfr/Notice";

export default function HelpPage() {
  return (
    <>
      <CallOut title="Tu t'inquiètes pour un proche">
        C’est déjà beaucoup de t’en préoccuper. Voici comment reconnaître les signes et comment
        agir, sans te mettre en danger toi non plus.
      </CallOut>
      <Notice
        description="Si ton proche parle de mourir, de disparaître ou de se faire du mal, c'est un signe à prendre au sérieux immédiatement. Contacte le 3114."
        severity="warning"
        title="3114"
      />
    </>
  );
}
