import { formatCompletionDate } from '../utils/formatCompletionDate'
import { useLocale } from '../i18n/LocaleContext'

/**
 * @param {{ entries: { taskName: string, completedAt: number }[] }} props
 */
export default function CompletedTasksScreen({ entries }) {
  const { locale, t } = useLocale()

  if (!entries.length) {
    return (
      <p className="text-stone-500 text-center py-12 px-4 m-0">
        {t('taskScreen.completionLogEmpty')}
      </p>
    )
  }

  return (
    <ul className="space-y-3 list-none m-0 p-0">
      {entries.map((e, i) => {
        const iso = new Date(e.completedAt).toISOString()
        const label = formatCompletionDate(e.completedAt, locale)
        return (
          <li
            key={`${e.completedAt}-${i}`}
            className="rounded-xl border border-stone-100 bg-stone-50/80 px-4 py-3"
          >
            <p className="text-base text-stone-800 font-medium m-0 mb-1">{e.taskName}</p>
            <time
              dateTime={iso}
              className="text-sm text-stone-500 tabular-nums"
            >
              {label}
            </time>
          </li>
        )
      })}
    </ul>
  )
}
