import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <header className={styles.header}>
            <NavLink to="/" className={styles.logo}>
                Ali Al-Ojeely
            </NavLink>
            <nav className={styles.nav}>
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) => (isActive ? styles.active : '')}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? styles.active : '')}
                >
                    About
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) => (isActive ? styles.active : '')}
                >
                    Projects
                </NavLink>
            </nav>
        </header>
    );
}