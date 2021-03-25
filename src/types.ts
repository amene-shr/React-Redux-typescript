// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

export const GET_COUNTRIES_DATA = 'GET_COUNTRIES_DATA'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const CHANGE_APP_THEME = 'CHANGE_APP_THEME'
export const CHANGE_THEME = 'CHANGE_THEME'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

//Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  product: ProductState
  ui: UiState
  country: CountryState
  cart: CartState
  theme: ThemeState
}

export type ThemeState = {
  color: string
}

export type CartState = {
  countriesInCart: Country[]
}

export type FlagProps = {
  flag: string
}

export type HeaderProps = {
  name: string
}

//countries
export type CountryState = {
  allCountries: Country[]
}

export type languages = {
  name: string
}

export type Country = {
  name: string
  flag: string
  population: number
  region: string
  languages: languages[]
}

export type GetCountriesData = {
  type: typeof GET_COUNTRIES_DATA
  payload: {
    countries: Country[]
  }
}

export type AddCountry = {
  type: typeof ADD_COUNTRY
  payload: {
    countries: Country
  }
}

export type RemoveCountry = {
  type: typeof REMOVE_COUNTRY
  payload: {
    countries: Country
  }
}

export type CountryAction = GetCountriesData | AddCountry | RemoveCountry

export type ChangeTheme = {
  type: typeof CHANGE_THEME
  payload: {
    theme: Theme
  }
}

export type CartProps = {
  open: boolean
  handleClose: () => void
}

export type SearchProps = {
  searchName: string
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type Theme = {
  color: string
}

export type ThemeChangeAction = {
  type: typeof CHANGE_APP_THEME
  payload: {
    theme: Theme
  }
}

export enum SortColumn {
  Flag = 'flag',
  Name = 'name',
  Languages = 'languages',
  Population = 'population',
  Region = 'region',
}
export type HeaderName = {
  name: string
  value: SortColumn
}
export type TableHeaderProps = {
  handleSort: (column: SortColumn) => void
}
export type TableOfCountriesProps = {
  allCountries: Country[]
  handleSort: (column: SortColumn) => void
}

export enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}
