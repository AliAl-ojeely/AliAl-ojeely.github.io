import { useState, useEffect, useCallback } from 'react';
import styles from './ImageModal.module.css';

export default function ImageModal({ images, initialIndex = 0, onClose }) {
    const [current, setCurrent] = useState(initialIndex);
    const [playing, setPlaying] = useState(false);

    const total = images.length;

    const goNext = useCallback(() => {
        setCurrent((prev) => (prev + 1) % total);
    }, [total]);

    const goPrev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + total) % total);
    }, [total]);

    // Auto‑play every 3 seconds
    useEffect(() => {
        if (!playing || total <= 1) return;
        const timer = setInterval(goNext, 3000);
        return () => clearInterval(timer);
    }, [playing, goNext, total]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'ArrowRight') goNext();
            else if (e.key === 'ArrowLeft') goPrev();
            else if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [goNext, goPrev, onClose]);

    if (!images.length) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button className={styles.close} onClick={onClose}>✕</button>

                {/* Image */}
                <img
                    src={images[current]}
                    alt={`Screenshot ${current + 1}`}
                    className={styles.image}
                />

                {/* Arrows */}
                {total > 1 && (
                    <>
                        <button className={styles.arrowLeft} onClick={goPrev}>‹</button>
                        <button className={styles.arrowRight} onClick={goNext}>›</button>
                    </>
                )}

                {/* Controls bar */}
                <div className={styles.controls}>
                    {/* Play / Pause */}
                    {total > 1 && (
                        <button
                            className={styles.playBtn}
                            onClick={() => setPlaying(!playing)}
                        >
                            {playing ? '⏸' : '▶'}
                        </button>
                    )}
                    <span className={styles.counter}>
                        {current + 1} / {total}
                    </span>
                </div>
            </div>
        </div>
    );
}