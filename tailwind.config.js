/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        keyframes: {
          'ease-opacity-t-b': {
            '0%': { opacity: '0', transform: 'translateY(-100%)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        animation: {
          'ease-opacity-t-b': 'ease-opacity-t-b 0.5s ease',
        },
        'kirby': {
          '50': '#fef1f9',
          '100': '#fee5f5',
          '200': '#ffcbed',
          '300': '#ffa1db',
          '400': '#ff6ac2',
          '500': '#fa3aa6',
          '600': '#ea1883',
          '700': '#cc0a68',
          '800': '#a80c56',
          '900': '#8c0f49',
          '950': '#560129',
        },

        'coffee': {
          '50': '#f8f6ee',
          '100': '#efead2',
          '200': '#e0d5a8',
          '300': '#cdb977',
          '400': '#bea051',
          '500': '#af8d43',
          '600': '#967138',
          '700': '#79552f',
          '800': '#63452c',
          '900': '#583d2b',
          '950': '#322016',
        },


        'shark': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#212121',
        },

        'coal': {
          '50': '#f6f5f5',
          '100': '#e7e6e6',
          '200': '#d2cfd0',
          '300': '#b2aeaf',
          '400': '#8b8586',
          '500': '#706a6b',
          '600': '#605a5b',
          '700': '#514d4d',
          '800': '#464445',
          '900': '#3e3b3b',
          '950': '#161515',
        },

      }

    },
  },
  plugins: [],
}

