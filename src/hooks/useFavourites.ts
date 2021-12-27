/** @format */

import {useCallback, useState} from 'react'
import axios from 'axios'
import config from '../config'

const API = config.apiBase

export const useFavourites = () => {
  const [favourites, setFavourites] = useState([])

  const fetchFavourites = useCallback(async () => {
    try {
      const response = await axios.get(API + '/api/favourites')

      const favourites = response?.data?.favourites

      setFavourites(favourites)

      console.log({favourites})
    } catch (e) {
      //
    }
  }, [])

  const addScheduledEventToFavourites = useCallback(() => {
    //
  }, [])

  return {fetchFavourites, favourites, addScheduledEventToFavourites}
}
