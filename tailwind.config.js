/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange-1': '#FF7A00',
        'orange-2': '#F45815',
        'blue-1': '#2253FF',
        'blue-2': '#12367B',
        'blue-3': '#EDF7FF',
        'brand-yellow': '#FFFA8B',
        'brand-grey-3': '#DCDCDC',
        'brand-grey-1': '#6C6C6C',
        'brand-green-1': '#37B04B',
        'brand-red': '#FF0000'
      },
      boxShadow: {
        'blue-shadow':
          '0 4px 6px -1px rgba(34, 83, 255, 0.1), 0 5px 5px -1px rgba(34, 83, 255, 0.06)'
      }
    }
  },
  plugins: []
}
