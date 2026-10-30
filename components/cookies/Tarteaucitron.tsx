"use client";

import Script from "next/script";

declare global {
  interface Window {
    tarteaucitron: any;
  }
}

function initTarteaucitron() {
  const t = window.tarteaucitron;

  t.init({
    privacyUrl: "/donnees-personnelles",
    bodyPosition: "bottom",
    hashtag: "#cookies",
    cookieName: "tarteaucitron",
    orientation: "middle",
    groupServices: false,
    showDetailsOnClick: true,
    serviceDefaultState: "wait",
    showAlertSmall: false,
    cookieslist: true,
    closePopup: false,
    showIcon: false,
    highPrivacy: true,
    handleBrowserDNTRequest: false,
    removeCredit: true,
    moreInfoLink: true,
    useExternalCss: false,
    useExternalJs: false,
    readmoreLink: "",
    mandatory: true,
    mandatoryCta: false,
    DenyAllCta: true, // bouton "Tout refuser"
    AcceptAllCta: true, // bouton "Tout accepter"
    cookieDomain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN ?? "",
  });

  // Dentsu
  t.services.dentsu = {
    key: "dentsu",
    type: "ads",
    name: "Dentsu (mesure de campagne)",
    needConsent: true,
    cookies: [],
    uri: "",
    js: function () {
      "use strict";
      // Mettre script fourni par Dentsu ici
    },
    fallback: function () { },
  };
  (t.job = t.job || []).push("dentsu");
}

export default function Tarteaucitron() {
  return (
    <Script
      src="/tarteaucitron/tarteaucitron.js"
      strategy="afterInteractive"
      onLoad={initTarteaucitron}
    />
  );
}
