import styles from "./InfoFields.module.scss";

export const AddressField = (address: string) => (
  <div>
    <span className="fr-icon--sm fr-icon-map-pin-2-line" />
    <span className={styles.title}>Adresse :</span>
    <span>{address}</span>
  </div>
);

export const EmailField = (email: string) => (
  <div>
    <span className="fr-icon--sm fr-icon-mail-line" />
    <span className={styles.title}>E-mail :</span>
    <a href={`mailto:${email}`} className={styles.link}>
      {email}
    </a>
  </div>
);

export const PhoneField = (phone: string) => (
  <div>
    <span className="fr-icon--sm fr-icon-phone-line" />
    <span className={styles.title}>Téléphone :</span>
    <a href={`tel:${phone}`} className={styles.link}>
      {phone}
    </a>
  </div>
);

export const WebsiteField = (website: string) => (
  <div>
    <span className="fr-icon--sm fr-icon-global-line" />
    <span className={styles.title}>Site internet :</span>
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
