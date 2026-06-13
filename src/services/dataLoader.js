export async function fetchPortfolioData() {
    // Simulate API call – your actual projects
    return [
        {
            id: 1,
            title: 'Nexus Game Launcher',
            description:
                'A game library manager built with Electron.js and Node.js. Features a static dashboard, local caching for Steam API data, and an integrated play session timer.',
            image: 'https://via.placeholder.com/600x400?text=Nexus+Launcher',
            technologies: ['Electron.js', 'Node.js', 'Steam API'],
        },
        {
            id: 2,
            title: 'CMD Vault',
            description:
                'Cross-platform command reference tool with Arabic & English UI. Works fully offline using local JavaScript data structures. Automated builds via GitHub Actions.',
            image: 'https://via.placeholder.com/600x400?text=CMD+Vault',
            technologies: ['Electron.js', 'Node.js', 'GitHub Actions'],
        },
        {
            id: 3,
            title: 'TempCleaner (C#)',
            description:
                'System utility to automate removal of temporary files and Windows update cache. Optimises storage through efficient file I/O operations.',
            image: 'https://via.placeholder.com/600x400?text=TempCleaner',
            technologies: ['C#', '.NET', 'Windows'],
        },
        {
            id: 4,
            title: 'UST Community - Admin Dashboard',
            description:
                'Full-featured admin panel using React.js for content moderation, user management, and real-time activity logs.',
            image: 'https://via.placeholder.com/600x400?text=Admin+Dashboard',
            technologies: ['React.js', 'JavaScript', 'Real-time'],
        },
    ];
}