import { Dispatch } from 'redux'

import {
  GET_COUNTRIES_DATA,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  CHANGE_APP_THEME,
  Country,
  Theme,
  ThemeChangeAction,
} from '../../types'

export function getCountriesData(countries: Country[]) {
  return {
    type: GET_COUNTRIES_DATA,
    payload: { countries },
  }
}

export function changeAppTheme(theme: Theme): ThemeChangeAction {
  return {
    type: CHANGE_APP_THEME,
    payload: {
      theme,
    },
  }
}

export function addCountry(countries: Country) {
  return {
    type: ADD_COUNTRY,
    payload: { countries },
  }
}

export function removeCountry(countries: Country) {
  return {
    type: REMOVE_COUNTRY,
    payload: { countries },
  }
}

export function fetchCountries() {
  return async (dispatch: Dispatch) => {
    try {
      const resp = await fetch('https://restcountries.eu/rest/v2/all')
      const countries = await resp.json()
      dispatch(getCountriesData(countries))
    } catch (error) {
      return error
    }
  }
}
