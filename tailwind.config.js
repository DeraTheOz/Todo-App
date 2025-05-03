/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    blue: 'var(--bright-blue)',
                    check: 'var(--check-bg)'
                },
                light: {
                    veryLightGray: 'var(--very-light-gray)',
                    grayishBlue: 'var(--very-light-grayish-blue)',
                    lightGrayishBlue: 'var(--light-grayish-blue)',
                    darkGrayishBlue: 'var(--dark-grayish-blue)',
                    veryDarkGrayishBlue: 'var(--very-dark-grayish-blue)'
                },
                dark: {
                    veryDarkBlue: 'var(--very-dark-blue)',
                    desaturatedBlue: 'var(--very-dark-desaturated-blue)',
                    lightGrayishBlue: 'var(--light-grayish-blue)',
                    lightGrayishBlueHover: 'var(--light-grayish-blue-hover)',
                    darkGrayishBlue: 'var(--dark-grayish-blue)',
                    veryDarkGrayishBlue1: 'var(--very-dark-grayish-blue-1)',
                    veryDarkGrayishBlue2: 'var(--very-dark-grayish-blue-2)'
                }
            },
            fontFamily: {
                josefinsans: ["'Josefin Sans'", 'sans-serif']
            },
            backgroundImage: {
                'desktop-light': "url('/images/bg-desktop-light.jpg')",
                'desktop-dark': "url('/images/bg-desktop-dark.jpg')",
                'mobile-light': "url('/images/bg-mobile-light.jpg')",
                'mobile-dark': "url('/images/bg-mobile-dark.jpg')"
            }
        }
    },
    plugins: []
};
