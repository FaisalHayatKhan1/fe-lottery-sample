/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{html,js,ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      f48: "48px",
      f42: "42px",
      f40: "40px",
      f37: "37px",
      f32: "32px",
      f30: "30px",
      f26: "26px",
      f24: "24px",
      f20: "20px",
      f18: "18px",
      f16: "16px",
      f14: "14px",
      f12: "12px",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#801B75",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#191978",
          foreground: "hsl(var(--secondary-foreground))",
        },
        greenIconic: {
          DEFAULT: "#00AEB1",
          foreground: "hsl(var(--secondary-foreground))",
        },
        blackShade: {
          DEFAULT: "#1f2227",
        },
        customGray: {
          DEFAULT: "#B8AFAF",
        },
        customYellow: {
          DEFAULT: "#FFEF00",
        },
        customRed: {
          DEFAULT: "#EF3A33",
        },
        customGreen: { DEFAULT: "#00FFA3" },
        customPink: { DEFAULT: "#897EDC" },
        grayScale: {
          DEFAULT: "#F9FAFB",
          primary: "#EEEFF2",
          secondary: "#1F2937",
          foreground: "hsl(var(--grayScale-foreground))",
        },
        success: {
          DEFAULT: "#0CAF60",
          foreground: "hsl(var(--success-foreground))",
        },
        orange: {
          DEFAULT: "#FE964A",
          foreground: "hsl(var(--orange-foreground))",
        },
        navyBlue: {
          DEFAULT: "#04A4F4",
          foreground: "hsl(var(--navyBlue-foreground))",
        },
        blue: {
          DEFAULT: "#0062FF",
          foreground: "hsl(var(--blue-foreground))",
        },
        warning: {
          DEFAULT: "#FFD023",
          foreground: "hsl(var(--warning-foreground))",
        },
        error: {
          DEFAULT: "#FD4F4F",
          foreground: "hsl(var(--error-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        "3xl": "0px 5px 15px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      translate: {
        200: "200%",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
