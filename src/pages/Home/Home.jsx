import { useState, useEffect } from 'react';
import PortfolioItem from '../../models/PortfolioItem';
import { fetchPortfolioData } from '../../services/dataLoader';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import ImageModal from '../../components/ImageModal/ImageModal';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import ProjectFilter from '../../components/ProjectFilter/ProjectFilter';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import useTypingRotate from '../../hooks/useTypingRotate';
import Certificate from '../../models/Certificate';
import { fetchCertificates } from '../../services/certificateLoader';
import CertificateCard from '../../components/CertificateCard/CertificateCard';
import styles from './Home.module.css';

const profilePhoto = '/profile.webp';
const cvFile = '/Ali_Al-Ojeely_CV.pdf';

export default function Home() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState(null);
    const [modalImages, setModalImages] = useState([]);
    const [modalIndex, setModalIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);
    
    const typingWords = [
        'Software Developer',
        'Frontend Engineer',
        'Desktop App Creator',
        'Full‑Stack Builder',
    ];

    const typedText = useTypingRotate(typingWords, 80, 50, 1800);
    const [initialAnim, setInitialAnim] = useState(true);
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        // Data loading
        async function load() {
            const data = await fetchPortfolioData();
            await PortfolioItem.loadFromSource(data);
            const allItems = PortfolioItem.findAll();
            const certData = await fetchCertificates();
            await Certificate.loadFromSource(certData);
            setCertificates(Certificate.findAll());
            setItems(allItems);
            setFilteredItems(allItems);
            setLoading(false);
        }
        load();

        const timer = setTimeout(() => setInitialAnim(false), 30000);
        return () => clearTimeout(timer);
    }, []);

    const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

    const openModal = (images, index = 0) => {
        console.log('Opening modal with images:', images, 'index:', index); // temporary debug
        setModalImages(images);
        setModalIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    const handleFilter = (newItems) => setFilteredItems(newItems);

    return (
        <>
            {/* HERO */}
            <section id="home" className={styles.hero}>
                <div className={styles.heroRow}>
                    <img
                        src={profilePhoto}
                        alt="Ali Al-Ojeely"
                        className={`${styles.profilePic} ${initialAnim ? styles.initialAnim : ''}`}
                        loading="lazy"
                    />
                    <div className={styles.heroText}>
                        <h1 className={styles.name}>Ali Nasser Al‑Ojeely</h1>
                        <p className={styles.title}>
                            {typedText}
                            <span className={styles.cursor}>|</span>
                        </p>
                        <p className={styles.tagline}>
                            Building cross‑platform desktop apps &amp; modern web interfaces
                        </p>
                        <div className={styles.actions}>
                            <button
                                onClick={() =>
                                    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
                                }
                                className={styles.btnPrimary}
                            >
                                View Projects
                            </button>
                            <a
                                href="https://github.com/AliAl-ojeely"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnSecondary}
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ali-nasser-al-ojeely-27b86b372/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnSecondary}
                            >
                                LinkedIn
                            </a>
                            <a href={cvFile} download className={styles.btnSecondary}>
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <RevealOnScroll>
                <section id="about" className={styles.about}>
                    <h2>About Me</h2>
                    <p className={styles.summary}>
                        Frontend &amp; Desktop Software Developer focused on building cross‑platform
                        applications and web interfaces. Proficient in React.js, Electron.js, C#, and
                        JavaScript. Experienced in developing offline‑capable tools with local data caching
                        and clean UI/UX. Practical knowledge of using GitHub Actions CI/CD for build
                        automation and handling local file system operations.
                    </p>
                    <div className={styles.aboutGrid}>
                        <div className={styles.card}>
                            <h3>Core Competencies</h3>
                            <ul>
                                <li>
                                    <strong>Frontend &amp; UI:</strong>
                                    <ul>
                                        <li>HTML5/CSS3,
                                            JavaScript,
                                            React.js
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Desktop &amp; Systems:</strong>
                                    <ul>
                                        <li>C#,
                                            C++,
                                            Electron.js,
                                            Node.js
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Tools &amp; Architecture:</strong>
                                    <ul>
                                        <li>Git/GitHub,
                                            GitHub Actions (CI/CD),
                                            Data Structures &amp; OOP,
                                            Inno Setup
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>Education</h3>
                            <ul>
                                <li>B.Sc. IT – University of Science and Technology (2025)</li>
                                {/* <li>Software Engineering Success – DevZone (2025)</li>
                                <li>DevOps Training – DevZone (2025)</li>
                                <li>Front‑End Development – UST (2022)</li>
                                <li>ICDL – UST (2021)</li> */}
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>Languages</h3>
                            <ul>
                                <li>Arabic (Native)</li>
                                <li>English (Intermediate/B1)</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* CERTIFICATES */}
            <RevealOnScroll direction="right">
                <section id="certificates" className={styles.certificates}>
                    <h2>Certificates</h2>
                    <div className={styles.certificateGrid}>
                        {certificates.map(cert => (
                            <CertificateCard key={cert.id} certificate={cert} />
                        ))}
                    </div>
                </section>
            </RevealOnScroll>

            {/* PROJECTS */}
            <RevealOnScroll direction="left">
                <section id="projects" className={styles.projects}>
                    <h2>My Projects</h2>
                    <ProjectFilter items={items} onFilter={handleFilter} />
                    {loading ? (
                        <p className={styles.loading}>Loading projects...</p>
                    ) : (
                        <div className={styles.projectGrid}>
                            {filteredItems.map((item) => (
                                <PortfolioCard
                                    key={item.id}
                                    item={item}
                                    isExpanded={expandedId === item.id}
                                    onToggle={() => toggleExpand(item.id)}
                                    onImageClick={openModal}
                                />
                            ))}
                        </div>
                    )}
                </section>
            </RevealOnScroll>

            {/* FOOTER */}
            <RevealOnScroll>
                <footer className={styles.footer}>
                    <div className={styles.techIcons}>
                        <i className="devicon-javascript-plain colored" title="JavaScript"></i>
                        <i className="devicon-react-original colored" title="React"></i>
                        <i className="devicon-electron-original colored" title="Electron"></i>
                        <i className="devicon-csharp-plain colored" title="C#"></i>
                        <i className="devicon-cplusplus-plain colored" title="C++"></i>
                        <i className="devicon-nodejs-plain colored" title="Node.js"></i>
                        <i className="devicon-git-plain colored" title="Git"></i>
                        <i className="devicon-github-original" title="GitHub" style={{ color: 'white' }}></i>
                        <i className="devicon-linux-plain" title="Linux" style={{ color: 'white' }}></i>
                        <i className="devicon-microsoftsqlserver-plain colored" title="SQL Server"></i>
                        <i className="devicon-html5-plain colored" title="HTML5"></i>
                        <i className="devicon-css3-plain colored" title="CSS3"></i>
                    </div>
                    <p>© {new Date().getFullYear()} Ali Al‑Ojeely. All rights reserved.</p>
                </footer>
            </RevealOnScroll>

            <ScrollToTop />

            {modalOpen && (
                <ImageModal images={modalImages} initialIndex={modalIndex} onClose={closeModal} />
            )}
        </>
    );
}