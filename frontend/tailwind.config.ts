import type {Config} from "tailwindcss";
import tailwindcss_animate from "tailwindcss-animate";


export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: 'var(--font-geist-sans)',
                mono: 'var(--font-geist-mono)'
            },
            colors: {
                background: {
                    DEFAULT: 'hsl(var(--background))',
                    light: 'hsl(var(--background-light))',
                    lighter: 'hsl(var(--background-lighter))',
                    lightest: 'hsl(var(--background-lightest))',
                },
                primary: {
                    darker: 'hsl(var(--primary-darker))',
                    dark: 'hsl(var(--primary-dark))',
                    DEFAULT: 'hsl(var(--primary))',
                    light: 'var(--primary-light)',
                    lighter: 'var(--primary-lighter)',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                color: {
                    DEFAULT: 'hsl(var(--color))',
                    light: 'hsl(var(--color-light))',
                    lighter: 'hsl(var(--color-lighter))',
                },
                foreground: {
                    DEFAULT: 'hsl(var(--foreground))',
                    dark: 'var(--foreground-dark)',
                    darker: 'var(--foreground-darker)',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    background: 'hsl(var(--popover-background))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            screens: {
                smartphone: '320px',
                tablet: '640px',
                notebook: '816px',
                laptop: '1316px',
                widescreen: '1656px',
                desktop: '1816px',
            },
        }
    },
    plugins: [tailwindcss_animate],
} satisfies Config;