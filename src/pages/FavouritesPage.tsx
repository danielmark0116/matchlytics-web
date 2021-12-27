/** @format */

import React from 'react'
import {useFavourites} from '../hooks/useFavourites'

const FavouritesPage = () => {
  const {favourites} = useFavourites()

  console.log({favsFromPage: favourites})

  return (
    <div>
      <h1>Favs</h1>
    </div>
  )
}

export default FavouritesPage
