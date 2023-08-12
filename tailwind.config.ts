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
          600: '#B9C658',
          500: '#D3E065',
          50: '#FCFEEB',
        },
        dark: {
          500: '#2F3035',
          300: '#424557',
        },
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      heading: ['Montserrat Alternates', 'sans-serif'],
    },
    backgroundImage: {
      'circles-full': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1500 1500' width='1000' height='1000'%3E%3Cg stroke-width='15' id='circle-scatter' fill='none' stroke='%23D3E065'%3E%3Ccircle r='109' cx='810' cy='674'%3E%3C/circle%3E%3Ccircle r='40' cx='1105' cy='1350'%3E%3C/circle%3E%3Ccircle r='47' cx='839' cy='997'%3E%3C/circle%3E%3Ccircle r='57' cx='1344' cy='1308'%3E%3C/circle%3E%3Ccircle r='70' cx='24' cy='1232'%3E%3C/circle%3E%3Ccircle r='95' cx='1459' cy='69'%3E%3C/circle%3E%3Ccircle r='74' cx='458' cy='686'%3E%3C/circle%3E%3Ccircle r='100' cx='1120' cy='559'%3E%3C/circle%3E%3Ccircle r='74' cx='1395' cy='969'%3E%3C/circle%3E%3Ccircle r='77' cx='419' cy='1330'%3E%3C/circle%3E%3Ccircle r='99' cx='1406' cy='397'%3E%3C/circle%3E%3Ccircle r='68' cx='730' cy='305'%3E%3C/circle%3E%3Ccircle r='96' cx='1127' cy='876'%3E%3C/circle%3E%3Ccircle r='90' cx='320' cy='909'%3E%3C/circle%3E%3Ccircle r='98' cx='740' cy='1196'%3E%3C/circle%3E%3Ccircle r='97' cx='636' cy='80'%3E%3C/circle%3E%3Ccircle r='51' cx='554' cy='974'%3E%3C/circle%3E%3Ccircle r='46' cx='191' cy='504'%3E%3C/circle%3E%3Ccircle r='54' cx='151' cy='128'%3E%3C/circle%3E%3Ccircle r='57' cx='876' cy='1481'%3E%3C/circle%3E%3Ccircle r='77' cx='164' cy='1468'%3E%3C/circle%3E%3Ccircle r='86' cx='1052' cy='263'%3E%3C/circle%3E%3Ccircle r='41' cx='1461' cy='614'%3E%3C/circle%3E%3Ccircle r='72' cx='434' cy='220'%3E%3C/circle%3E%3Ccircle r='67' cx='1098' cy='36'%3E%3C/circle%3E%3Ccircle r='106' cx='1267' cy='189'%3E%3C/circle%3E%3Ccircle r='74' cx='98' cy='907'%3E%3C/circle%3E%3Ccircle r='92' cx='226' cy='1113'%3E%3C/circle%3E%3Ccircle r='88' cx='1126' cy='1127'%3E%3C/circle%3E%3Ccircle r='83' cx='864' cy='12'%3E%3C/circle%3E%3Ccircle r='101' cx='617' cy='1482'%3E%3C/circle%3E%3Ccircle r='89' cx='507' cy='449'%3E%3C/circle%3E%3Ccircle r='49' cx='4' cy='679'%3E%3C/circle%3E%3Ccircle r='76' cx='42' cy='329'%3E%3C/circle%3E%3Ccircle r='106' cx='380' cy='2'%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")`,
      'circles-25': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1500 1500' width='1000' height='1000'%3E%3Cg stroke-width='15' id='circle-scatter' fill='none' stroke='rgba(211, 224, 101, 0.25)'%3E%3Ccircle r='109' cx='810' cy='674'%3E%3C/circle%3E%3Ccircle r='40' cx='1105' cy='1350'%3E%3C/circle%3E%3Ccircle r='47' cx='839' cy='997'%3E%3C/circle%3E%3Ccircle r='57' cx='1344' cy='1308'%3E%3C/circle%3E%3Ccircle r='70' cx='24' cy='1232'%3E%3C/circle%3E%3Ccircle r='95' cx='1459' cy='69'%3E%3C/circle%3E%3Ccircle r='74' cx='458' cy='686'%3E%3C/circle%3E%3Ccircle r='100' cx='1120' cy='559'%3E%3C/circle%3E%3Ccircle r='74' cx='1395' cy='969'%3E%3C/circle%3E%3Ccircle r='77' cx='419' cy='1330'%3E%3C/circle%3E%3Ccircle r='99' cx='1406' cy='397'%3E%3C/circle%3E%3Ccircle r='68' cx='730' cy='305'%3E%3C/circle%3E%3Ccircle r='96' cx='1127' cy='876'%3E%3C/circle%3E%3Ccircle r='90' cx='320' cy='909'%3E%3C/circle%3E%3Ccircle r='98' cx='740' cy='1196'%3E%3C/circle%3E%3Ccircle r='97' cx='636' cy='80'%3E%3C/circle%3E%3Ccircle r='51' cx='554' cy='974'%3E%3C/circle%3E%3Ccircle r='46' cx='191' cy='504'%3E%3C/circle%3E%3Ccircle r='54' cx='151' cy='128'%3E%3C/circle%3E%3Ccircle r='57' cx='876' cy='1481'%3E%3C/circle%3E%3Ccircle r='77' cx='164' cy='1468'%3E%3C/circle%3E%3Ccircle r='86' cx='1052' cy='263'%3E%3C/circle%3E%3Ccircle r='41' cx='1461' cy='614'%3E%3C/circle%3E%3Ccircle r='72' cx='434' cy='220'%3E%3C/circle%3E%3Ccircle r='67' cx='1098' cy='36'%3E%3C/circle%3E%3Ccircle r='106' cx='1267' cy='189'%3E%3C/circle%3E%3Ccircle r='74' cx='98' cy='907'%3E%3C/circle%3E%3Ccircle r='92' cx='226' cy='1113'%3E%3C/circle%3E%3Ccircle r='88' cx='1126' cy='1127'%3E%3C/circle%3E%3Ccircle r='83' cx='864' cy='12'%3E%3C/circle%3E%3Ccircle r='101' cx='617' cy='1482'%3E%3C/circle%3E%3Ccircle r='89' cx='507' cy='449'%3E%3C/circle%3E%3Ccircle r='49' cx='4' cy='679'%3E%3C/circle%3E%3Ccircle r='76' cx='42' cy='329'%3E%3C/circle%3E%3Ccircle r='106' cx='380' cy='2'%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")`,
    },
  },
  plugins: [forms, typography],
} satisfies Config;
