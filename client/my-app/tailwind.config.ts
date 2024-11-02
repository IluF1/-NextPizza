import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                blue: '#F9F9F9',
                gray: '#C0C0C0',
                orange: '#FE5F00',
                lightOrange: '#fff7ee',
            },
            padding: {
                header: '20px 50px 20px 50px',
            },
            boxShadow: {
                category: '0px 4px 4px 0px #0000000D',
            },
            height: {
                80: '80dvh',
            },
            width: {
                1000: '1000px',
            },
        },
    },
    plugins: [],
}
export default config
