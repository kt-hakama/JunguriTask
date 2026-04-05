import { useState } from 'react'
import { generateId } from '../utils/id'
import { resetAllData } from '../hooks/useLocalStorage'
import { PencilIcon, TrashIcon } from './icons'

const MAX_LISTS = 3

export default function ListSelection({ lists, setData, onOpenList }) {
  const [editingId, setEditingId] = useState(null)
  const [editName, setEditName] = useState('')
  const [newListName, setNewListName] = useState('')
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const handleCreateList = () => {
    if (lists.length >= MAX_LISTS) return
    const name = newListName.trim() || '新しいリスト'
    setData((prev) => ({
      ...prev,
      lists: [
        ...prev.lists,
        {
          id: generateId(),
          name,
          tasks: [],
        },
      ],
    }))
    setNewListName('')
  }

  const handleDeleteList = (listId) => {
    setData((prev) => ({
      ...prev,
      lists: prev.lists.filter((l) => l.id !== listId),
    }))
    setEditingId(null)
  }

  const handleStartRename = (list) => {
    setEditingId(list.id)
    setEditName(list.name)
  }

  const handleSaveRename = () => {
    if (!editingId) return
    setData((prev) => ({
      ...prev,
      lists: prev.lists.map((l) =>
        l.id === editingId ? { ...l, name: editName.trim() || l.name } : l
      ),
    }))
    setEditingId(null)
    setEditName('')
  }

  const handleReset = () => {
    resetAllData(setData)
    setShowResetConfirm(false)
  }

  return (
    <div className="flex flex-col min-h-dvh px-5 pt-6 pb-8">
      <h1 className="text-xl font-light text-stone-600 mb-8 mt-2">
        じゅんぐりタスク
      </h1>

      <div className="flex-1 space-y-3">
        {lists.map((list) => (
          <div
            key={list.id}
            className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden"
          >
            {editingId === list.id ? (
              <div className="p-4 flex flex-col gap-3">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSaveRename()}
                  className="w-full px-4 py-2 rounded-xl border border-stone-200 text-base"
                  placeholder="リスト名"
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleSaveRename}
                    className="flex-1 py-2 rounded-xl bg-stone-200 text-stone-700 text-sm"
                  >
                    保存
                  </button>
                  <button
                    onClick={() => {
                      setEditingId(null)
                      setEditName('')
                    }}
                    className="flex-1 py-2 rounded-xl bg-stone-100 text-stone-600 text-sm"
                  >
                    キャンセル
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <button
                  onClick={() => onOpenList(list.id)}
                  className="flex-1 px-5 py-4 text-left text-base text-stone-800"
                >
                  {list.name}
                </button>
                <div className="flex gap-0.5 pr-2">
                  <button
                    type="button"
                    onClick={() => handleStartRename(list)}
                    className="p-2 text-stone-400 hover:text-stone-600 rounded-lg flex items-center justify-center"
                    aria-label="名前を変更"
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteList(list.id)}
                    className="p-2 text-stone-400 hover:text-red-500 rounded-lg flex items-center justify-center"
                    aria-label="リストを削除"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {lists.length < MAX_LISTS && (
          <div className="bg-stone-100/60 rounded-2xl border border-dashed border-stone-200 p-4">
            <input
              type="text"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCreateList()}
              placeholder="リスト名を入力"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-base mb-3"
            />
            <button
              onClick={handleCreateList}
              className="w-full py-2.5 rounded-xl bg-stone-300 text-stone-700 text-sm font-medium"
            >
              リストを作成
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-stone-100">
        <button
          onClick={() => setShowResetConfirm(true)}
          className="text-sm text-stone-400 hover:text-stone-600"
        >
          すべてのデータを削除
        </button>
      </div>

      {showResetConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
            <p className="text-stone-700 mb-6">
              すべてのリストとタスクが削除されます。よろしいですか？
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-3 rounded-xl bg-stone-100 text-stone-600"
              >
                キャンセル
              </button>
              <button
                onClick={handleReset}
                className="flex-1 py-3 rounded-xl bg-red-500 text-white"
              >
                削除する
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
