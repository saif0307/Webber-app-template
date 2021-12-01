module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'lt-blue': '#CFFAFE',
        'ft-blue':'#0E7490',
        'hr-blue':'#a6e7ed',
        'gd-blue1':'#06B6D4',
        'gd-blue2':'#0E7490',
        'gd-blue3':'#0284C7',
        "gd1-blue1":'#06B6D4',
        "gd2-blue2":'#0E7490',
        "gd3-blue3":'#0284C7',
        "gd11-blue1":'#a5f3fc',
        "gd22-blue2":'#a5f3fc'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
