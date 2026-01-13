/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../**/*.{html,js}"
  ],
  theme: {
    extend: {
     backgroundImage: {
    drum: "url('/drum-bg-cover.png')",
  },
    },
  },
  plugins: [],
}
