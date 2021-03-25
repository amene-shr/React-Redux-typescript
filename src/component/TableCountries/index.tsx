import React from 'react'
import './index.scss'

import { Table, TableBody } from '@material-ui/core'

import TableHeader from '../TableHeader'
import TRow from '../TableRow'

import { Country, TableOfCountriesProps } from '../../types'

export default function TableCountries({
  allCountries,
  handleSort,
}: TableOfCountriesProps) {
  return (
    <Table>
      <TableHeader handleSort={handleSort} />
      <TableBody>
        {allCountries &&
          allCountries.map((country: Country) => (
            <TRow
              key={country.name}
              flag={country.flag}
              name={country.name}
              languages={country.languages}
              population={country.population}
              region={country.region}
            />
          ))}
      </TableBody>
    </Table>
  )
}
