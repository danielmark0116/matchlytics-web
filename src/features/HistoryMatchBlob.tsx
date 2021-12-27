/** @format */

import React from 'react'
import {RoundData, RoundsContainer} from '../components/ScheduledMatchBlob/ScheduledMatchBlob.styled'
import SubTitle from '../components/Typography/Subtitle'
import Text from '../components/Typography/Text'
import {GoalSchema, HESchema} from '../types/analytics'

interface Props {
  toggleShowMore: () => void
  event: HESchema
}

const HistoryMatchBlob: React.FC<Props> = ({event: {title, date, matchDetailsLink, goals, goalsAtRoundsEnd}}) => {
  const sumGoalsForEachHalf = (goals: GoalSchema[]): {firstHalf: number; secondHalf: number} => {
    return goals.reduce(
      (acc, goalData) => {
        const time = parseInt(goalData.minute.split("'")[0].split('+')[0])

        if (time < 50) {
          return {
            ...acc,
            firstHalf: (acc.firstHalf += 1),
          }
        }

        return {
          ...acc,
          secondHalf: (acc.secondHalf += 1),
        }
      },
      {firstHalf: 0, secondHalf: 0},
    )
  }

  if (!goalsAtRoundsEnd.length) {
    return null
  }

  return (
    <article className="pt-4">
      <SubTitle align="center" className="mt-8" small>
        {title}
      </SubTitle>
      <Text align="center">{`${sumGoalsForEachHalf(goals).firstHalf} - ${sumGoalsForEachHalf(goals).secondHalf}`}</Text>
      <hr className="w-1/6 border-teal-400 mx-auto my-2" />
      <Text align="center" small>
        {date}
      </Text>
      <a href={matchDetailsLink} target="_blank" rel="noopener noreferrer">
        <Text align="center" small>
          <b className="text-teal-800">Link do meczu</b>
        </Text>
      </a>

      <RoundsContainer className="mt-4">
        <RoundData>
          <Text small>35 - 45 I</Text>
        </RoundData>
        <RoundData last>
          <Text small>{'  II 80 - 90'}</Text>
        </RoundData>
      </RoundsContainer>

      <RoundsContainer>
        <RoundData>
          <Text>
            <b className="mr-2 text-blue-800">{sumGoalsForEachHalf(goalsAtRoundsEnd).firstHalf}</b>
          </Text>
        </RoundData>
        <RoundData last noIndicator>
          <Text>
            <b className="-ml-2 text-blue-800">{sumGoalsForEachHalf(goalsAtRoundsEnd).secondHalf}</b>
          </Text>
        </RoundData>
      </RoundsContainer>

      <hr className="my-8 w-3/4 mx-auto border-blue-900" />
    </article>
  )
}

export default HistoryMatchBlob
