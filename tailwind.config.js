// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/views/**/*.vue",
//     "./src/views/*.vue",
//     "./src/components/*.vue",
//     "./src/components/**/*.vue",
//     "./src/views/*.vue",
//     "./src/views/**/*.vue",
//     "./src/layouts/*.vue",
//     "./src/**/*.{vue,js,ts,jsx,tsx}",
//     "./src/**/*.{vue,js,ts}",
//     "./node_modules/flowbite/**/*.js",
//   ],
//   theme: {
//     extend: {
//       birumuda: "#C1E9FF",
//       orenmuda: "#FDEDCA",
//       borderabu: "#D9D9D9",
//       pinjamin: "#404040",
//     },
//   },

//   plugins: [
//     require("tailwindcss-animated"),
//     require("flowbite/plugin"),
//     require("daisyui"),
//   ],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.vue",
    "./src/views/*.vue",
    "./src/components/*.vue",
    "./src/components/**/*.vue",
    "./src/views/*.vue",
    "./src/views/**/*.vue",
    "./src/layouts/*.vue",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      birumuda: "#C1E9FF",
      orenmuda: "#FDEDCA",
      borderabu: "#D9D9D9",
      pinjamin: "#404040",
    },
  },

  plugins: [require("tailwindcss-animated")],
};
