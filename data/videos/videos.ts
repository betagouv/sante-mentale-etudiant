import { VideoTestimonial } from "@/components/video/types";
import { dispositifsTranscriptions } from "./transcriptions";
import { transcriptionAnxiety } from "./transcriptions/feelings/anxiety";
import { transcriptionDrugs } from "./transcriptions/feelings/drugs";
import { transcriptionEatingDisorder } from "./transcriptions/feelings/eating-disorder";
import { transcriptionFatigue } from "./transcriptions/feelings/fatigue";
import { transcriptionFeelingManagement } from "./transcriptions/feelings/feeling-management";
import { transcriptionSolitude } from "./transcriptions/feelings/solitude";
import { transcriptionSuicidalThoughts } from "./transcriptions/feelings/suicidal-thought";

export const VIDEO_KEYS = [
  "3040",
  "3114",
  "BAPU",
  "SSE",
  "SPE",
  "nightline",
  "anxiety",
  "drugs",
  "eating-disorder",
  "fatigue",
  "feeling-management",
  "solitude",
  "suicidal-thoughts",
] as const;

export type VideoKey = (typeof VIDEO_KEYS)[number];

export const testimonials: VideoTestimonial[] = [
  {
    key: "SSE",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/9tcsChqX84VCs6QNjcnyK9",
    previewUrl: "/videos/preview/SSE.mp4",
    posterUrl: "/images/vignettes/SSE.jpg",
    citation: "C’est un lieu de repère et de soutien",
    transcription: dispositifsTranscriptions["SSE"],
  },
  {
    key: "BAPU",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/mC7EjD3tY5XwkbhdCVQiQQ",
    previewUrl: "/videos/preview/BAPU.mp4",
    posterUrl: "/images/vignettes/BAPU.jpg",
    citation: "Ça fait du bien de sentir qu’on n’est pas seul",
    transcription: dispositifsTranscriptions["BAPU"],
  },
  {
    key: "SPE",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/uWG4X3ejBaQaEkc8wvu1Z3",
    previewUrl: "/videos/preview/SPE.mp4",
    posterUrl: "/images/vignettes/SPE.jpg",
    citation: "Vos problèmes ne sont pas moins importants",
    transcription: dispositifsTranscriptions["SPE"],
  },
  {
    key: "3040",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/nsCCWRdPyKzz3dzqUJf47P",
    previewUrl: "/videos/preview/3040.mp4",
    posterUrl: "/images/vignettes/3040.jpg",
    citation: "C’est normal de pas toujours se sentir bien",
    transcription: dispositifsTranscriptions["3040"],
  },
  {
    key: "3114",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/aLC2AZanixDaTpx8u36255",
    previewUrl: "/videos/preview/3114.mp4",
    posterUrl: "/images/vignettes/3114.jpg",
    citation: "N’attendez pas d’être dans une situation grave",
    transcription: dispositifsTranscriptions["3114"],
  },
  {
    key: "nightline",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/dHk38kRQcezaA9ZZQRsJvX",
    previewUrl: "/videos/preview/nightline.mp4",
    posterUrl: "/images/vignettes/nightline.jpg",
    citation: "Toute raison est légitime pour nous appeler",
    transcription: dispositifsTranscriptions["nightline"],
  },
];

export const feelings: VideoTestimonial[] = [
  {
    key: "anxiety",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/69Gv4zEK4X8nZLBqwJkvzY",
    previewUrl: "/videos/preview/feelings/anxiety.mp4",
    posterUrl: "/images/vignettes/feelings/anxiety.jpg",
    duration: 6,
    guest: {
      name: "Jérôme Lacinga",
      role: "Psychologue du dispositif Santé Psy Étudiant",
    },
    transcription: transcriptionAnxiety,
  },
  {
    key: "drugs",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/8KBMfic6rSAGDwZ95qeoQr",
    previewUrl: "/videos/preview/feelings/drugs.mp4",
    posterUrl: "/images/vignettes/feelings/drugs.jpg",
    duration: 6,
    guest: {
      name: "Jérôme Lacinga",
      role: "Psychologue du dispositif Santé Psy Étudiant",
    },
    transcription: transcriptionDrugs,
  },
  {
    key: "eating-disorder",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/dBh8sEXhSAAUiBMRRdUK5k",
    previewUrl: "/videos/preview/feelings/eating-disorder.mp4",
    posterUrl: "/images/vignettes/feelings/eating-disorder.jpg",
    duration: 5,
    guest: {
      name: "Jérôme Lacinga",
      role: "Psychologue du dispositif Santé Psy Étudiant",
    },
    transcription: transcriptionEatingDisorder,
  },
  {
    key: "fatigue",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/62xj5E1dsFjSurrmLAuRkG",
    previewUrl: "/videos/preview/feelings/fatigue.mp4",
    posterUrl: "/images/vignettes/feelings/fatigue.jpg",
    duration: 5,
    guest: {
      name: "Jérôme Lacinga",
      role: "Psychologue du dispositif Santé Psy Étudiant",
    },
    transcription: transcriptionFatigue,
  },
  {
    key: "feeling-management",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/gFMQYqditxorxyooNfUNH5",
    previewUrl: "/videos/preview/feelings/feeling-management.mp4",
    posterUrl: "/images/vignettes/feelings/feeling-management.jpg",
    duration: 7,
    guest: {
      name: "Jérôme Lacinga",
      role: "Psychologue du dispositif Santé Psy Étudiant",
    },
    transcription: transcriptionFeelingManagement,
  },
  {
    key: "solitude",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/mb2XUWbAqrDcxWMbxBwuEN",
    previewUrl: "/videos/preview/feelings/solitude.mp4",
    posterUrl: "/images/vignettes/feelings/solitude.jpg",
    duration: 5,
    guest: {
      name: "Jérôme Lacinga",
      role: "Psychologue du dispositif Santé Psy Étudiant",
    },
    transcription: transcriptionSolitude,
  },
  {
    key: "suicidal-thoughts",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/fswSe5qjZtxwP1gufYc8oC",
    previewUrl: "/videos/preview/feelings/suicidal-thoughts.mp4",
    posterUrl: "/images/vignettes/feelings/suicidal-thoughts.jpg",
    duration: 5,
    guest: {
      name: "Jérôme Lacinga",
      role: "Psychologue du dispositif Santé Psy Étudiant",
    },
    transcription: transcriptionSuicidalThoughts,
  },
];

const allVideos: VideoTestimonial[] = [...testimonials, ...feelings];

export const getVideoByKey = (key: VideoKey): VideoTestimonial =>
  allVideos.find((video) => video.key === key) ?? testimonials[0];
