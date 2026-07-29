import styles from "./InfoFields.module.scss";

export const AddressField = (address: string, lat: number, lon: number, zoom = 17) => {
  const url = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=${zoom}/${lat}/${lon}`;
  return (
    <div>
      <span className="fr-icon--sm fr-icon-map-pin-2-line" />
      <span className={styles.title}>Adresse :</span>
      <a href={url} className={styles.link} target="_blank" rel="noopener noreferrer">
        {address}
      </a>
    </div>
  );
};

export const EmailField = (email: string, idx?: number) => (
  <div>
    <span className="fr-icon--sm fr-icon-mail-line" />
    <span className={styles.title}>
      E-mail {idx && idx >= 1 ? `${(idx + 1).toString()} ` : ""}:
    </span>
    <a href={`mailto:${email}`} className={styles.link}>
      {email}
    </a>
  </div>
);

export const PhoneField = (phone: string, idx?: number) => (
  <div>
    <span className="fr-icon--sm fr-icon-phone-line" />
    <span className={styles.title}>
      Téléphone {idx && idx >= 1 ? `${(idx + 1).toString()} ` : ""}:
    </span>
    <a href={`tel:${phone}`} className={styles.link}>
      {phone}
    </a>
  </div>
);

export const WebsiteField = (website: string, idx?: number) => (
  <div>
    <span className="fr-icon--sm fr-icon-global-line" />
    <span className={styles.title}>
      Site internet {idx && idx >= 1 ? `${(idx + 1).toString()} ` : ""}:
    </span>
    <a href={website} target="_blank" rel="noopener noreferrer" className={styles.link}>
      {website}
    </a>
  </div>
);

export const EligibilityField = (eligibility: string) => (
  <div>
    <span className="fr-icon--sm fr-icon-team-line" />
    <span className={styles.title}>Conditions d'éligibilité</span>
    <p className={styles.paragraph}>{eligibility}</p>
  </div>
);

export const OpeningHoursField = (openingHours: string) => (
  <div>
    <span className="fr-icon--sm fr-icon-time-line" />
    <span className={styles.title}>Horaires</span>
    <p className={styles.paragraph}>{openingHours}</p>
  </div>
);
