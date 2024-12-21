/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      brand: {
        blueLight: '#d9e5ff',
        blue: '#2d62ff',
        blueDark: '#080331',
        pinkLight: '#ffaefe',
        pink: '#dd23bb',
        pinkDark: '#3c043b',
      },
      neutral: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        neutralLightest: '#eee',
        neutralLighter: '#ccc',
        neutralLight: '#aaa',
        neutral: '#666',
        neutralDark: '#444',
        neutralDarker: '#222',
        neutralDarkest: '#111',
      },
      system: {
        successGreen: '#cef5ca',
        successGreenDark: '#114e0b',
        warningYellow: '#fcf8d8',
        warningYellowDark: '#5e5515',
        errorRed: '#f8e4e4',
        errorRedDark: '#3b0b0b',
        focusState: '#2d62ff',
      },
    },
    // spacing: {},
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      md: ['1.125rem', '1.5rem'],
      lg: ['1.375rem', '1.75rem'],
      xl: ['2.125rem', '2.75rem'],
      hero: ['5.25rem', '6.5625rem'],
      h1: ['4.25rem', '5.3125rem'],
      h2: ['3.5rem', '4.375rem'],
      h3: ['2.75rem', '3.4375rem'],
      h4: ['2.25rem', '2.8125rem'],
      h5: ['1.75rem', '2.1875rem'],
      h6: ['1.375rem', '1.75rem'],
    },
    fontFamily: {
      fixelText: ['var(--font-fixel-text)'],
      fixelDisplay: ['var(--font-fixel-display)'],
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      black: '900',
    },
    // textUnderlineOffset: {},
    // blur: {},
    // backdropBlur: {},
    // boxShadow: {},
    // outlineOffset: {},
    // outlineWidth: {},
    // ringOffsetWidth: {},
    // ringWidth: {},
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default tailwindConfig;
