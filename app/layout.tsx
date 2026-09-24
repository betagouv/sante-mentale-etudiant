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

export const metadata: Metadata = {
  title: {
    default: "Santé Mentale Étudiant | Soutien, Ressources et Orientation",
    template: "%s | Santé Mentale Étudiant",
  },
  description: "",
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
          <div style={{ paddingLeft: 0, paddingRight: 0 }}>
            <VideoTestimonialModalProvider>
              <Suspense>{children}</Suspense>
            </VideoTestimonialModalProvider>
          </div>
          <Newsletter />
          <Footer />
        </DsfrProvider>
        <Suspense fallback={null}>
          <MatomoAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
