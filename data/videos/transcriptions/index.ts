import { transcription3040 } from "./dispositifs/3040";
import { transcription3114 } from "./dispositifs/3114";
import { transcriptionSSE } from "./dispositifs/SSE";
import { transcriptionBAPU } from "./dispositifs/BAPU";

export const transcriptions: Record<string, string> = {
  "3040": transcription3040,
  "3114": transcription3114,
  BAPU: transcriptionBAPU,
  SSE: transcriptionSSE,
};
