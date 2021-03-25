/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
// import React from 'react'
// import TableCell from '../TableCell'

// export default function TableHeader() {
//   const names = ['Flag', 'Country Name', 'Language', 'Population', 'Region']
//   return (
//     <thead>
//       <tr>
//         {names.map((name) => (
//           <TableCell key={name} name={name} />
//         ))}
//       </tr>
//     </thead>
//   )
// }

import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core'
import React from 'react'

import { TableHeaderProps, HeaderName, SortColumn } from '../../types'

export default function TableHeader({ handleSort }: TableHeaderProps) {
  const headerNames: HeaderName[] = [
    { name: 'Flag', value: SortColumn.Flag },
    { name: 'Name', value: SortColumn.Name },
    { name: 'Languages', value: SortColumn.Languages },
    { name: 'Population', value: SortColumn.Population },
    { name: 'Region', value: SortColumn.Region },
  ]
  return (
    <TableHead>
      <TableRow>
        {headerNames.map(({ name, value }) => (
          <TableCell key={name} onClick={() => handleSort(value)}>
            <TableSortLabel>{name}</TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
