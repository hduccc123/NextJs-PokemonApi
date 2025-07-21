/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Bắt buộc phải có
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            fontFamily: {
                sans: ['var(--font-sans)'],
                mono: ['var(--font-mono)'],
            },
        },
    },
    plugins: [],
}