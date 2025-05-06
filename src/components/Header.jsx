import { useState } from 'react';

const getInitialTheme = () => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
    }

    const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches;

    return systemPrefersDark ? 'dark' : 'light';
};

// Set theme class and save to localStorage
function applyTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
}

export default function Header() {
    const [theme, setTheme] = useState(() => {
        const initialTheme = getInitialTheme();
        applyTheme(initialTheme);
        return initialTheme;
    });

    function toggleTheme() {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        applyTheme(newTheme);
        
    }

    return (
        <div className="flex justify-between">
            <h1 className="uppercase text-light-veryLightGray text-3xl font-bold tracking-[.8rem]">
                Todo
            </h1>

            <button
                className="w-6 h-6 border-none focus:outline-none rounded-full transition duration-300"
                aria-label={`Switch to ${
                    theme === 'dark' ? 'light' : 'dark'
                } mode`}
                onClick={toggleTheme}>
                <img
                    src={`/images/${
                        theme === 'dark' ? 'icon-sun' : 'icon-moon'
                    }.svg`}
                    alt=""
                    aria-hidden="true"
                    className="w-6 h-6 animate-pulse pointer-events-none"
                />
            </button>
        </div>
    );
}
