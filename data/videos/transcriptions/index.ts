import { transcription3040 } from "./dispositifs/3040";
import { transcription3114 } from "./dispositifs/3114";
import { transcriptionSSE } from "./dispositifs/SSE";
import { transcriptionBAPU } from "./dispositifs/BAPU";
import { transcriptionAnxiety } from "./feelings/anxiety";
import { transcriptionFatigue } from "./feelings/fatigue";
import { transcriptionDrugs } from "./feelings/drugs";
import { transcriptionEatingDisorder } from "./feelings/eating-disorder";
import { transcriptionFeelingManagement } from "./feelings/feeling-management";
import { transcriptionPainfulEvent } from "./feelings/painful-event";
import { transcriptionSolitude } from "./feelings/solitude";
import { transcriptionSuicidalThoughts } from "./feelings/suicidal-thought";

export const dispositifsTranscriptions: Record<string, string> = {
  "3040": transcription3040,
  "3114": transcription3114,
  BAPU: transcriptionBAPU,
  SSE: transcriptionSSE,
};

export const feelingTranscriptions = {
  anxiety: transcriptionAnxiety,
  drugs: transcriptionDrugs,
  "eating-disorder": transcriptionEatingDisorder,
  fatigue: transcriptionFatigue,
  "feeling-mangement": transcriptionFeelingManagement,
  "painful-event": transcriptionPainfulEvent,
  solitude: transcriptionSolitude,
  "suicidal-thought": transcriptionSuicidalThoughts,
} as const;