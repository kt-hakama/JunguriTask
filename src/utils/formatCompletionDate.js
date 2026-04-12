const WEEKDAYS_JA = ['日', '月', '火', '水', '木', '金', '土']

function pad2(n) {
  const s = String(n)
  return s.length >= 2 ? s : `0${s}`
}

/**
 * @param {number} timestampMs
 * @param {'ja' | 'en'} [locale='ja']
 */
export function formatCompletionDate(timestampMs, locale = 'ja') {
  const ms = Number(timestampMs)
  if (!Number.isFinite(ms)) return ''
  const d = new Date(ms)
  if (Number.isNaN(d.getTime())) return ''

  if (locale === 'en') {
    try {
      return new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      }).format(d)
    } catch {
      return ''
    }
  }

  const m = d.getMonth() + 1
  const day = d.getDate()
  const w = WEEKDAYS_JA[d.getDay()]
  const hh = pad2(d.getHours())
  const mm = pad2(d.getMinutes())
  return `${m}/${day}（${w}） ${hh}:${mm}`
}
