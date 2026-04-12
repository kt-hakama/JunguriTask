/** UI 言語（タスクデータとは別キー） */
const STORAGE_KEY = 'junguri-task-locale'

export function getLocale() {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'ja' || v === 'en') return v
  } catch {
    /* ignore */
  }
  return 'ja'
}

export function setLocalePreference(locale) {
  try {
    if (locale === 'ja' || locale === 'en') {
      localStorage.setItem(STORAGE_KEY, locale)
    }
  } catch {
    /* ignore */
  }
}
