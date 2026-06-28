import { useState } from 'react';
import { filterByTechnology, searchItems } from '../../utils/searchHelpers';
import { useLanguage } from '../../hooks/useLanguage';
import styles from './ProjectFilter.module.css';

export default function ProjectFilter({ items, onFilter }) {
    const { t } = useLanguage();
    const [query, setQuery] = useState('');
    const [tech, setTech] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'query') setQuery(value);
        if (name === 'tech') setTech(value);
    };

    const applyFilter = () => {
        let filtered = items;
        if (query) filtered = searchItems(filtered, query);
        if (tech) filtered = filterByTechnology(filtered, tech);
        onFilter(filtered);
    };

    const clearFilter = () => {
        setQuery('');
        setTech('');
        onFilter(items);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') applyFilter();
    };

    return (
        <div className={styles.filterBar}>
            <input
                type="text"
                placeholder={t('filterPlaceholderName')}
                name="query"
                value={query}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={styles.input}
            />
            <input
                type="text"
                placeholder={t('filterPlaceholderTech')}
                name="tech"
                value={tech}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={styles.input}
            />
            <button onClick={applyFilter} className={styles.filterBtn}>
                {t('apply')}
            </button>
            <button onClick={clearFilter} className={styles.clearBtn}>
                {t('clear')}
            </button>
        </div>
    );
}