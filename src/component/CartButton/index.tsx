import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { IconButton } from '@material-ui/core/'
import Badge from '@material-ui/core/Badge'
import { AppState } from '../../types'

import Cart from '../Cart'

export default function CartButton() {
  const numberInBasket = useSelector(
    (state: AppState) => state.cart.countriesInCart.length
  )
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <IconButton
        edge="end"
        aria-label="basket"
        aria-haspopup="true"
        color="inherit"
        onClick={handleOpen}
      >
        <Badge badgeContent={numberInBasket}>
          <ShoppingBasketIcon />
        </Badge>
      </IconButton>
      <Cart handleClose={handleClose} open={open} />
    </div>
  )
}
