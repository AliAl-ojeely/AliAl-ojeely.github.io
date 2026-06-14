import React, { useState } from 'react';
import App from './App';
import Preloader from './components/Preloader/Preloader';

export default function Root() {
    const [loaded, setLoaded] = useState(false);

    if (!loaded) {
        return <Preloader onLoaded={() => setLoaded(true)} />;
    }

    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}