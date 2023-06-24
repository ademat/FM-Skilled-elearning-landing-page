/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,vue}'],
    theme: {
        colors: {
            'light-blue': '#F0F1FF',
            blue: '#666CA3',
            'dark-blue': '#13183F',
            gray: '#83869A',
            'dark-pink': '#F74780',
            pink: '#FFA7C3',
            white: '#FFFFFF'
        },
        fontFamily: {
            sans: ['Plus Jakarta Sans', 'sans-serif']
        },
        fontSize: {
            bs: ['16px', '28px'],
            bm: ['18px', '28px'],
            hs: ['24px', '28px'],
            hm: ['32px', '40px'],
            hl: ['40px', '51px'],
            hxl: ['56px', '70px']
        }
    },
    plugins: []
}
