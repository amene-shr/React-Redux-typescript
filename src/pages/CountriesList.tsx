import React, { useState } from 'react'
import orderBy from 'lodash/orderBy'

import TableCountries from '../component/TableCountries'
import TopBar from '../component/TopBar'
import useCountries from '../Hook'
import { SortColumn, SortDirection } from '../types'

export default function CountriesList() {
  const [searchName, setSearchName] = useState('')
  const [allCountries] = useCountries(searchName)
  const [columnToSort, setColumnToSort] = useState<SortColumn>(SortColumn.Name)
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.Descending
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value)
  }

  const handleSort = (column: SortColumn) => {
    setColumnToSort(column)
    setSortDirection(
      columnToSort === column
        ? sortDirection === SortDirection.Ascending
          ? SortDirection.Descending
          : SortDirection.Ascending
        : SortDirection.Ascending
    )
  }

  return (
    <div>
      <TopBar searchName={searchName} handleSearch={handleSearch} />
      <TableCountries
        allCountries={orderBy(allCountries, columnToSort, sortDirection)}
        handleSort={handleSort}
      />
    </div>
  )
}
