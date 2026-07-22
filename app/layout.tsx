import { getHtmlAttributes, DsfrHead } from "../dsfr-bootstrap/server-only-index";
import { DsfrProvider, StartDsfrOnHydration } from "../dsfr-bootstrap";
import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/layout/Newsletter";
import { Suspense } from "react";
import "@/styles/colors.scss";

export const metadata: Metadata = {
  title: "Mon application",
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
          <Header />
          <div style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Suspense>{children}</Suspense>
          </div>
          <Newsletter />
          <Footer />
        </DsfrProvider>
      </body>
    </html>
  );
}
