const WEEKDAYS_JA = ['日', '月', '火', '水', '木', '金', '土']

/** 端末ローカル。年・時刻なし。例: 4/5（日） */
export function formatCompletionDate(timestampMs) {
  const d = new Date(timestampMs)
  if (Number.isNaN(d.getTime())) return ''
  const m = d.getMonth() + 1
  const day = d.getDate()
  const w = WEEKDAYS_JA[d.getDay()]
  return `${m}/${day}（${w}）`
}
