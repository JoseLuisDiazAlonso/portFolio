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
  },
};
export const plugins = [];
