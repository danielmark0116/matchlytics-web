/** @format */

import {useCallback} from 'react'

interface UseLocalStorage {
  getItem: (key: string) => unknown
  setItem: (key: string, value: unknown) => void
}

export enum LocalStorageKeys {
  ACCESS_TOKEN = 'accessToken',
}

export const useLocalStorage = (): UseLocalStorage => {
  const getItem = useCallback((key: string) => {
    const item = window.localStorage.getItem(key)

    if (!item) return ''

    return JSON.parse(item)
  }, [])

  const setItem = useCallback((key: string, value: unknown) => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [])

  return {getItem, setItem}
}
