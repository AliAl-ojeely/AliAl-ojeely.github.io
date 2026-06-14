import styles from './PortfolioCard.module.css';

export default function PortfolioCard({ item, isExpanded, onToggle, onImageClick }) {
    const hasImages = item.images && item.images.length > 0;

    // When main image is clicked, open modal with all images
    const handleMainImageClick = (e) => {
        e.stopPropagation();
        if (hasImages) {
            onImageClick && onImageClick(item.images, 0);
        } else {
            // If only one image (the main one), still open modal
            if (item.image) {
                onImageClick && onImageClick([item.image], 0);
            }
        }
    };

    return (
        <article
            className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}
            onClick={onToggle}
        >
            {item.image && (
                <img
                    src={item.image}
                    alt={item.title}
                    className={styles.image}
                    loading="lazy"
                    onClick={handleMainImageClick}
                />
            )}

            <div className={styles.body}>
                <h3>{item.title}</h3>

                {!isExpanded && (
                    <p className={styles.shortDesc}>
                        {item.description.slice(0, 100)}...
                    </p>
                )}

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

                {isExpanded && hasImages && (
                    <div className={styles.gallery}>
                        {item.images.map((imgPath, index) => (
                            <img
                                key={index}
                                src={imgPath}
                                alt={`${item.title} screenshot ${index + 1}`}
                                className={styles.galleryImg}
                                loading="lazy"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onImageClick && onImageClick(item.images, index);
                                }}
                            />
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