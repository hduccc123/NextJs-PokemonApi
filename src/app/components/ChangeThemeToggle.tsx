// components/ChangeThemeToggle.tsx
'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Kiểm tra theme từ localStorage hoặc hệ thống
        const savedTheme = localStorage.getItem('theme');
        const isDark = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;

        setDarkMode(isDark);
        document.documentElement.classList.toggle('dark', isDark);
    }, []);

    const toggleTheme = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', newDarkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-white duration-200 link-underline color: var(--foreground)"
        >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
    );
}