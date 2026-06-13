import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.name}>Ali Nasser Al-Ojeely</h1>
                <p className={styles.title}>Software Developer</p>
                <p className={styles.tagline}>
                    Building cross-platform desktop apps & modern web interfaces with
                    React.js, Electron.js, and C#.
                </p>
                <div className={styles.actions}>
                    <Link to="/projects" className={styles.btnPrimary}>
                        View Projects
                    </Link>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnSecondary}
                    >
                        GitHub
                    </a>
                </div>
            </div>
            <div className={styles.contact}>
                <a href="mailto:alinasseralojeely@gmail.com">alinasseralojeely@gmail.com</a>
                <span> | </span>
                <span>+967 782 236 510</span>
                <span> | </span>
                <span>Yemen, Mukalla</span>
            </div>
        </section>
    );
}