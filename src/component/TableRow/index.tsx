import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCountry } from '../../redux/actions'

import { AppState, Country } from '../../types'
import Flag from '../Flag'
import { Button, TableCell, TableRow } from '@material-ui/core'

import './index.scss'
import ThemeContext from '../../context/ThemeContext'
import { Link } from 'react-router-dom'

export default function TRow({
  name,
  flag,
  languages,
  population,
  region,
}: Country) {
  const dispatch = useDispatch()

  const useTheme = useContext(ThemeContext)

  const handleAddCountry = () => {
    const country = {
      flag,
      name,
      languages,
      region,
      population,
    }
    dispatch(addCountry(country))
  }

  const countriesInCart = useSelector(
    (state: AppState) => state.cart.countriesInCart
  ).find((cntr) => cntr.name === name)

  return (
    <TableRow>
      <TableCell>
        <Flag flag={flag} />
      </TableCell>
      <TableCell>
        <Link to={`./country/${name}`}>{name}</Link>
      </TableCell>
      <TableCell>
        {languages.map((lang) => (
          <li key={lang.name}>{lang.name}</li>
        ))}
      </TableCell>
      <TableCell>{population}</TableCell>
      <TableCell>{region}</TableCell>
      <TableCell>
        {!countriesInCart ? (
          <Button
            style={{ background: useTheme.theme.color }}
            onClick={() => handleAddCountry()}
          >
            ADD Country
          </Button>
        ) : (
          <Button style={{ background: '#808080' }} disabled>
            ADD Country
          </Button>
        )}
      </TableCell>
    </TableRow>
  )
}
