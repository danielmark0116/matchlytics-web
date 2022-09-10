/** @format */

import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import {Locale} from 'date-fns'
import {pl, enUS} from 'date-fns/locale'

const getLang = () => {
  if (navigator.languages !== undefined) return navigator.languages[0]
  else return navigator.language
}

const getLocale = (lang: string): Locale => {
  switch (lang.toLowerCase()) {
    case 'pl-pl':
      return pl
    default:
      return enUS
  }
}

// ISO 8601 format input
export const renderDate = (isoDateString: string, formatString = 'EEEE, do LLLL y, HH:mm'): string => {
  const lang = getLang()
  const date = parseISO(isoDateString)
  const formattedDate = format(date, formatString, {
    locale: getLocale(lang),
  })

  return formattedDate
}
