/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#2A201C',
        ink: '#382A22',
        ivory: '#FBF1DF',
        champagne: '#EED9B9',
        gold: {
          50: '#FFF9ED',
          100: '#F9EACC',
          200: '#EBCF9A',
          300: '#D8B26C',
          400: '#C59A53',
          500: '#B98D47',
          600: '#8E6533',
          700: '#674628',
        },
        emerald: '#6A4938',
        navy: '#53362C',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(110deg, #8E6533 0%, #E8C989 47%, #B18445 100%)',
        'gold-shine': 'linear-gradient(115deg, #8E6533 0%, #F8E6B9 35%, #C49A56 65%, #674628 100%)',
        'hero-overlay': 'linear-gradient(90deg, rgba(42,32,28,.87) 0%, rgba(42,32,28,.58) 46%, rgba(42,32,28,.18) 100%)',
        'soft-radial': 'radial-gradient(circle at 50% 0%, rgba(202,156,89,.2), transparent 46%)',
      },
      boxShadow: {
        luxury: '0 22px 55px -22px rgba(61, 40, 24, .24)',
        gold: '0 16px 38px -18px rgba(185, 141, 71, .5)',
      },
      letterSpacing: {
        luxe: '.18em',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 5s linear infinite',
        marquee: 'marquee 28s linear infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
