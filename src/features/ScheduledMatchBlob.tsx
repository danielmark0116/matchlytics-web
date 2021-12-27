/** @format */

import React, {useState} from 'react'
import {SESchema} from '../types/analytics'
import SubTitle from '../components/Typography/Subtitle'
import Text from '../components/Typography/Text'
import {ScheduledMatchBlobContainer, HistoryQuantity, ShowHistory} from '../components/ScheduledMatchBlob/ScheduledMatchBlob.styled'
import {Button} from '../components/Button/Button.styled'
import HistoryMatchBlob from './HistoryMatchBlob'

interface Props {
  scheduledEvent: SESchema
}

const ScheduledMatchBlob: React.FC<Props> = ({scheduledEvent: {title, date, historyEvents, matchDetailsLink}}) => {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => setShowMore((prev) => !prev)

  return (
    <ScheduledMatchBlobContainer>
      <SubTitle>{title}</SubTitle>
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
