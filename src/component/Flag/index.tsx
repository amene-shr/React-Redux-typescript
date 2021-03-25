import React from 'react'

import { FlagProps } from '../../types'

export default function Flag({ flag }: FlagProps) {
  return (
    <div>
      <img src={flag} alt="flag" width="200px" height="150px" />
    </div>
  )
}
