import { ThemeState, CHANGE_APP_THEME, ThemeChangeAction } from '../../types'

const initialState: ThemeState = {
  color: '',
}

export default function themeReducer(
  state = initialState,
  action: ThemeChangeAction
) {
  switch (action.type) {
    case CHANGE_APP_THEME: {
      const { theme } = action.payload
      return {
        ...state,
        theme,
      }
    }

    default:
      return state
  }
}
