import Image, { StaticImageData } from "next/image";
import styles from "./CustomCard.module.scss";
import { Fragment, ReactElement, ReactNode } from "react";
import { BadgeProps } from "@codegouvfr/react-dsfr/Badge";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  image?: StaticImageData | string;
  imageAlt?: string;
  button?: ReactNode;
  badges: ReactElement<BadgeProps>[];
  location?: string;
  openingHours?: string;
  className?: string;
};
export default function CustomCard({
  title,
  subtitle,
  description,
  image,
  imageAlt = "",
  button,
  badges,
  location = "",
  openingHours = "",
  className,
}: Props) {
  return (
    <div className={`${styles.card} ${className ?? ""}`}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        {image && (
          <Image
            src={image}
            alt={imageAlt}
            className={styles.logo}
            width={87}
            height={0}
            style={{ width: "87px", height: "auto" }}
            sizes="87px"
          />
        )}
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.footer}>
        <div>
          <div className={styles.badges}>
            {badges.map((badge, index) => (
              <Fragment key={index}>{badge}</Fragment>
            ))}
          </div>
          {(location || openingHours) && (
            <div className={styles.infos}>
              {location && (
                <span>
                  <span className="fr-icon--sm fr-icon-map-pin-2-line"></span>
                  {location}
                </span>
              )}
              {openingHours && (
                <span>
                  <span className="fr-icon--sm fr-icon-time-line"></span> {openingHours}
                </span>
              )}
            </div>
          )}
        </div>
        {button && <div className={styles.button}>{button}</div>}
      </div>
    </div>
  );
}
