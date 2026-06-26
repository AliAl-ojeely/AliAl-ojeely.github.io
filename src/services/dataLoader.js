// src/services/dataLoader.js
export async function fetchPortfolioData() {
    return [
        // ---- 1. Nexus Game Launcher ----
        {
            id: 1,
            title: 'Nexus Game Launcher',
            description: `Overview: A comprehensive, cross-platform desktop application designed to unify fragmented PC game libraries into a single, highly customizable dashboard.

Core Features: 
• Advanced Library Management: Automatically detects installed games and allows for drag-and-drop reordering.
• Rich Metadata Integration: Pulls high-quality covers, descriptions, and metadata directly from the RAWG, Steam, and SteamGridDB APIs.
• Analytical Dashboard: Features an integrated playtime tracker that records session lengths, visualized through interactive, beautifully rendered Chart.js graphs.
• Accessibility & Localization: Fully bilingual, offering instant toggling between English and Arabic with complete Right-To-Left (RTL) UI support.

Technical Architecture: Built using Electron.js and Node.js to bridge web technologies with native desktop capabilities. It implements a robust local caching system for API data to ensure the launcher functions seamlessly offline. The application also features a secure local backup and restore utility, managing user data via the native file system, and utilizes GitHub Actions for automated build and release pipelines.`,
            image: '/nexus-launcher-1.webp',
            images: [
                '/nexus-launcher-1.webp',
                '/nexus-launcher-2.webp',
                '/nexus-launcher-3.webp',
                '/nexus-launcher-4.webp',
                '/nexus-launcher-5.webp',
                '/nexus-launcher-6.webp',
                '/nexus-launcher-7.webp',
            ],
            technologies: ['Electron.js', 'Node.js', 'Chart.js', 'RAWG API', 'Steam API', 'GitHub Actions'],
            reason: 'I wanted a centralised hub for my game library with detailed playtime tracking and a beautiful UI.',
            githubLink: 'https://github.com/AliAl-ojeely/nexus-game-launcher',
        },

        // ---- 2. CMD Vault ----
        {
            id: 2,
            title: 'CMD Vault',
            description: `Overview: An offline-first, highly optimized desktop reference tool built for developers and system administrators who need instant access to terminal syntax without relying on web searches.

Core Features:
• Extensive Command Database: Houses a curated, searchable index of over 100 essential CLI commands spanning Windows (CMD/PowerShell), Linux, and macOS.
• Rapid Workflow Tools: Includes instant "copy-to-clipboard" functionality, a favorites system for pinning frequently used commands, and lightning-fast search filtering.
• Bilingual Support: Every command is documented with detailed explanations in both Arabic and English.
• Developer-Focused UI: Features an OLED-optimized dark theme to reduce eye strain and an advanced sidebar for quick operating system switching.

Technical Architecture: Engineered with Electron.js and Node.js, ensuring cross-platform compatibility. The application relies entirely on a localized JSON data structure, guaranteeing zero latency and 100% offline functionality. CI/CD pipelines are managed via GitHub Actions for automated multi-OS executable generation.`,
            image: '/cmd-vault-1.webp',
            images: [
                '/cmd-vault-1.webp',
                '/cmd-vault-2.webp',
                '/cmd-vault-3.webp',
                '/cmd-vault-4.webp',
            ],
            technologies: ['Electron.js', 'Node.js', 'GitHub Actions', 'Font Awesome'],
            reason: 'I needed quick offline access to useful commands in both Arabic and English.',
            githubLink: 'https://github.com/AliAl-ojeely/cmd-vault',
        },

        // ---- 3. TempCleaner ----
        {
            id: 3,
            title: 'TempCleaner (C#)',
            description: `Overview: A targeted, high-performance Windows system utility designed to safely reclaim storage space and optimize OS responsiveness by purging redundant cache files.

Core Features:
• Deep System Cleaning: Safely targets and flushes deep system directories including Windows Update leftovers, DNS cache, Prefetch data, local temporary files, and the Recycle Bin.
• Real-Time Analytics: Dynamically calculates and displays the exact storage volume (in MB/GB) freed immediately after the clean-up execution.
• Minimalist Design: Wrapped in a sleek, "Pitch Black" UI that prioritizes user experience with a simple one-click execution model.

Technical Architecture: Developed natively for Windows using C# and the .NET 8 framework. The user interface is built with WPF (Windows Presentation Foundation) for hardware-accelerated rendering. The application leverages native Windows APIs and System.IO namespaces to execute administrative-level directory traversals and secure file deletions while protecting critical system processes.`,
            image: '/temp-cleaner.webp',
            images: ['/temp-cleaner.webp'],
            technologies: ['C#', '.NET 8', 'WPF'],
            reason: 'I wanted a one‑click tool to keep my system clean without manual effort.',
            githubLink: 'https://github.com/AliAl-ojeely/TempCleaner',
        },

        // ---- 4. Tic‑Tac‑Toe (Windows Forms) ----
        {
            id: 4,
            title: 'Tic‑Tac‑Toe',
            description: `Overview: A modernized, desktop-native implementation of the classic Tic-Tac-Toe game, featuring an intelligent game loop and a polished graphical interface.

Core Features:
• Smart Game Engine: Instantly calculates win states across all rows, columns, and diagonals, while accurately detecting gridlock draws.
• Session Tracking: Includes a persistent, on-screen scoreboard that tracks Player 1 and Player 2 victories across extended gameplay sessions.
• Responsive UI: Features active-turn indicators, hover effects on playable grids, and a custom dark theme that modernizes the classic Windows Forms look.

Technical Architecture: Built using C# and Windows Forms. The project heavily emphasizes event-driven programming, custom UI control manipulation, and strict 2D array logic for grid validation. It serves as a practical demonstration of object-oriented UI design and state management within the .NET ecosystem.`,
            image: '/tic-tac-toe-1.webp',
            images: ['/tic-tac-toe-1.webp', '/tic-tac-toe-2.webp'],
            technologies: ['C#', 'Windows Forms'],
            reason: 'I built this to strengthen my OOP skills and Windows Forms UI handling.',
            githubLink: 'https://github.com/AliAl-ojeely/tic-tac-toe-winforms',
        },

        // ---- 5. Bank System (OOP) ----
        {
            id: 5,
            title: 'Bank System (OOP)',
            description: `Overview: An enterprise-grade, console-based financial management system engineered from the ground up to rigorously demonstrate the four core pillars of Object-Oriented Programming.

Core Features:
• Comprehensive Account Management: Supports full client lifecycles, including account creation, modification, and deletion.
• Financial Transactions: Handles secure deposits, withdrawals, and complex inter-account balance transfers.
• Security & Auditing: Implements a Role-Based Access Control (RBAC) system separating standard users from administrators, coupled with an automated, tamper-proof activity logging system for all logins and transactions.

Technical Architecture: Written purely in standard C++. The architecture heavily utilizes Encapsulation (securing sensitive balance data), Inheritance (deriving specific user types from base Person classes), Polymorphism (overriding interface behaviors), and Abstraction (hiding complex file I/O operations). Data persistence is managed via secure, flat-text file databases.`,
            image: '/Bank System OOP (C++).webp',
            images: [],
            technologies: ['C++', 'OOP'],
            reason: 'I developed this to apply real‑world OOP concepts learned in university.',
            githubLink: 'https://github.com/AliAl-ojeely/Bank_System_OOP',
        },

        // ---- 6. To‑Do List (C++ Active Record) ----
        {
            id: 6,
            title: 'To‑Do List (Active Record)',
            description: `Overview: A highly structured, console-based task management application that transcends basic procedural programming by implementing professional software design patterns.

Core Features:
• Full CRUD Functionality: Users can seamlessly Create, Read, Update, and Delete tasks, with the system automatically handling unique ID generation.
• Advanced Console UI: Features a dynamically drawn, ASCII-formatted table system that keeps task data perfectly aligned and readable in the terminal.
• Audit Logging: Tracks the exact timestamps for task creation and completion, maintaining a historical record of user productivity.

Technical Architecture: Developed in C++ utilizing the "Active Record" architectural design pattern. In this system, the \`clsWork\` object encapsulates both the task data and the database access logic, allowing the object to save, update, or delete itself directly from the underlying text-file database. This demonstrates advanced structural planning and memory management.`,
            image: '/To-Do List (C++).webp',
            images: [],
            technologies: ['C++', 'OOP', 'Active Record Pattern'],
            reason: 'I wanted to demonstrate mastery of C++ and advanced software architecture.',
            githubLink: 'https://github.com/AliAl-ojeely/ToDo-List',
        },

        // ---- 7. Rock Paper Scissors Game ----
        {
            id: 7,
            title: 'Rock Paper Scissors Game',
            description: `Overview: An interactive, algorithmic console game that pits the user against an unpredictable, computer-controlled opponent in customizable match lengths.

Core Features:
• Dynamic Matchmaking: Users can configure matches to last anywhere from a quick single round to a grueling 10-round championship.
• Real-Time Feedback: The terminal outputs dynamic, color-coded text (e.g., green for a win, red for a loss) accompanied by native system sounds to elevate the standard console experience.
• Statistical Wrap-Up: Generates a detailed post-match summary screen calculating final win/loss ratios and crowning the ultimate champion.

Technical Architecture: Built in C++, the project focuses on precise control flow, algorithmic Random Number Generation (RNG) for the AI opponent's logic, and direct manipulation of the Windows console buffer for color and sound outputs.`,
            image: '/Rock Paper Scissors Game (C++).webp',
            images: [],
            technologies: ['C++'],
            reason: 'A quick project to practise conditional logic, loops, and randomisation.',
            githubLink: 'https://github.com/AliAl-ojeely/rock-paper-scissors-game',
        },

        // ---- 8. Math Questions Game ----
        {
            id: 8,
            title: 'Math Questions Game',
            description: `Overview: A highly customizable, educational training tool designed to procedurally generate arithmetic problems to test and improve the user's mental math speed.

Core Features:
• Procedural Generation: Dynamically creates unique math equations based on user-selected parameters, ensuring no two quizzes are exactly alike.
• Scalable Difficulty: Offers multiple difficulty tiers (Easy, Medium, Hard, Mix) and allows the user to isolate specific operations (Addition, Subtraction, Multiplication, Division).
• Instant Grading: Provides immediate visual feedback per question, cleanly handling invalid inputs, and concludes with a comprehensive Pass/Fail performance report detailing accuracy percentages.

Technical Architecture: Developed in C++, this application showcases mastery over complex nested loops, switch-case routing, mathematical algorithm generation, and robust input sanitization to prevent application crashes from unexpected user keystrokes.`,
            image: '/Math Questions Game (C++).webp',
            images: [],
            technologies: ['C++'],
            reason: 'I built it to help younger students practise mental math in a fun, interactive way.',
            githubLink: 'https://github.com/AliAl-ojeely/math-questions-game',
        },

        // ---- 9. UST Admin Dashboard ----
        {
            id: 9,
            title: 'UST Admin Dashboard',
            description: `Overview: A secure, high-performance web-based control panel engineered specifically for moderators of the UST Community platform to maintain platform integrity.

Core Features:
• Comprehensive User Management: Empowers administrators to assign roles, edit profile metadata, and enforce community guidelines via account suspension toggles.
• Content Moderation Queue: Features a streamlined interface for reviewing, approving, or flagging user-generated posts before they hit the main platform.
• Live Audit Trail: Deeply integrated with a real-time activity logging system that monitors user behavior, administrative actions, and overall platform health.

Technical Architecture: Architected entirely in React.js, focusing heavily on responsive component design, complex state management, and secure asynchronous API routing. The frontend is designed to efficiently parse and render large arrays of user data and live log streams without suffering performance bottlenecks.`,
            image: '/UST Admin Dashboard (React.js).webp',
            images: [],
            technologies: ['React.js', 'JavaScript', 'Real‑time'],
            reason: 'I developed it to efficiently manage the university community platform.',
            githubLink: 'https://github.com/AliAl-ojeely/ust-admin-dashboard',
        },

        // ---- 10. Windows Defender Blocker ----
    {
      id: 10,
      title: 'Windows Defender Blocker',
      description: `Overview: A lightweight Windows Forms application that gives users one‑click control over Windows Defender, using official Group Policy registry keys for safe, reversible changes.

Core Features:
• Disable Defender: Turns off Real‑Time Protection, Cloud‑delivered Protection, Automatic Sample Submission, and Tamper Protection (with a prompt guiding the user to manually disable Tamper Protection first).
• Enable Defender: Restores all settings to their default state instantly.
• Multi‑Language Support: Switch between English, Arabic, Russian, and French at runtime.
• Self‑Elevation: Automatically requests administrator privileges when launched.
• Direct Access: Opens the Windows Security Virus & Threat Protection settings page directly from the app.

Technical Architecture: Built with C# and .NET Framework 4.8 / Windows Forms. It modifies Group Policy registry keys (under HKLM\\Software\\Policies\\Microsoft\\Windows Defender) – the same method used by enterprise administrators – without deleting files or altering services. The UI follows KISS (Keep It Simple, Stupid) principles for a clean, straightforward experience.`,
      image: '/Windows Defender Blocker.webp',
      images: ['/Windows Defender Blocker.webp'],
      technologies: ['C#', '.NET Framework', 'Windows Forms'],
      reason: 'I wanted a simple, reversible tool to control Windows Defender without breaking the system.',
        githubLink: 'https://github.com/AliAl-ojeely/Windows-Defender-Blocker',
    },
        // ---- 11. Click2Key ----
        {
            id: 11,
            title: 'Click2Key',
            description: `Overview: A modern WPF desktop application that puts over 100 Windows keyboard shortcuts at your fingertips. Instead of memorizing complex key combinations, users can execute any shortcut with a single mouse click – optionally adding a countdown delay like the Windows Snipping Tool.

Core Features:
• 105+ Shortcuts: Covers file management (Ctrl+C, Ctrl+V), system tools (Win+E, Win+I), navigation, virtual desktops, gaming (Win+G, Win+Alt+R), and accessibility (Win+U, Win+Ctrl+O).
• Delay Timer: Choose 0–5 seconds of delay before the shortcut fires, giving you time to focus the target window.
• Bilingual UI: Full English and Arabic support – every button, tooltip, and context menu item is translated. Arabic text renders beautifully with the Cairo font.
• System Tray Integration: Minimize the app to the notification area; restore it with a double‑click. A right‑click context menu lets you Open, Toggle the tray icon, or Exit.
• Light/Dark Themes: Smooth gradient backgrounds with dynamic text and separator colors that switch instantly.
• Click Analytics: Tracks how many times each shortcut has been used, saved locally.
• Professional Installer: Built with Inno Setup – installs with a desktop shortcut and uninstaller.

Technical Architecture: Initially built with C# .NET Framework 4.8 / Windows Forms using custom UserControls inside a FlowLayoutPanel. Performance bottlenecks from hundreds of controls led to a complete architectural rewrite. The rendering engine now uses a single WPF UserControl (hosted in a WinForms ElementHost) with virtualized painting, cached resources, and a custom-themed ComboBox for the delay timer. Shortcut simulation uses the Win32 API (keybd_event). The solution also includes a CI/CD pipeline via GitHub Actions that compiles and packages the application.`,
            image: '/WPF-Main-App-Photo.webp',
            images: ['/WPF-Main-App-Photo.webp', '/main-app-photo.webp'],
            technologies: ['C#', '.NET Framework 4.8', 'WPF', 'Windows Forms', 'Win32 API', 'Inno Setup', 'GitHub Actions'],
            reason: 'I wanted to make Windows keyboard shortcuts accessible to everyone – especially users who struggle to remember complex key combinations or who need a simple, visual way to execute them.',
            githubLink: 'https://github.com/AliAl-ojeely/Click2Key',
        },
    ];
}