/** グループ（list.id）ごとに、タスクの最終完了時刻の表示／非表示。メインのタスクデータとは別キー。 */
const MAP_KEY = 'junguri-task-show-task-times-by-list'

function loadMap() {
  try {
    const raw = localStorage.getItem(MAP_KEY)
    if (raw) {
      const o = JSON.parse(raw)
      return typeof o === 'object' && o !== null && !Array.isArray(o) ? o : {}
    }
  } catch {
    /* ignore */
  }
  return {}
}

function saveMap(map) {
  try {
    localStorage.setItem(MAP_KEY, JSON.stringify(map))
  } catch {
    /* ignore */
  }
}

export function getTaskTimesVisible(listId) {
  const map = loadMap()
  if (listId != null && Object.prototype.hasOwnProperty.call(map, listId)) {
    return map[listId] === true
  }
  return true
}

export function setTaskTimesVisible(listId, visible) {
  if (listId == null) return
  const map = loadMap()
  map[listId] = visible
  saveMap(map)
}
