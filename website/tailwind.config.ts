import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                ink: {
                    50:  '#faf7f0',
                    100: '#f4efe2',
                    200: '#e8dfc8',
                    500: '#7a7468',
                    700: '#302e29',
                    900: '#12110f',
                },
                brass: {
                    400: '#c8a16a',
                    500: '#b08d57',
                    600: '#8a6e3f',
                },
            },
            fontFamily: {
                serif: ['"Source Serif 4"', 'Georgia', 'Cambria', 'serif'],
                sans:  ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;
