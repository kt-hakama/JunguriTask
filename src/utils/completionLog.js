export const MAX_COMPLETION_LOG_ENTRIES = 20

/**
 * @param {unknown} list
 * @returns {{ taskName: string, completedAt: number }[]}
 */
export function normalizeCompletionLog(list) {
  if (!list || typeof list !== 'object') return []
  const raw = list.completionLog
  if (!Array.isArray(raw)) return []
  return raw
    .filter(
      (e) =>
        e &&
        typeof e === 'object' &&
        e.taskName != null &&
        e.completedAt != null
    )
    .map((e) => ({
      taskName: String(e.taskName),
      completedAt: Number(e.completedAt),
    }))
    .filter((e) => Number.isFinite(e.completedAt))
    .slice(0, MAX_COMPLETION_LOG_ENTRIES)
}

/**
 * 新しい完了を先頭に追加し、最大件数で古いものを捨てる（新しい順の配列）
 * @param {unknown} list
 * @param {string} taskName
 * @param {number} completedAt
 */
export function appendCompletionEntry(list, taskName, completedAt) {
  const prev = normalizeCompletionLog(list)
  const entry = { taskName, completedAt }
  return [entry, ...prev].slice(0, MAX_COMPLETION_LOG_ENTRIES)
}
