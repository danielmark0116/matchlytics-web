/** @format */

import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {SESchema} from '../types/analytics'
import SubTitle from '../components/Typography/Subtitle'
import Text from '../components/Typography/Text'
import {ScheduledMatchBlobContainer, HistoryQuantity, ShowHistory} from '../components/ScheduledMatchBlob/ScheduledMatchBlob.styled'
import {Button} from '../components/Button/Button.styled'
import HistoryMatchBlob from './HistoryMatchBlob'
import {useFavourites} from '../hooks/useFavourites'

interface Props {
  scheduledEvent: SESchema
  isFavourite?: boolean
  onDeleteButtonClick?: () => void
}

const ScheduledMatchBlob: React.FC<Props> = ({scheduledEvent, isFavourite, onDeleteButtonClick}) => {
  const {title, date, historyEvents, matchDetailsLink} = scheduledEvent
  const [showMore, setShowMore] = useState(false)
  const {addScheduledEventToFavourites} = useFavourites({shouldAutoFetchFavourites: false})

  const toggleShowMore = () => setShowMore((prev) => !prev)

  return (
    <ScheduledMatchBlobContainer isFavourite={isFavourite}>
      <div className="header_row">
        <div className="header_row__text_container">
          <SubTitle>{title}</SubTitle>
        </div>
        <div className="header_row__icon_container">
          {isFavourite ? null : (
            <motion.i
              whileHover={{
                scale: 1.1,
                transition: {duration: 0.2},
              }}
              whileTap={{scale: 0.9}}
              className="ri-star-line icon_button"
              onClick={() => {
                addScheduledEventToFavourites(scheduledEvent)
              }}></motion.i>
          )}

          {onDeleteButtonClick ? (
            <motion.i
              whileHover={{
                scale: 1.1,
                transition: {duration: 0.2},
              }}
              whileTap={{scale: 0.9}}
              className="ri-delete-bin-4-fill icon_button icon_button__delete"
              onClick={() => {
                onDeleteButtonClick?.()
              }}></motion.i>
          ) : null}
        </div>
      </div>
      <Text small>{'Data: ' + date}</Text>
      <a href={matchDetailsLink} target="_blank" rel="noopener noreferrer">
        <Text align="left" small>
          <b className="text-teal-800">{`Link do meczu (${title})`}</b>
        </Text>
      </a>

      <Text small light>
        Rozegrano do tej pory: <HistoryQuantity quantity={historyEvents.length}>{historyEvents.length}</HistoryQuantity>
      </Text>

      {!!historyEvents.length && (
        <ShowHistory>
          <Button onClick={toggleShowMore} small secondary>
            {showMore ? 'Schowaj' : 'Pokaż rozegrane mecze'}
          </Button>
        </ShowHistory>
      )}

      {!historyEvents.length && (
        <Text small align="center" light>
          Brak rozegranych
        </Text>
      )}

      {showMore && historyEvents.length && (
        <>
          {historyEvents.map((event) => (
            <HistoryMatchBlob {...{event, toggleShowMore}} key={event.fsId} />
          ))}
        </>
      )}

      {showMore && (
        <ShowHistory>
          <Button onClick={toggleShowMore} small secondary>
            Schowaj
          </Button>
        </ShowHistory>
      )}
    </ScheduledMatchBlobContainer>
  )
}

export default ScheduledMatchBlob
