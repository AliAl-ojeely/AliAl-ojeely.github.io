import { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

export default function Preloader({ onLoaded }) {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpacity(0);
            setTimeout(onLoaded, 500); // wait for fade out
        }, 1500);
        return () => clearTimeout(timer);
    }, [onLoaded]);

    return (
        <div className={styles.wrapper} style={{ opacity }}>
            <div className={styles.spinner}>
                <div className={styles.doubleBounce1} />
                <div className={styles.doubleBounce2} />
            </div>
            <p className={styles.text}>Ali Al‑Ojeely</p>
        </div>
    );
}