const WEEKDAYS_JA = ['日', '月', '火', '水', '木', '金', '土']

function pad2(n) {
  const s = String(n)
  return s.length >= 2 ? s : `0${s}`
}

/** 端末ローカル。年なし・秒なし。例: 4/5（日） 14:30 */
export function formatCompletionDate(timestampMs) {
  const ms = Number(timestampMs)
  if (!Number.isFinite(ms)) return ''
  const d = new Date(ms)
  if (Number.isNaN(d.getTime())) return ''
  const m = d.getMonth() + 1
  const day = d.getDate()
  const w = WEEKDAYS_JA[d.getDay()]
  const hh = pad2(d.getHours())
  const mm = pad2(d.getMinutes())
  return `${m}/${day}（${w}） ${hh}:${mm}`
}
