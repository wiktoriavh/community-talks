import type { Config } from 'tailwindcss';
import heropatterns from 'tailwindcss-hero-patterns';
import defaultTheme from 'tailwindcss/defaultTheme';

import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      typography: (theme: (path: string) => string | string[]) => ({
        DEFAULT: {
          css: {
            fontFamily: wrapArray(theme('fontFamily.heading')).join(', '),
          },
        },
      }),
      colors: {
        primary: {
          500: '#D3E065',
          50: '#FCFEEB',
        },
        dark: {
          500: '#2F3035',
          300: '#424557',
        },
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        heading: ['Montserrat Alternates', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [forms, heropatterns, typography],
} satisfies Config;

const wrapArray = <T>(value: T | T[]): T[] =>
  Array.isArray(value) ? value : [value];
