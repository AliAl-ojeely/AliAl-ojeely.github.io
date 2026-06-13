import { useEffect, useState } from 'react';
import PortfolioItem from '../../models/PortfolioItem';
import { fetchPortfolioData } from '../../services/dataLoader';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import styles from './Projects.module.css';

export default function Projects() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const data = await fetchPortfolioData();
            await PortfolioItem.loadFromSource(data);   // Seeds the in‑memory store
            setItems(PortfolioItem.findAll());
            setLoading(false);
        }
        load();
    }, []);

    if (loading) {
        return <p className={styles.loading}>Loading projects...</p>;
    }

    return (
        <section className={styles.projects}>
            <h2>My Projects</h2>
            <div className={styles.grid}>
                {items.map((item) => (
                    <PortfolioCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}