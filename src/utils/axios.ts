/** @format */

import axios from 'axios'

export const updateToken = (token: string): void => {
  // eslint-disable-next-line
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
