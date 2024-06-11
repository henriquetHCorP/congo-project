//  /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     'node_modules/flowbite-react/**/*.{js, jsx, ts, tsx}', 
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require('flowbite/plugin')],
// }; 
 /** @type {import('tailwindcss').Config} */
 const flowbite = require("flowbite-react/tailwind");

 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
    // require('tailwind-scrollbar'),
    // require('@tailwindcss/line-clamp'),
  ],
}