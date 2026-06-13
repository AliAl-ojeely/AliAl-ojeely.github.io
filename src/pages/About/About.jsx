import styles from './About.module.css';

export default function About() {
    return (
        <section className={styles.about}>
            <h2>About Me</h2>
            <div className={styles.summary}>
                <p>
                    Frontend & Desktop Software Developer focused on building
                    cross-platform applications and web interfaces. Proficient in
                    React.js, Electron.js, C#, and JavaScript. Experienced in
                    developing offline-capable tools with local data caching and clean
                    UI/UX. Practical knowledge of using GitHub Actions CI/CD for build
                    automation and handling local file system operations.
                </p>
            </div>

            <div className={styles.grid}>
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
                        <li>B.Sc. Information Technology – University of Science and Technology (2025)</li>
                        <li>Software Engineering Success – DevZone (2025)</li>
                        <li>Website Deployment & Server Management (DevOps) – DevZone (2025)</li>
                        <li>Front-End Development Training – UST (2022)</li>
                        <li>International Computer Driving License (ICDL) – UST (2021)</li>
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
    );
}