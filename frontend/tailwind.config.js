/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "login-pattern": "url('/bg-login.jpg')",
        "hero-search-pattern": "url('/Ploy1.jpg')",
        "white-pattern": "url('/white-pattern.jpg')",
        "purple-bg": "radial-gradient(135.6% 135.6% at 50% 0%, #000 5.6%, rgba(134, 56, 229, 0.80) 100%)"
      },

      colors: {
        
        "navbar-dark": "#E6E6E6",
        "navbar-username": "#181818",
        "navbar-user-frame": "#0373AE",
        "navbar-user-views": "#747474",
        "navbar-search-placeholder": "#B3B3B3",
        "footer": "#F5F5F5",
        "light-white": "#FAFAFA", 
        "light-border": "#EEE",
        "social-sign": "#616161",
        "sign-button": "#212121", 
        "grey-button-light": "#F2F2F2",
        "text-blue": "#02073E",

        // -------------
        "main-purple": "#5B2B99",
        "main-purple-light": "#EFE3FF",
        "grey-2": "#F2F2F3",
        "main-grey-light": "#EEEEEE",
        "main-grey-dark": "#D9D9D9",
      },
    },
  },
  plugins: [],
};
