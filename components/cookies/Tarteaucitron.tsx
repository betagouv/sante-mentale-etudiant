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

// keys must be named with sme before so they never collide with tarteaucitron's 
// built-in catalog
const AD_SERVICES = [
  {
    key: "smeadform",
    name: "Adform",
    script: "/tags/adform.js",
    cookies: [],
    uri: "https://site.adform.com/privacy-center/adform-cookies",
  },
  {
    key: "smesnapchat",
    name: "Snap",
    script: "/tags/snapchat.js",
    cookies: ["_scid"],
    uri: "https://www.snap.com/cookie-policy?lang=fr-FR",
  },
  {
    key: "smemeta",
    name: "Meta",
    script: "/tags/meta.js",
    cookies: ["_fbp"],
    uri: "https://www.facebook.com/privacy/policies/cookies/",
  },
];

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
    readmoreLink: "/donnees-personnelles",
    mandatory: true,
    mandatoryCta: false,
    DenyAllCta: true,
    AcceptAllCta: true,
    cookieDomain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN ?? "",
  });

  for (const { key, name, script, cookies, uri } of AD_SERVICES) {
    t.services[key] = {
      key,
      type: "ads",
      name,
      needConsent: true,
      cookies,
      uri,
      js: () => loadScript(script),
      fallback: () => { },
    };
  }

  t.job = t.job ?? [];
  t.job.push(...AD_SERVICES.map(({ key }) => key));
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
