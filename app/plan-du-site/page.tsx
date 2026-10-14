import Link from "next/link";
import { SITE_SECTIONS } from "@/lib/sitemap";

export const metadata = { title: "Plan du site" };

export default function SiteMapPage() {
  return (
    <div className="fr-container fr-my-6w">
      <h1>Plan du site</h1>
      <ul>
        {SITE_SECTIONS.map((section) => (
          <li key={section.title}>
            {section.href ? <Link href={section.href}>{section.title}</Link> : <span>{section.title}</span>}
            {section.children && (
              <ul>
                {section.children.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href}>{child.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
