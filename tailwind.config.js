const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  theme: {
    debugScreens: { position: ['bottom', 'left'] },
    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px',
    },
    extend: {
      fontFamily: {
        sans: ['Bebas', ...defaultTheme.fontFamily.sans],
        bebas: ['Bebas Neue'],
        roboto: ['Roboto'],
        sarabun: ['Sarabun'],
      },
      colors: {
        'pan-gray': {
          1: '#212121',
          2: '#232323',
          3: '#6E6E6E',
          4: '#B2B2B2',
          5: '#FAFAFA',
        },
        'pan-red': {
          1: '#FF0000',
          2: '#9F0000',
        },
        'pan-rose': '#FF5151',
        'pan-yellow': '#FAAD14',
        'pan-green': '#52C41A',
      },
    },
  },
  plugins: [
    // require('tailwindcss-debug-screens'),
    // require('tailwindcss-textshadow'),
  ],
};
