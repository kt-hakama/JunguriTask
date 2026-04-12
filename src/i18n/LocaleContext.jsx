import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { messages } from './messages'
import { getLocale, setLocalePreference } from './localePreference'

const LocaleContext = createContext(null)

function getMessage(obj, path) {
  const parts = path.split('.')
  let v = obj
  for (const p of parts) {
    if (v == null || typeof v !== 'object') return undefined
    v = v[p]
  }
  return typeof v === 'string' ? v : undefined
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(() => getLocale())

  const setLocale = useCallback((next) => {
    if (next === 'ja' || next === 'en') setLocaleState(next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === 'ja' ? 'ja' : 'en'
    const title = getMessage(messages[locale], 'app.title')
    if (title) document.title = title
    setLocalePreference(locale)
  }, [locale])

  const t = useCallback(
    (key) => {
      const s = getMessage(messages[locale], key)
      return s ?? key
    },
    [locale]
  )

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return ctx
}
