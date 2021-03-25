import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../types'
import TableRow from '../component/TableRow'

export default function Country() {
  const { id } = useParams<{ id: string }>()

  const country = useSelector((state: AppState) =>
    state.country.allCountries.find((country) => country.name === id)
  )

  if (!country) {
    return <div>Country not found</div>
  }

  return (
    <>
      <Link to="/">
        <button>Back</button>
      </Link>
      <TableRow
        flag={country.flag}
        name={country.name}
        languages={country.languages}
        population={country.population}
        region={country.region}
      />
    </>
  )
}
