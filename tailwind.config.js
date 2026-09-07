/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0A0C',
        ink: '#141417',
        mist: '#9A98A3',
        paper: '#F2F1F5',
        pulse: '#FF5A36',
        thread: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        eq1: {
          '0%, 100%': { height: '30%' },
          '50%': { height: '90%' },
        },
        eq2: {
          '0%, 100%': { height: '60%' },
          '50%': { height: '20%' },
        },
        eq3: {
          '0%, 100%': { height: '40%' },
          '50%': { height: '100%' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'art-in': {
          from: { opacity: '0', transform: 'scale(1.04)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        eq1: 'eq1 0.9s ease-in-out infinite',
        eq2: 'eq2 1.1s ease-in-out infinite',
        eq3: 'eq3 0.75s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'art-in': 'art-in 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-dot': 'pulse-dot 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
