// components/ThemeToggle.js (dùng next-themes)
"use client";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-white duration-200 link-underline"
        >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
}
