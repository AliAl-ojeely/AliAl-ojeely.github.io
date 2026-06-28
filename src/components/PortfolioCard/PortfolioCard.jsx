import styles from './PortfolioCard.module.css';
import { useLanguage } from '../../hooks/useLanguage';

export default function PortfolioCard({ item, isExpanded, onToggle, onImageClick }) {
    const { t } = useLanguage();
    const hasImages = item.images && item.images.length > 0;

    const handleMainImageClick = (e) => {
        e.stopPropagation();
        if (hasImages) {
            onImageClick && onImageClick(item.images, 0);
        } else {
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
                                <strong>{t('whyBuilt')}:</strong> {item.reason}
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
                                {t('viewOnGitHub')}
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
                {isExpanded ? t('collapseHint') : t('expandHint')}
            </div>
        </article>
    );
}