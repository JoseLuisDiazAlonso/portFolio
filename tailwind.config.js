/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'backgroundPrincipal': "url('/public/media/seguridad.png')",
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0,0,0,0.25)',
        md: '2px 2px 4px rgba(0,0,0,0.3)',
        lg: '3px 3px 6px rgba(0,0,0,0.4)',
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
        'vertical-lr': 'vertical-lr',
        'horizontal-tb': 'horizontal-tb',
      },
    },
  },
  plugins: [
    // Utilidades para textShadow
    function ({ addUtilities, theme }) {
      const newUtilities = {};
      const shadows = theme('textShadow');
      for (const key in shadows) {
        newUtilities[`.text-shadow-${key}`] = {
          textShadow: shadows[key],
        };
      }
      addUtilities(newUtilities);
    },

    // Utilidades para writing-mode
    function ({ addUtilities, theme }) {
      const modes = theme('writingMode');
      const newUtilities = {};
      for (const key in modes) {
        newUtilities[`.writing-${key}`] = {
          'writing-mode': modes[key],
        };
      }
      addUtilities(newUtilities);
    },
  ],
};
