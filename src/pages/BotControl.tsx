/** @format */

import React from 'react'
import {Button} from '../components/Button/Button.styled'
import {useAnalyticsContext} from '../hooks/useAnalyticsContext'

const BotControl: React.FC = () => {
  const {triggerNewAnalysis, stopScrapping} = useAnalyticsContext()
  return (
    <div>
      <Button onClick={triggerNewAnalysis}>Wykonaj nową analizę</Button>
      <br />
      <Button onClick={stopScrapping}>Zatrzymaj process</Button>
    </div>
  )
}

export default BotControl
