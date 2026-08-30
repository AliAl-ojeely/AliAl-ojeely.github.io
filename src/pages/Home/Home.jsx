import { useState, useEffect } from 'react';
import PortfolioItem from '../../models/PortfolioItem';
import { fetchPortfolioData as fetchPortfolioDataEn } from '../../services/dataLoader';
import { fetchPortfolioData as fetchPortfolioDataAr } from '../../services/dataLoader.ar';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import ImageModal from '../../components/ImageModal/ImageModal';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import ProjectFilter from '../../components/ProjectFilter/ProjectFilter';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import useTypingRotate from '../../hooks/useTypingRotate';
import Certificate from '../../models/Certificate';
import { fetchCertificates as fetchCertificatesEn } from '../../services/certificateLoader';
import { fetchCertificates as fetchCertificatesAr } from '../../services/certificateLoader.ar';
import CertificateCard from '../../components/CertificateCard/CertificateCard';
import { useLanguage } from '../../hooks/useLanguage';
import styles from './Home.module.css';

const profilePhoto = '/profile.webp';
const cvFile = '/Ali_Al-Ojeely_CV.pdf';

export default function Home() {
    const { t, language } = useLanguage();

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState(null);
    const [modalImages, setModalImages] = useState([]);
    const [modalIndex, setModalIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);
    const [initialAnim, setInitialAnim] = useState(true);
    const [certificates, setCertificates] = useState([]);

    const typingWords = [
        'Software Developer',
        'Frontend Engineer',
        'Desktop App Creator',
        'Full-Stack Builder',
    ];

    const typedText = useTypingRotate(
        typingWords,
        80,
        50,
        1800
    );

    useEffect(() => {
      let cancelled = false;

      async function load() {
        setLoading(true);

        const portfolioLoader =
          language === "ar" ? fetchPortfolioDataAr : fetchPortfolioDataEn;

        const certificateLoader =
          language === "ar" ? fetchCertificatesAr : fetchCertificatesEn;

        const [portfolioData, certificateData] = await Promise.all([
          portfolioLoader(),
          certificateLoader(),
        ]);

        await PortfolioItem.loadFromSource(portfolioData);
        await Certificate.loadFromSource(certificateData);

        if (cancelled) {
          return;
        }

        const allItems = PortfolioItem.findAll();
        const allCertificates = Certificate.findAll();

        setItems(allItems);
        setFilteredItems(allItems);
        setCertificates(allCertificates);
        setLoading(false);
      }

      load();

      const timer = setTimeout(() => {
        setInitialAnim(false);
      }, 3000);

      return () => {
        cancelled = true;
        clearTimeout(timer);
      };
    }, [language]);

    const toggleExpand = (id) => {
        setExpandedId(
            expandedId === id ? null : id
        );
    };

    const openModal = (images, index = 0) => {
        setModalImages(images);
        setModalIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleFilter = (newItems) => {
        setFilteredItems(newItems);
    };

    const scrollToProjects = () => {
        document
            .getElementById('projects')
            ?.scrollIntoView({
                behavior: 'smooth',
            });
    };

    return (
        <div
            className={styles.page}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
            <section
                id="home"
                className={styles.hero}
            >
                <div className={styles.heroRow}>
                    <img
                        src={profilePhoto}
                        alt="Ali Al-Ojeely"
                        className={`${styles.profilePic} ${
                            initialAnim
                                ? styles.initialAnim
                                : ''
                        }`}
                    />

                    <div className={styles.heroText}>
                        <h1 className={styles.name}>
                            {t('name')}
                        </h1>

                        <p className={styles.title}>
                            {typedText}
                            <span className={styles.cursor}>
                                |
                            </span>
                        </p>

                        <p className={styles.tagline}>
                            {t('tagline')}
                        </p>

                        <div className={styles.actions}>
                            <button
                                type="button"
                                onClick={scrollToProjects}
                                className={styles.btnPrimary}
                            >
                                {t('viewProjects')}
                            </button>

                            <a
                                href="https://github.com/AliAl-ojeely"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnSecondary}
                            >
                                {t('github')}
                            </a>

                            <a
                                href="https://www.linkedin.com/in/ali-nasser-al-ojeely-27b86b372/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnSecondary}
                            >
                                {t('linkedin')}
                            </a>

                            <a
                                href={cvFile}
                                download
                                className={styles.btnSecondary}
                            >
                                {t('downloadCV')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <RevealOnScroll>
                <section
                    id="about"
                    className={styles.about}
                >
                    <h2>{t('aboutTitle')}</h2>

                    <p className={styles.summary}>
                        {t('aboutSummary')}
                    </p>

                    <div className={styles.aboutGrid}>
                        <div className={styles.card}>
                            <h3>
                                {t('coreCompetencies')}
                            </h3>

                            <ul>
                                <li>
                                    <strong>
                                        {t('frontendUI')}:
                                    </strong>{' '}
                                    {t('htmlCssJsReact')}
                                </li>

                                <li>
                                    <strong>
                                        {t('desktopSystems')}:
                                    </strong>{' '}
                                    {t(
                                        'cSharpCppElectronNode'
                                    )}
                                </li>

                                <li>
                                    <strong>
                                        {t(
                                            'toolsArchitecture'
                                        )}:
                                    </strong>{' '}
                                    {t('toolsList')}
                                </li>
                            </ul>
                        </div>

                        <div className={styles.card}>
                            <h3>{t('education')}</h3>

                            <ul>
                                <li>{t('bscIt')}</li>
                            </ul>
                        </div>

                        <div className={styles.card}>
                            <h3>{t('languages')}</h3>

                            <ul>
                                <li>
                                    {t('arabicNative')}
                                </li>

                                <li>
                                    {t('englishB1')}
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
                <section
                    id="certificates"
                    className={styles.certificates}
                >
                    <h2>
                        {t('certificatesTitle')}
                    </h2>

                    <div
                        className={
                            styles.certificateGrid
                        }
                    >
                        {certificates.map((cert) => (
                            <CertificateCard
                                key={cert.id}
                                certificate={cert}
                            />
                        ))}
                    </div>
                </section>
            </RevealOnScroll>

            <RevealOnScroll direction="left">
                <section
                    id="projects"
                    className={styles.projects}
                >
                    <h2>{t('projectsTitle')}</h2>

                    <ProjectFilter
                        items={items}
                        onFilter={handleFilter}
                    />

                    {loading ? (
                        <p
                            className={
                                styles.loading
                            }
                        >
                            {t('loading')}
                        </p>
                    ) : (
                        <div
                            className={
                                styles.projectGrid
                            }
                        >
                            {filteredItems.map(
                                (item) => (
                                    <PortfolioCard
                                        key={item.id}
                                        item={item}
                                        isExpanded={
                                            expandedId ===
                                            item.id
                                        }
                                        onToggle={() =>
                                            toggleExpand(
                                                item.id
                                            )
                                        }
                                        onImageClick={
                                            openModal
                                        }
                                    />
                                )
                            )}
                        </div>
                    )}
                </section>
            </RevealOnScroll>

            <RevealOnScroll>
                <footer className={styles.footer}>
                    <div
                        className={
                            styles.techIcons
                        }
                    >
                        <i
                            className="devicon-javascript-plain colored"
                            title="JavaScript"
                        ></i>

                        <i
                            className="devicon-react-original colored"
                            title="React"
                        ></i>

                        <i
                            className="devicon-electron-original colored"
                            title="Electron"
                        ></i>

                        <i
                            className="devicon-csharp-plain colored"
                            title="C#"
                        ></i>

                        <i
                            className="devicon-cplusplus-plain colored"
                            title="C++"
                        ></i>

                        <i
                            className="devicon-nodejs-plain colored"
                            title="Node.js"
                        ></i>

                        <i
                            className="devicon-git-plain colored"
                            title="Git"
                        ></i>

                        <i
                            className="devicon-github-original"
                            title="GitHub"
                            style={{
                                color: 'white',
                            }}
                        ></i>

                        <i
                            className="devicon-linux-plain"
                            title="Linux"
                            style={{
                                color: 'white',
                            }}
                        ></i>

                        <i
                            className="devicon-microsoftsqlserver-plain colored"
                            title="SQL Server"
                        ></i>

                        <i
                            className="devicon-html5-plain colored"
                            title="HTML5"
                        ></i>

                        <i
                            className="devicon-css3-plain colored"
                            title="CSS3"
                        ></i>
                    </div>

                    <p>
                        © {new Date().getFullYear()}{' '}
                        Ali Al-Ojeely.{' '}
                        {t('allRightsReserved')}
                    </p>
                </footer>
            </RevealOnScroll>

            <ScrollToTop />

            {modalOpen && (
                <ImageModal
                    images={modalImages}
                    initialIndex={modalIndex}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}