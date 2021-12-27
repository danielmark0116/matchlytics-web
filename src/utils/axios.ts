/** @format */

import axios from 'axios'

export const updateToken = (token: string): void => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
