const WEEKDAYS_JA = ['日', '月', '火', '水', '木', '金', '土']

/** 端末ローカル。年なし・秒なし。例: 4/5（日） 14:30 */
export function formatCompletionDate(timestampMs) {
  const d = new Date(timestampMs)
  if (Number.isNaN(d.getTime())) return ''
  const m = d.getMonth() + 1
  const day = d.getDate()
  const w = WEEKDAYS_JA[d.getDay()]
  const hh = String(d.getHours()).padStart(2, '0')
  const mm = String(d.getMinutes()).padStart(2, '0')
  return `${m}/${day}（${w}） ${hh}:${mm}`
}
