/** @format */

import React from 'react'
import {Container} from '../components/Container/Container.styled'
import SubTitle from '../components/Typography/Subtitle'
import Text from '../components/Typography/Text'
import ScheduledMatchBlob from '../features/ScheduledMatchBlob'
import {useFavourites} from '../hooks/useFavourites'

const FavouritesPage = () => {
  const {favourites} = useFavourites()

  return (
    <Container>
      <SubTitle>Ulubione typy</SubTitle>
      <Text light>Zobacz swoje ulubione typy</Text>

      <br />

      {favourites.map((f) => {
        if (f.favouriteItem.type === 'scheduledEvent') {
          return <ScheduledMatchBlob isFavourite scheduledEvent={f.favouriteItem.data} />
        }

        return null
      })}
    </Container>
  )
}

export default FavouritesPage
