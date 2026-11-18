import { getHtmlAttributes, DsfrHead } from "../dsfr-bootstrap/server-only-index";
import { DsfrProvider, StartDsfrOnHydration } from "../dsfr-bootstrap";
import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/layout/Newsletter";
import { Suspense } from "react";
import "@/styles/colors.scss";
import { VideoTestimonialModalProvider } from "@/components/video/VideoTestimonialModalProvider";
import { MatomoAnalytics } from "@/analytics/Matomo";
import { SkipLinks } from "@codegouvfr/react-dsfr/SkipLinks";
import Tarteaucitron from "@/components/cookies/Tarteaucitron";

const smeUrl = process.env.NEXT_PUBLIC_SME_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(smeUrl),
  title: {
    default: "Santé Mentale Étudiant | Soutien, Ressources et Orientation",
    template: "%s | Santé Mentale Étudiant",
  },
  description:
    "Stress, anxiété, fatigue, solitude... " +
    "Le site Santé Mentale Étudiant vous informe, vous oriente et vous accompagne " +
    "pour identifier rapidement les dispositifs d'aide gratuits ou pris en charge, " +
    "que vous soyez vous-même en difficulté ou que vous cherchiez à soutenir un proche.",
  openGraph: {
    siteName: "Santé Mentale Étudiant",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = "fr";
  return (
    <html {...getHtmlAttributes({ lang })}>
      <head>
        <DsfrHead preloadFonts={["Marianne-Regular", "Marianne-Medium", "Marianne-Bold"]} />
      </head>
      <body>
        <DsfrProvider lang={lang}>
          <StartDsfrOnHydration />
          <SkipLinks
            links={[
              { label: "Contenu", anchor: "#content" },
              { label: "Menu", anchor: "#menu" },
              { label: "Pied de page", anchor: "#footer" },
            ]}
          />
          <Header />
          <main id="content" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <VideoTestimonialModalProvider>
              {children}
            </VideoTestimonialModalProvider>
          </main>
          <Newsletter />
          <Footer />
        </DsfrProvider>
        <Suspense fallback={null}>
          <MatomoAnalytics />
        </Suspense>
        <Tarteaucitron />
      </body>
    </html>
  );
}
