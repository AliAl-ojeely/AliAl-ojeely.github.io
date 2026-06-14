import { useState, useEffect } from 'react';
import PortfolioItem from '../../models/PortfolioItem';
import { fetchPortfolioData } from '../../services/dataLoader';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import ImageModal from '../../components/ImageModal/ImageModal';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import styles from './Home.module.css';

// Paths to assets in the public folder
const profilePhoto = '/profile.jpg';
const cvFile = '/Ali_Al-Ojeely_CV.pdf'; // Change to your actual CV filename

export default function Home() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState(null);

    // Slideshow modal state
    const [modalImages, setModalImages] = useState([]);
    const [modalIndex, setModalIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        async function load() {
            const data = await fetchPortfolioData();
            await PortfolioItem.loadFromSource(data);
            setItems(PortfolioItem.findAll());
            setLoading(false);
        }
        load();
    }, []);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const openModal = (images, index = 0) => {
        setModalImages(images);
        setModalIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            {/* HERO SECTION */}
            <section id="home" className={styles.hero}>
                <div className={styles.heroRow}>
                    <img
                        src={profilePhoto}
                        alt="Ali Al-Ojeely"
                        className={styles.profilePic}
                        loading="lazy"
                    />
                    <div className={styles.heroText}>
                        <h1 className={styles.name}>Ali Nasser Al‑Ojeely</h1>
                        <p className={styles.title}>Software Developer</p>
                        <p className={styles.tagline}>
                            Building cross‑platform desktop apps & modern web interfaces
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

            {/* ABOUT SECTION */}
            <section id="about" className={styles.about}>
                <h2>About Me</h2>
                <p className={styles.summary}>
                    Frontend & Desktop Software Developer focused on building cross‑platform applications and
                    web interfaces. Proficient in React.js, Electron.js, C#, and JavaScript. Experienced in
                    developing offline‑capable tools with local data caching and clean UI/UX. Practical
                    knowledge of using GitHub Actions CI/CD for build automation and handling local file
                    system operations.
                </p>
                <div className={styles.aboutGrid}>
                    <div className={styles.card}>
                        <h3>Core Competencies</h3>
                        <ul>
                            <li><strong>Frontend & UI:</strong> HTML5/CSS3, JavaScript, React.js, UI/UX Design</li>
                            <li><strong>Desktop & Systems:</strong> C#, C++, Electron.js, Node.js</li>
                            <li><strong>Tools & Architecture:</strong> Git/GitHub, Data Structure & OOP, Inno Setup</li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3>Education</h3>
                        <ul>
                            <li>B.Sc. IT – University of Science and Technology (2025)</li>
                            <li>Software Engineering Success – DevZone (2025)</li>
                            <li>DevOps Training – DevZone (2025)</li>
                            <li>Front‑End Development – UST (2022)</li>
                            <li>ICDL – UST (2021)</li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3>Languages</h3>
                        <ul>
                            <li>Arabic (Native)</li>
                            <li>English (B2)</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className={styles.projects}>
                <h2>My Projects</h2>
                {loading ? (
                    <p className={styles.loading}>Loading projects...</p>
                ) : (
                    <div className={styles.projectGrid}>
                        {items.map((item) => (
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

            {/* FOOTER SECTION */}
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

            <ScrollToTop />

            {/* SLIDESHOW MODAL */}
            {modalOpen && (
                <ImageModal
                    images={modalImages}
                    initialIndex={modalIndex}
                    onClose={closeModal}
                />
            )}
        </>
    );
}