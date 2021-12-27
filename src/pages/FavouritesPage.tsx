/** @format */

import React from 'react'
import {useFavourites} from '../hooks/useFavourites'

const FavouritesPage = () => {
  const {favourites} = useFavourites()

  return (
    <div>
      <h1>Favs</h1>
    </div>
  )
}

export default FavouritesPage
