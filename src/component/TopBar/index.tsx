import React, { useContext } from 'react'

import { IconButton, Toolbar, AppBar } from '@material-ui/core/'

import CartButton from '../CartButton'
import SearchBar from '../SearchBar'
import { SearchProps } from '../../types'
import ThemeContext from '../../context/ThemeContext'
import Themes from '../Themes/themes'

export default function TopBar({ searchName, handleSearch }: SearchProps) {
  const themeContext = useContext(ThemeContext)

  return (
    <div>
      <AppBar
        position="static"
        style={{ background: themeContext.theme.color }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <div>
            <SearchBar searchName={searchName} handleSearch={handleSearch} />
          </div>
          <div />
          <CartButton />
        </Toolbar>
        <Themes />
      </AppBar>
    </div>
  )
}
