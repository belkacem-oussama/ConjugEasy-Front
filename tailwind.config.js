/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
    },
    colors: {
        primary: 'rgb(255,162,132)',
        secondary: 'rgb(238,239,239)',
        black: '#000000',
    },
    fontFamily: {
        BreeSerif: ['Bree Serif', 'serif'],
    },
}
