/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
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
        },
        //customs
        input: {
          0: "var(--clr-input-0)",
          1: "var(--clr-input-1)",
          2: "var(--clr-input-2)",
        
        },
        txt: {
          "primary-dark": "var(--clr-txt-1)",
          "secondary-dark": "var(--clr-txt-2)",
          "primary-white": "var(--clr-txt-3)",
          "secondary-white": "var(--clr-txt-4)",
          "primary-yellow": "var(--clr-txt-5)",
          "danger" : "var(--clr-danger)"
        },
        customBg: {
          "main-1": "var(--bg-main-1)",
          "main-2": "var(--bg-main-2)",
          sub: "var(--bg-sub)",
          nav: "var(--bg-nav)",
          btn: {
            1: "var(--bg-btn-1)",
            2: "var(--bg-btn-2)",
            3: "var(--bg-btn-3)",
            4: "var(--bg-btn-4)",
          },
        },
        customBorder: {
          1: "var(--clr-border-1)",
        },
        highlight : {
          0 : "var(--clr-highlight-0)", 
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],

}

