import React, { useState } from 'react';
import App from './App';
import Preloader from './components/Preloader/Preloader';
// Update this import to point to the new Provider file
import { LanguageProvider } from './context/LanguageProvider';

export default function Root() {
    const [loaded, setLoaded] = useState(false);

    if (!loaded) {
        return <Preloader onLoaded={() => setLoaded(true)} />;
    }

    return (
        <LanguageProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </LanguageProvider>
    );
}