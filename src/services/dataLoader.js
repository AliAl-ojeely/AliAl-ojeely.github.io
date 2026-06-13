// src/services/dataLoader.js
export async function fetchPortfolioData() {
    return [
        // ---- 1. Nexus Game Launcher ----
        {
            id: 1,
            title: 'Nexus Game Launcher',
            description:
                'A cross‑platform game library manager built with Electron.js. Features a static dashboard, local caching for Steam/RAWG/SteamGridDB APIs, integrated play‑session timer, statistics dashboard with charts (Chart.js), backup system, drag‑and‑drop reordering, auto game detector, and full keyboard shortcuts. Fully supports Arabic and English.',
            image: '/nexus-launcher-1.png',
            images: [
                '/nexus-launcher-1.png',
                '/nexus-launcher-2.png',
                '/nexus-launcher-3.png',
                '/nexus-launcher-4.png',
                '/nexus-launcher-5.png',
                '/nexus-launcher-6.png',
                '/nexus-launcher-7.png',
            ],
            technologies: ['Electron.js', 'Node.js', 'Chart.js', 'RAWG API', 'Steam API', 'GitHub Actions'],
            reason: 'I wanted a centralised hub for my game library with detailed playtime tracking and a beautiful UI.',
            githubLink: 'https://github.com/AliAl-ojeely/nexus-game-launcher',
        },

        // ---- 2. CMD Vault ----
        {
            id: 2,
            title: 'CMD Vault',
            description:
                'A cross‑platform command reference tool that works 100% offline. Displays 100+ terminal commands for Windows, Linux, and macOS with bilingual Arabic/English descriptions. Offers advanced sidebar navigation, favourites, copy‑to‑clipboard, and an OLED dark theme.',
            image: '/cmd-vault-1.png',
            images: [
                '/cmd-vault-1.png',
                '/cmd-vault-2.png',
                '/cmd-vault-3.png',
                '/cmd-vault-4.png',
            ],
            technologies: ['Electron.js', 'Node.js', 'GitHub Actions', 'Font Awesome'],
            reason: 'I needed quick offline access to useful commands in both Arabic and English.',
            githubLink: 'https://github.com/AliAl-ojeely/cmd-vault',
        },

        // ---- 3. TempCleaner ----
        {
            id: 3,
            title: 'TempCleaner (C#)',
            description:
                'A lightweight WPF utility that cleans temporary files, Windows update cache, DNS cache, prefetch, and the recycle bin. Features a "Pitch Black" OLED‑style UI and displays freed disk space after each clean‑up.',
            image: '/temp-cleaner.png',
            images: ['/temp-cleaner.png'],
            technologies: ['C#', '.NET 8', 'WPF'],
            reason: 'I wanted a one‑click tool to keep my system clean without manual effort.',
            githubLink: 'https://github.com/AliAl-ojeely/TempCleaner',
        },

        // ---- 4. Tic‑Tac‑Toe (Windows Forms) ----
        {
            id: 4,
            title: 'Tic‑Tac‑Toe',
            description:
                'A classic two‑player Tic‑Tac‑Toe desktop game with smart win/draw detection, score tracking, and a dark theme. Built to practice C# and Windows Forms event handling.',
            image: '/tic-tac-toe-1.png',
            images: ['/tic-tac-toe-1.png', '/tic-tac-toe-2.png'],
            technologies: ['C#', 'Windows Forms'],
            reason: 'I built this to strengthen my OOP skills and Windows Forms UI handling.',
            githubLink: 'https://github.com/AliAl-ojeely/tic-tac-toe-winforms',
        },

        // ---- 5. Bank System (OOP) ----
        {
            id: 5,
            title: 'Bank System (OOP)',
            description:
                'A comprehensive console‑based banking system that demonstrates all four pillars of OOP: encapsulation, inheritance, polymorphism, and abstraction. It includes client management, transactions (deposit/withdraw/transfer), user permissions, and activity logging.',
            image: null,
            images: [],
            technologies: ['C++', 'OOP'],
            reason: 'I developed this to apply real‑world OOP concepts learned in university.',
            githubLink: 'https://github.com/AliAl-ojeely/Bank_System_OOP',
        },

        // ---- 6. To‑Do List (C++ Active Record) ----
        {
            id: 6,
            title: 'To‑Do List (Active Record)',
            description:
                'A console task manager that implements the Active Record pattern. Each task (clsWork) loads and saves itself to a text file. Features full CRUD, dynamic table formatting, auto‑generated IDs, and an audit log.',
            image: null,
            images: [],
            technologies: ['C++', 'OOP', 'Active Record Pattern'],
            reason: 'I wanted to demonstrate mastery of C++ and advanced software architecture.',
            githubLink: 'https://github.com/AliAl-ojeely/ToDo-List',
        },

        // ---- 7. Rock Paper Scissors Game ----
        {
            id: 7,
            title: 'Rock Paper Scissors Game',
            description:
                'A console game where you play Rock‑Paper‑Scissors against the computer. It supports up to 10 rounds per match, gives colour‑coded feedback, and tracks wins/losses/draws.',
            image: null,
            images: [],
            technologies: ['C++'],
            reason: 'A quick project to practise conditional logic, loops, and randomisation.',
            githubLink: 'https://github.com/AliAl-ojeely/rock-paper-scissors-game',
        },

        // ---- 8. Math Questions Game ----
        {
            id: 8,
            title: 'Math Questions Game',
            description:
                'A console math quiz that generates random arithmetic problems with adjustable difficulty and operation type. It provides instant coloured feedback and a final pass/fail summary.',
            image: null,
            images: [],
            technologies: ['C++'],
            reason: 'I built it to help younger students practise mental math in a fun, interactive way.',
            githubLink: 'https://github.com/AliAl-ojeely/math-questions-game',
        },

        // ---- 9. UST Admin Dashboard ----
        {
            id: 9,
            title: 'UST Admin Dashboard',
            description:
                'A React.js admin panel built for the UST Community platform. It manages users, content moderation, and real‑time activity logs to keep the community safe.',
            image: null,
            images: [],
            technologies: ['React.js', 'JavaScript', 'Real‑time'],
            reason: 'I developed it to efficiently manage the university community platform.',
            githubLink: 'https://github.com/AliAl-ojeely/ust-admin-dashboard',
        },
    ];
}