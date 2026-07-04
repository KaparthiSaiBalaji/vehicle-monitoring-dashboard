/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#0B0F11',
          900: '#0F1417',
          800: '#171D21',
          700: '#212930',
          600: '#2C363E',
        },
        mist: {
          400: '#7C8A92',
          200: '#C3CDD1',
          100: '#E8EDEF',
        },
        amber: {
          400: '#F2A73B',
          500: '#E0932A',
        },
        cyan: {
          400: '#3FD0C9',
          500: '#2BB5AE',
        },
        danger: {
          400: '#E1533D',
          500: '#C7432F',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        panel: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        scan: 'linear-gradient(180deg, transparent 0%, rgba(63,208,201,0.08) 50%, transparent 100%)',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.35 },
        },
      },
      animation: {
        scanline: 'scanline 3.2s linear infinite',
        blink: 'blink 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
