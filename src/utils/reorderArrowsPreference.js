/** グループ（list.id）ごとに「このあと」の並べ替え矢印の表示。旧・全件共通キーから移行あり。 */
const LEGACY_KEY = 'junguri-task-show-reorder-arrows'
const MAP_KEY = 'junguri-task-show-reorder-arrows-by-list'

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

export function getReorderArrowsVisible(listId) {
  const map = loadMap()
  if (listId != null && Object.prototype.hasOwnProperty.call(map, listId)) {
    return map[listId] === true
  }
  try {
    const v = localStorage.getItem(LEGACY_KEY)
    if (v !== null) return v === 'true'
  } catch {
    /* ignore */
  }
  return true
}

export function setReorderArrowsVisible(listId, visible) {
  if (listId == null) return
  const map = loadMap()
  map[listId] = visible
  saveMap(map)
}
