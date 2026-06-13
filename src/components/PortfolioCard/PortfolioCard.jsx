import styles from './PortfolioCard.module.css';

export default function PortfolioCard({ item }) {
    return (
        <article className={styles.card}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.body}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.techList}>
                    {item.technologies.map((tech) => (
                        <span key={tech} className={styles.techBadge}>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}