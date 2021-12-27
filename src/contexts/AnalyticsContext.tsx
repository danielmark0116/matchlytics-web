/** @format */

import {createContext} from 'react'
import {ASchema} from '../types/analytics'

export interface AnalyticsContextData {
  matchAnalysis: ASchema | null
  fetchLatestAnalysis: () => void
  triggerNewAnalysis: () => void
}

export const AnalyticsContext = createContext<AnalyticsContextData | null>(null)
