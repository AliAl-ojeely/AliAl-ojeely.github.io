import styles from './PortfolioCard.module.css';

export default function PortfolioCard({ item, isExpanded, onToggle }) {
    const hasImages = item.images && item.images.length > 0;

    return (
        <article
            className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}
            onClick={onToggle}
        >
            {/* Main thumbnail – only if image exists */}
            {item.image && (
                <img src={item.image} alt={item.title} className={styles.image} />
            )}

            <div className={styles.body}>
                <h3>{item.title}</h3>

                {/* Collapsed: show truncated text. Expanded: show nothing here (details block will show full). */}
                {!isExpanded && (
                    <p className={styles.shortDesc}>
                        {item.description.slice(0, 100)}...
                    </p>
                )}

                {/* Expanded details – appears only when card is open */}
                {isExpanded && (
                    <div className={styles.details}>
                        <p className={styles.fullDesc}>{item.description}</p>
                        {item.reason && (
                            <p className={styles.reason}>
                                <strong>Why I built it:</strong> {item.reason}
                            </p>
                        )}
                        {item.githubLink && (
                            <a
                                href={item.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.githubBtn}
                                onClick={(e) => e.stopPropagation()}
                            >
                                View on GitHub
                            </a>
                        )}
                    </div>
                )}

                <div className={styles.techList}>
                    {item.technologies.map((tech) => (
                        <span key={tech} className={styles.techBadge}>{tech}</span>
                    ))}
                </div>

                {/* Gallery – only when expanded and images exist */}
                {isExpanded && hasImages && (
                    <div className={styles.gallery}>
                        {item.images.map((imgPath, index) => (
                            <a
                                key={index}
                                href={imgPath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.galleryLink}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={imgPath}
                                    alt={`${item.title} screenshot ${index + 1}`}
                                    className={styles.galleryImg}
                                />
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <div className={styles.expandHint}>
                {isExpanded ? '▲ Click to collapse' : '▼ Click to expand'}
            </div>
        </article>
    );
}