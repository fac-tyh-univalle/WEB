/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'main-bg-color': '#131517',
        'secondary-bg-color': '#1C2129',
        'main-text-color': '#F1F3F6', 
        'secondary-text-color': '#A0AEC0',
        'input-bg-color': '#2D3748',
      }
    },
  },
  plugins: [],
}

