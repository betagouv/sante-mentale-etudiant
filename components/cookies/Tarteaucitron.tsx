"use client";

import Script from "next/script";

type TarteaucitronService = {
  key: string;
  type: string;
  name: string;
  needConsent: boolean;
  cookies: string[];
  uri: string;
  js: () => void;
  fallback: () => void;
};

type TarteaucitronApi = {
  init: (params: Record<string, unknown>) => void;
  services: Record<string, TarteaucitronService>;
  job?: string[];
  userInterface: { openPanel: () => void };
};

declare global {
  interface Window {
    tarteaucitron?: TarteaucitronApi;
  }
}

function loadScript(src: string) {
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  document.head.appendChild(s);
}

function initTarteaucitron() {
  const t = window.tarteaucitron;
  if (!t) return;

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
    DenyAllCta: true,
    AcceptAllCta: true,
    cookieDomain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN ?? "",
  });

  t.services.adform = {
    key: "adform",
    type: "ads",
    name: "Adform",
    needConsent: true,
    cookies: [],
    uri: "https://site.adform.com/privacy-center/adform-cookies",
    js: function () {
      "use strict";
      loadScript("/tags/adform.js");
    },
    fallback: function () { },
  };

  t.services.snapchat = {
    key: "snapchat",
    type: "ads",
    name: "Snap",
    needConsent: true,
    cookies: ["_scid"],
    uri: "https://www.snap.com/cookie-policy?lang=fr-FR",
    js: function () {
      "use strict";
      loadScript("/tags/snapchat.js");
    },
    fallback: function () { },
  };

  t.services.metapixel = {
    key: "metapixel",
    type: "ads",
    name: "Meta",
    needConsent: true,
    cookies: ["_fbp"],
    uri: "https://www.facebook.com/privacy/policies/cookies/",
    js: function () {
      "use strict";
      loadScript("/tags/metapixel.js");
    },
    fallback: function () { },
  };
  t.job = t.job ?? [];
  t.job.push("adform", "snapchat", "metapixel");
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
