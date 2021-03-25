import {
  ADD_COUNTRY,
  CartState,
  CountryAction,
  REMOVE_COUNTRY,
} from '../../types'

export default function CartReducer(
  state: CartState = { countriesInCart: [] },
  action: CountryAction
): CartState {
  switch (action.type) {
    case ADD_COUNTRY: {
      const { countries } = action.payload
      if (
        state.countriesInCart.find((country) => country.name === countries.name)
      ) {
        return state
      }
      return {
        ...state,
        countriesInCart: [...state.countriesInCart, countries],
      }
    }
    case REMOVE_COUNTRY: {
      const { countries } = action.payload
      const index = state.countriesInCart.findIndex(
        (country) => country.name === countries.name
      )
      if (index >= 0) {
        state.countriesInCart.splice(index, 1)
        return {
          ...state,
          countriesInCart: [...state.countriesInCart],
        }
      }
      return state
    }
    default:
      return state
  }
}
