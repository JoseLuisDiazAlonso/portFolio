/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    backgroundImage: {
      'backgroundPrincipal': "url('/public/media/ImagenFondo.png')"
    },
    textShadow: {
      sm: '1px 1px 2px rgba(0,0,0,0.25)',
      md: '2px 2px 4px rgba(0,0,0,0.3)',
      lg: '3px 3px 6px rgba(0,0,0,0.4)',
    }
  },
};
export const plugins = [
  function ({addUtilities, theme}) {
    const newUtilities = {}
    const shadows = theme('textShadow')
    for (const key in shadows) {
      newUtilities[`.text-shadow-${key}`] = {
        textShadow: shadows[key],
      }
    }
    addUtilities(newUtilities)
  }
];
