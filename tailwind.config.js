module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'ecru': '#CFC291',
        'camel': '#b99768',
        'ultramarine': '#303d6e',
        'moss': '#54612C',
        'jungle': '#1C1F15',
        'platinum': '#EDEAE6',
        'asphalt': "#484848",
        'black': '#0F0F0F',
        'snow': '#f6f6f6',
      },
      fontFamily: {
        PlayfairDisplay: ['"Playfair Display"', 'serif'],
        Sofia: ['"Sofia Pro"', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}