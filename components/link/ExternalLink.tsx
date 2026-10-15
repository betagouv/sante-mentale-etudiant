import Link from "next/link";
import { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <Link href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="fr-sr-only"> - nouvelle fenêtre</span>
    </Link>
  );
}
