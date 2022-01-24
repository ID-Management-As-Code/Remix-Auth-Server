module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}"
    ],
    plugins: [],
    safelist: [
        {
            pattern: /(bg|border|text)-.+/,
            variants: ['lg', 'hover', 'focus', 'lg:hover'],
        }
    ],
    theme: {
        extend: {}
    }
}
