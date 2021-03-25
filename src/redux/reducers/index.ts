import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import country from './country'
import cart from './cart'
import theme from './theme'

const createRootReducer = () =>
  combineReducers({
    country,
    product,
    ui,
    cart,
    theme,
  })

export default createRootReducer
