/* eslint-disable jsx-a11y/no-onchange */
import React, { useContext } from 'react'

import ThemeContext, { themes } from '../../context/ThemeContext'

const Themes = () => {
  const { theme, switchTheme } = useContext(ThemeContext)

  return (
    <div className="theme">
      <strong>Theme :</strong>
      <select value={theme.color} onChange={(e) => switchTheme(e.target.value)}>
        <option value={themes.black.color}>Grey</option>
        <option value={themes.red.color}>Red</option>
        <option value={themes.green.color}>Green</option>
        <option value={themes.blue.color}>Blue</option>
        <option value={themes.orange.color}>Orange</option>
      </select>
    </div>
  )
}

export default Themes
