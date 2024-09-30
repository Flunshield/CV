module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  theme: {
    screens: {
      xs: '384px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#0D1117',
        secondary: '#E3E8EF',
        tertiary: '#FFEDD5',
        error: '#de2916',
        red: '#e94662',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
