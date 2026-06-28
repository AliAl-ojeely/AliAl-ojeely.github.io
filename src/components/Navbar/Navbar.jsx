import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { useLanguage } from '../../hooks/useLanguage';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { t, toggleLanguage, language } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
            const sections = ['home', 'about', 'certificates', 'projects'];
            let current = 'home';
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = id;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
        dir = {language === 'ar' ? 'rtl' : 'ltr'}
        >
            <span className={styles.logo} onClick={() => scrollTo('home')}>
                Ali Al‑Ojeely
            </span>

            <button
                className={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span></span><span></span><span></span>
            </button>

            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                <button onClick={() => scrollTo('home')} className={activeSection === 'home' ? styles.active : ''}>
                    {t('home')}
                </button>
                <button onClick={() => scrollTo('about')} className={activeSection === 'about' ? styles.active : ''}>
                    {t('about')}
                </button>
                <button onClick={() => scrollTo('certificates')} className={activeSection === 'certificates' ? styles.active : ''}>
                    {t('certificates')}
                </button>
                <button onClick={() => scrollTo('projects')} className={activeSection === 'projects' ? styles.active : ''}>
                    {t('projects')}
                </button>

                <button onClick={toggleLanguage} className={styles.langToggle}>
                    {language === 'en' ? 'AR' : 'EN'}
                </button>
            </nav>
        </header>
    );
}