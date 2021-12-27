/** @format */

import React from 'react'
import ScheduledMatchBlob from './ScheduledMatchBlob'
import {SESchema} from '../types/analytics'

interface Props {
  scheduledEvents: SESchema[]
}

const AnalysisDisplay: React.FC<Props> = ({scheduledEvents}) => {
  return (
    <div className="flex flex-col mt-8">
      {scheduledEvents.map((scheduledEvent, index) => (
        <ScheduledMatchBlob key={scheduledEvent.title + index} {...{scheduledEvent}} />
      ))}
    </div>
  )
}

export default AnalysisDisplay
