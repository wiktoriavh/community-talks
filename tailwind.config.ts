import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      typography: (theme: (styleName: string) => any) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.primary.500'),
              fontFamily: theme('fontFamily.heading'),
              fontWeight: theme('fontWeight.extrabold'),
              fontSize: theme('fontSize.4xl'),
            },
            h2: {
              color: theme('colors.white'),
              fontFamily: theme('fontFamily.heading'),
              fontWeight: theme('fontWeight.extrabold'),
              fontSize: theme('fontSize.3xl'),
            },
            h3: {
              color: theme('colors.white'),
              fontFamily: theme('fontFamily.heading'),
              fontWeight: theme('fontWeight.extrabold'),
              fontSize: theme('fontSize.2xl'),
            },
            h4: {
              color: theme('colors.white'),
              fontFamily: theme('fontFamily.heading'),
              fontWeight: theme('fontWeight.extrabold'),
              fontSize: theme('fontSize.xl'),
            },
            h5: {
              color: theme('colors.white'),
              fontFamily: theme('fontFamily.heading'),
              fontWeight: theme('fontWeight.bold'),
              fontSize: theme('fontSize.xl'),
            },
            h6: {
              color: theme('colors.white'),
              fontFamily: theme('fontFamily.heading'),
              fontWeight: theme('fontWeight.semibold'),
              fontSize: theme('fontSize.xl'),
            },
            p: {
              color: theme('colors.white'),
              fontFamily: theme('fontFamily.sans'),
            },
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
