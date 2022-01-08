/** @format */

import {useCallback, useEffect, useState} from 'react'
import axios from 'axios'
import config from '../config'
import {SESchema} from '../types/analytics'
import {Favourite, FavouriteItem} from '../types/favourite'

const API = config.apiBase

export const useFavourites = (config = {shouldAutoFetchFavourites: true}) => {
  const {shouldAutoFetchFavourites} = config

  const [favourites, setFavourites] = useState<Favourite[]>([])

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

  const addScheduledEventToFavourites = useCallback(async (scheduledEvent: SESchema) => {
    try {
      const favouriteItem: FavouriteItem = {
        data: scheduledEvent,
        type: 'scheduledEvent',
      }

      await axios.post(API + '/api/favourites', {favouriteItem})

      // display in-app?
    } catch (e) {
      //
    }
  }, [])

  const deleteScheduledEventFromFavourites = useCallback(
    async (favouriteId: string) => {
      try {
        await axios.delete(API + `/api/favourites/${favouriteId}`)

        fetchFavourites()
      } catch (e) {
        //
      }
    },
    [fetchFavourites],
  )

  useEffect(() => {
    if (shouldAutoFetchFavourites) {
      fetchFavourites()
    }
  }, [fetchFavourites, shouldAutoFetchFavourites])

  return {fetchFavourites, favourites, addScheduledEventToFavourites, deleteScheduledEventFromFavourites}
}
