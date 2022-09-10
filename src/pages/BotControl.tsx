/** @format */

import React from 'react'
import {Button} from '../components/Button/Button.styled'
import {useAnalyticsContext} from '../hooks/useAnalyticsContext'

const BotControl: React.FC = () => {
  const {triggerNewAnalysis} = useAnalyticsContext()
  return (
    <div>
      <Button onClick={triggerNewAnalysis}>Wykonaj nową analizę</Button>
    </div>
  )
}

export default BotControl
