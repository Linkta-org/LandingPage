import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // darkMode: 'selector', // enable this for manually toggling dark mode
  theme: {
    screens: {
      // defaults from https://tailwindcss.com/docs/theme
      sm: '431px', // 430px is the width of the iPhone 14 Pro Max
      // We currently have web and mobile breakpoints
      // md: '768px',
      // lg: '976px',
      // xl: '1440px',
    },
    fontFamily: {
      sans: ['Inter, sans-serif'],
      serif: ['EB Garamond'],
    },
    extend: {
      colors: {
        light: {
          primary: '#2B3C47',
          secondary: '#F2B034',
          tertiary: '#43A677',
          accent: '#F19A2E',
          background: '#F9FCFC',
          text: '#2B3C47',
          muted: '#A8AFB4',
          link: '#91D9BF',
          border: '#3D5B50',
          placeholder: '#D9D9D9',
          hover: '#307654',
          active: '#3D976C',
          error: '#E4190C',
          success: '#43A677',
          warning: '#D9580D',
          info: '#D9D9D9',
          transparent: 'transparent',
          current: 'currentColor',
          black: '#2C1D15',
          white: '#000000',
        },
        dark: {
          primary: '#013b3f',
          secondary: '#096766',
          tertiary: '#012c2f',
          accent: '#ffa51b',
          background: '#013B3F',
          text: '#EAF0EB',
          muted: '#e6ebec',
          link: '',
          border: '#938F99',
          placeholder: '',
          icon: '',
          hover: '#013539',
          active: '#012f32',
          error: '',
          success: '',
          warning: '#d9580d',
          info: '',
          transparent: 'transparent',
          current: 'currentColor',
          black: '#2c1d15',
          white: '#fdfefe',
        },
      },
    },
  },
  plugins: [],
};
export default config;
