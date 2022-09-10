/** @format */

import React from 'react'
import {AnimatePresence} from 'framer-motion'
import ScheduledMatchBlob from './ScheduledMatchBlob'
import {SESchema} from '../types/analytics'
import AnimatePresenceWrapper from '../components/AnimatePresenceWrapper/AnimatePresenceWrapper'

interface Props {
  scheduledEvents: SESchema[]
}

const AnalysisDisplay: React.FC<Props> = ({scheduledEvents}) => {
  return (
    <AnimatePresence>
      <div className="flex flex-col mt-8">
        {scheduledEvents.map((scheduledEvent, index) => (
          <AnimatePresenceWrapper key={scheduledEvent.fsId}>
            <ScheduledMatchBlob key={scheduledEvent.title + index} {...{scheduledEvent, isFavourite: !!scheduledEvent?.favourite}} />
          </AnimatePresenceWrapper>
        ))}
      </div>
    </AnimatePresence>
  )
}

export default AnalysisDisplay
