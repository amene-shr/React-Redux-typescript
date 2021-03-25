import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState, Country } from '../types'
import { fetchCountries } from '../redux/actions/country'

export default function useCountries(searchName: string) {
  const allCountries = useSelector(
    (state: AppState) => state.country.allCountries
  )

  const [filter, setFilter] = useState<Country[]>([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  useEffect(() => {
    const filtered = allCountries.filter((country) =>
      country.name.toLowerCase().includes(searchName.toLowerCase())
    )
    setFilter(filtered)
  }, [allCountries, searchName])

  return [filter]
}
