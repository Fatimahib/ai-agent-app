

// // tailwind.config.js
// module.exports = {
//   darkMode: 'class',
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           main: '#6E56CF',
//           light: '#9B8AFF',
//           dark: '#4D3B9C'
//         },
//         dark: {

//           main: 'linear-gradient(to bottom, #100B2D, #2A1548)',
//          // main: '#100B2D', // Background color
//           nav: '#291547', // Navbar color
//           accent: '#3A1D66', // Dropdown/darker elements
//           highlight: '#4B2785' // Hover states
//         },
//         light: {
//           main: '#F5F5F5',
//           text: '#333333'
//         }
//       },
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }


module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'echo-light': '#F8F8FF',
        'echo-dark': '#1B1034',
        'echo-text-dark': 'linear-gradient(to bottom, #100B2D, #2A1548)',
        'echo-text-secondary': '#6B7280',
        primary: {
          main: '#6E56CF',
          light: '#9B8AFF',
          dark: '#4D3B9C'
        },
        dark: {
          bg: 'linear-gradient(to bottom, #100B2D, #2A1548)',
          sidebar: '#1A1233',
          sidebarBorder: '#2D1B4D',
          nav: '#291547',
          accent: '#3A1D66',
          highlight: '#4B2785'
        },
        light: {
          main: '#F5F5F5',
          text: '#333333'
        }
        
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],

      },
      boxShadow: {
        'sidebar-item': '0 4px 6px -1px rgba(110, 86, 207, 0.2)',
      },
    },
  },
  plugins: [],
}