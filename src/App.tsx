import React, { useState } from 'react'
import Routes from './Routes'
import { useDispatch } from 'react-redux'

import ThemeContext, { themes } from './context/ThemeContext'

import { changeAppTheme } from './redux/actions/country'

import './App.css'

export default function App() {
  const dispatch = useDispatch()

  // assigning default theme
  const currentTheme = {
    color: themes.black.color,
  }

  // getting last saved theme from localstorage
  const themeJson = localStorage.getItem('currentTheme')
  let savedTheme = themeJson !== null ? JSON.parse(themeJson) : ''
  if (savedTheme !== '') {
    currentTheme.color = savedTheme.color
  }

  // context state to pass to children component
  //use for passing theme value and function to switch between different themes
  const [context, setContext] = useState({
    theme: currentTheme,
    switchTheme: (themeName: string) => {
      setContext((current) => ({
        ...current,
        theme: {
          color: themeName,
        },
      }))

      currentTheme.color = themeName
      dispatch(changeAppTheme(currentTheme))
    },
  })

  return (
    <>
      <ThemeContext.Provider value={context}>
        <Routes />
      </ThemeContext.Provider>
    </>
  )
}
