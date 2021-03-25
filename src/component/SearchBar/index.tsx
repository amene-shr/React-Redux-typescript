import React from 'react'

import {
  Input,
  // InputAdornment
} from '@material-ui/core'
// import SearchIcon from '@material-ui/icons/Search'
import { SearchProps } from '../../types'

export default function SearchBar({ searchName, handleSearch }: SearchProps) {
  return (
    <Input
      value={searchName}
      onChange={handleSearch}
      placeholder="Search here"
    />
  )
}
