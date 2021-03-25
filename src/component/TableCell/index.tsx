import React from 'react'

import { HeaderProps } from '../../types'

export default function TableCell({ name }: HeaderProps) {
  return <th>{name}</th>
}
