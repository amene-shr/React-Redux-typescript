import { CHANGE_THEME, Theme } from '../../types'

export default function changeTheme(theme: Theme) {
  return {
    type: CHANGE_THEME,
    payload: {
      theme: theme,
    },
  }
}
