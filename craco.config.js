
// craco.config.js
module.exports = {
    style: {
        postcss: {
            plugins: [
                import('tailwindcss'),
                import('autoprefixer'),
            ],
        },
    },
};
