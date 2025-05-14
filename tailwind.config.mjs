/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Colores base
        background: {
          DEFAULT: '#FFFFFF',    // Blanco puro para el fondo principal
          secondary: '#E0E0E0',  // Gris muy claro para secciones alternas
          card: '#FFFFFF',       // Blanco para tarjetas y elementos elevados
        },
        text: {
          primary: '#1E3A8A',    // Azul oscuro para textos principales
          secondary: '#64748B',  // Gris azulado para textos secundarios
          muted: '#94A3B8',     // Gris claro para textos menos importantes
        },
        // Acentos
        accent: {
          primary: '#2563EB',    // Azul confiable para elementos principales
          secondary: '#3B82F6',  // Azul más claro para elementos secundarios
          tertiary: '#60A5FA',   // Azul suave para detalles
        },
        // Detalles
        border: '#E2E8F0',      // Gris muy claro para bordes
        hover: 'rgba(37, 99, 235, 0.1)', // Azul con opacidad para hover
        glow: 'rgba(37, 99, 235, 0.2)',  // Azul con opacidad para efectos de brillo
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 12px rgba(37, 99, 235, 0.2)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'button': '0 2px 4px rgba(37, 99, 235, 0.1)',
      },
    },
  },
  plugins: [],
} 