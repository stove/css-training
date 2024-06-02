/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'card-apple': '#CC1918',
        'card-lemon': '#FDFF8F',
        'card-berry': '#FF2557',
        'card-orange': '#FFBA36',
      }
    },
  },
  plugins: [],
  mode: 'jit',
    purge: {
        enabled: true,
        content: [
          './public/**/*.html',
          './src/**/*.{js,jsx,ts,tsx,vue}',
        ],
    },
}

