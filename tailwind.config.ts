import type { Config } from 'tailwindcss';

export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-body': '#141414',
        'background-primary': '#171717',
        'background-secondary': '#212121',
        'text-primary': '#cccccc',
        'accent-primary': '#404040',
        'brand-primary': '#00cc33',
        'brand-secondary': '#663399',
      },
      boxShadow: {
        'shadow-primary': '0 0 10px rgba(102, 51, 153, 0.5)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0.5rem',
          sm: '1rem',
          md: '1.5rem',
          lg: '2rem',
          xl: '3rem',
        },
        screens: {
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
