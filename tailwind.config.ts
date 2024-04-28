import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm:'480px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Inter, sans-serif'],
      serif: ['EB Garamond', 'Garamond', 'serif'],
    },
    container:{
      padding:{
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '1rem',
        xl: '0rem',
      },
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
          white: '#FDFEFE',
        },
        dark: {
          primary: '#013B3F',
          secondary: '#096766',
          tertiary: '#012C2F',
          accent: '#FFA51B',
          background: '#013B3F',
          text: '#EAF0EB',
          muted: '#E6EBEC',
          link: '#D9D9D9',
          border: '#938F99',
          placeholder: '#D9D9D9',
          hover: '#013539',
          active: '#012F32',
          error: '#D9D9D9',
          success: '#D9D9D9',
          warning: '#D9580D',
          info: '#D9D9D9',
          transparent: 'transparent',
          current: 'currentColor',
          black: '#2C1D15',
          white: '#FDFEFE',
        },
      },
    },
  },
  plugins: [],
};
export default config;
