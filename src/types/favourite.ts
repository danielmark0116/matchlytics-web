/** @format */

import {SESchema} from './analytics'

interface FavouriteScheduledEvent {
  type: 'scheduledEvent'
  data: SESchema
}

interface FavouriteUser {
  type: 'user'
  data: {id: string}
}

export type FavouriteItem = FavouriteScheduledEvent | FavouriteUser

export interface Favourite {
  userId: string
  favouriteItem: FavouriteItem
  id: string
}
