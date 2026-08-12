/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        riglab: {
          black: '#050508',
          dark: '#0a0e17',
          surface: '#0f1520',
          card: '#121a28',
          border: '#1a2740',
          blue: '#0088ff',
          'blue-light': '#00a8ff',
          'blue-glow': '#0066cc',
          silver: '#c8d0dc',
          muted: '#8899aa',
        },
      },
      fontFamily: {
        display: ['Rajdhani', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 136, 255, 0.15)',
        'glow-lg': '0 0 40px rgba(0, 136, 255, 0.2)',
        card: '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 136, 255, 0.12) 0%, transparent 60%)',
        'section-gradient':
          'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0, 136, 255, 0.06) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}
