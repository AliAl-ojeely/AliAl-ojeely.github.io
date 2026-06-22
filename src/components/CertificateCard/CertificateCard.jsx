import styles from './CertificateCard.module.css';

export default function CertificateCard({ certificate }) {
    const {
        title,
        description,
        duration,
        startDate,
        endDate,
        percentage,
        pdfLink,
    } = certificate;

    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.meta}>
                <span className={styles.duration}>⏱ {duration}</span>
                <span className={styles.date}>
                    {startDate} – {endDate}
                </span>
            </div>
            <div className={styles.footer}>
                {percentage !== null && percentage !== undefined && (
                    <span className={styles.percentage}>{percentage}%</span>
                )}
                {pdfLink && (
                    <a
                        href={pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.pdfLink}
                    >
                        View Certificate ↗
                    </a>
                )}
            </div>
        </div>
    );
}