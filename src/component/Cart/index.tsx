import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import useCountries from '../../Hook'
import {
  IconButton,
  Modal,
  //   makeStyles,
  //   Theme,
  //   createStyles,
} from '@material-ui/core/'
import DeleteIcon from '@material-ui/icons/Delete'

import { AppState, CartProps } from '../../types'
import Flag from '../Flag'
import { Link } from 'react-router-dom'
import { removeCountry } from '../../redux/actions'

export default function Cart({ open, handleClose }: CartProps) {
  // const countries = useCountries(searchName)
  const dispatch = useDispatch()

  const countries = useSelector((state: AppState) => state.cart.countriesInCart)

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={open}
      onClose={handleClose}
      style={{ background: 'white' }}
    >
      <div>
        <IconButton onClick={handleClose}>Close</IconButton>
        {countries.length === 0
          ? 'nothing to show'
          : countries.map((c) => (
              <div key={c.name}>
                <Flag flag={c.flag} />
                <Link to={`/country/${c.name}`}>{c.name}</Link>
                <IconButton
                  onClick={() => {
                    dispatch(removeCountry(c))
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            ))}
      </div>
    </Modal>
  )
}
