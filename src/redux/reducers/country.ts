import { CountryState, CountryAction, GET_COUNTRIES_DATA } from '../../types'

export default function countryReducer(
  state: CountryState = {
    allCountries: [],
  },
  action: CountryAction
): CountryState {
  switch (action.type) {
    case GET_COUNTRIES_DATA: {
      const { countries } = action.payload
      return {
        ...state,
        allCountries: countries,
      }
    }

    default:
      return state
  }
}
