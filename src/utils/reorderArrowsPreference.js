/** 「このあと」の並べ替え矢印の表示（全リスト共通）。メインのタスクデータとは別キー。 */
export const REORDER_ARROWS_STORAGE_KEY = 'junguri-task-show-reorder-arrows'

export function getReorderArrowsVisible() {
  try {
    const v = localStorage.getItem(REORDER_ARROWS_STORAGE_KEY)
    if (v === null) return true
    return v === 'true'
  } catch {
    return true
  }
}

export function setReorderArrowsVisible(visible) {
  try {
    localStorage.setItem(REORDER_ARROWS_STORAGE_KEY, visible ? 'true' : 'false')
  } catch {
    /* ignore */
  }
}
