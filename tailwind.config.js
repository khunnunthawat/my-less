const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    important: true,
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                sans: ['Bebas', ...defaultTheme.fontFamily.sans],
                bebas: ['Bebas Neue', 'Roboto ital'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};