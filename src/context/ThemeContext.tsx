import React from 'react'

// exporting themes values
export const themes = {
  black: {
    color: '#817A79',
  },
  green: {
    color: '#0B4708',
  },
  red: {
    color: '#E42833',
  },
  blue: {
    color: '#447CDE',
  },
  orange: {
    color: '#C64E30',
  },
}

// exporting context
export default React.createContext({
  theme: themes.black,
  switchTheme: (themeName: string) => {},
})
