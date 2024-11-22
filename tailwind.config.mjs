/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#000000',
            accent: '#007AFF',
            danger: '#FF3B30',
          }
        },
        fontFamily: {
          sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        },
        typography: {
          DEFAULT: {
            css: {
              maxWidth: '65ch',
              color: 'var(--tw-prose-body)',
              '[class~="lead"]': {
                color: 'var(--tw-prose-lead)'
              },
              a: {
                color: 'var(--tw-prose-links)',
                textDecoration: 'underline',
                fontWeight: '500'
              },
              strong: {
                color: 'var(--tw-prose-bold)',
                fontWeight: '600'
              },
              'ul > li': {
                paddingLeft: '1.5em'
              },
              'ol > li': {
                paddingLeft: '1.5em'
              },
              'h1, h2, h3': {
                color: 'var(--tw-prose-headings)',
                fontWeight: '700'
              },
            }
          }
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }