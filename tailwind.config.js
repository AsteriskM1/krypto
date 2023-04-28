/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cta-gradient': 'linear-gradient(276.11deg, rgba(160, 224, 225, 0.7) -6.07%, #6565C6 105.53%);',
        'black-gradient': 'linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61% );',
        'gradient01': 'linear-gradient(to right, #00bfff, #00ff00);'

      },
      colors: {
        'featuredBg': 'rgba(20, 22, 81, 0.6)',
      },
      screens: {
        'mobile': '431px',
        'smMobile': '321px',
      }
    },
  },
  plugins: [],
}
