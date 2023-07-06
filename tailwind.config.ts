import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#D3E065',
          50: '#FCFEEB',
        },
        dark: {
          500: '#2F3035',
        },
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      heading: ['Montserrat Alternates', 'sans-serif'],
    },
  },
  plugins: [forms, typography],
} satisfies Config;
