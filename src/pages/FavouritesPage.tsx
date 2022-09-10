/** @format */

import React from 'react'
import {AnimatePresence} from 'framer-motion'
import {Container} from '../components/Container/Container.styled'
import SubTitle from '../components/Typography/Subtitle'
import Text from '../components/Typography/Text'
import ScheduledMatchBlob from '../features/ScheduledMatchBlob'
import {useFavourites} from '../hooks/useFavourites'
import AnimatePresenceWrapper from '../components/AnimatePresenceWrapper/AnimatePresenceWrapper'

const FavouritesPage = () => {
  const {favourites, deleteScheduledEventFromFavourites} = useFavourites()

  return (
    <Container>
      <SubTitle>Ulubione typy</SubTitle>
      <Text light>Zobacz swoje ulubione typy</Text>

      <br />

      <AnimatePresence>
        {favourites.map((f) => {
          if (f.favouriteItem.type === 'scheduledEvent') {
            return (
              <AnimatePresenceWrapper>
                <ScheduledMatchBlob
                  onDeleteButtonClick={() => {
                    deleteScheduledEventFromFavourites(f.id)
                  }}
                  isFavourite
                  scheduledEvent={f.favouriteItem.data}
                />
              </AnimatePresenceWrapper>
            )
          }

          return null
        })}
      </AnimatePresence>
    </Container>
  )
}

export default FavouritesPage
