/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Calm crochet-inspired palette
        babyPink: {
          50: '#fdf7f6',
          100: '#fce8e6',
          200: '#f8d0cc',
          300: '#f4b8b2',
          400: '#f0a097',
          500: '#ec887d',
          600: '#d97068',
          700: '#c55953',
          800: '#b1423e',
          900: '#9d2b29',
        },
        babyPurple: {
          50: '#faf7fc',
          100: '#f4eef8',
          200: '#e8ddf0',
          300: '#dccce8',
          400: '#d0bbe0',
          500: '#c4aad8',
          600: '#b19acc',
          700: '#9d89c0',
          800: '#8978b4',
          900: '#7568a8',
        },
        babyBlue: {
          50: '#f7fbfc',
          100: '#eef7f9',
          200: '#ddeef3',
          300: '#cce5ed',
          400: '#bbdce7',
          500: '#aad3e1',
          600: '#99cadb',
          700: '#88c1d5',
          800: '#77b8cf',
          900: '#66afc9',
        },
        beige: {
          50: '#fefaf7',
          100: '#fdf3ed',
          200: '#fce6d9',
          300: '#fbd9c5',
          400: '#f9ccb1',
          500: '#f8bf9d',
          600: '#f5b089',
          700: '#f2a175',
          800: '#ef9261',
          900: '#ec834d',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        cute: ['Caveat', 'cursive'],
        hand: ['Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

