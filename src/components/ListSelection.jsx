import { useState } from 'react'
import { generateId } from '../utils/id'
import { resetAllData } from '../hooks/useLocalStorage'
import { useLocale } from '../i18n/LocaleContext'
import LanguageSwitcher from './LanguageSwitcher'
import { PencilIcon, TrashIcon } from './icons'

const MAX_LISTS = 3

export default function ListSelection({
  lists,
  setData,
  onOpenList,
  onOpenHelp,
  pendingTaskScreenListId,
  onGroupCreated,
  onDismissPending,
}) {
  const { t } = useLocale()
  const [editingId, setEditingId] = useState(null)
  const [editName, setEditName] = useState('')
  const [newListName, setNewListName] = useState('')
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const handleCreateList = () => {
    if (lists.length >= MAX_LISTS) return
    const name = newListName.trim() || t('listSelection.defaultListName')
    const newId = generateId()
    setData((prev) => ({
      ...prev,
      lists: [
        ...prev.lists,
        {
          id: newId,
          name,
          tasks: [],
          completionLog: [],
        },
      ],
    }))
    setNewListName('')
    onGroupCreated(newId)
  }

  const handleDeleteList = (listId) => {
    if (listId === pendingTaskScreenListId) onDismissPending()
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
    onDismissPending()
    resetAllData(setData)
    setShowResetConfirm(false)
  }

  return (
    <div className="flex flex-1 flex-col min-h-0 px-5 pt-6 pb-8">
      <div className="flex items-start justify-between gap-3 mb-8 mt-2">
        <h1 className="text-xl font-light text-stone-600 m-0 pr-2">
          {t('app.title')}
        </h1>
        <LanguageSwitcher className="shrink-0 mt-0.5" />
      </div>

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
                  placeholder={t('listSelection.listNamePlaceholder')}
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleSaveRename}
                    className="flex-1 py-2 rounded-xl bg-stone-200 text-stone-700 text-sm"
                  >
                    {t('common.save')}
                  </button>
                  <button
                    onClick={() => {
                      setEditingId(null)
                      setEditName('')
                    }}
                    className="flex-1 py-2 rounded-xl bg-stone-100 text-stone-600 text-sm"
                  >
                    {t('common.cancel')}
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => onOpenList(list.id)}
                  className="flex-1 px-5 py-4 text-left text-base text-stone-800 transition-opacity duration-150 hover:opacity-75"
                >
                  {list.name}
                </button>
                <div className="flex gap-0.5 pr-2">
                  <button
                    type="button"
                    onClick={() => handleStartRename(list)}
                    className="p-2 text-stone-400 hover:text-stone-600 rounded-lg flex items-center justify-center"
                    aria-label={t('listSelection.renameAria')}
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteList(list.id)}
                    className="p-2 text-stone-400 hover:text-red-500 rounded-lg flex items-center justify-center"
                    aria-label={t('listSelection.deleteListAria')}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
            {pendingTaskScreenListId === list.id && editingId !== list.id && (
              <div className="border-t border-stone-100 bg-stone-50/90 px-4 py-3">
                <p className="m-0 mb-2 text-xs leading-snug text-stone-600">
                  {t('listSelection.openTaskScreenHint')}
                </p>
                <button
                  type="button"
                  onClick={() => onOpenList(list.id)}
                  className="w-full rounded-xl bg-stone-800 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700"
                  aria-label={`${list.name} — ${t('listSelection.openTaskScreen')}`}
                >
                  {t('listSelection.openTaskScreen')}
                </button>
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
              placeholder={t('listSelection.newListPlaceholder')}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-base mb-3"
            />
            <button
              onClick={handleCreateList}
              className="w-full py-2.5 rounded-xl bg-stone-300 text-stone-700 text-sm font-medium"
            >
              {t('listSelection.createList')}
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-stone-100 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <div className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-0">
          <button
            type="button"
            onClick={() => setShowResetConfirm(true)}
            className="min-w-0 justify-self-start text-left text-sm text-stone-400 hover:text-stone-600"
          >
            {t('listSelection.deleteAllData')}
          </button>
          <button
            type="button"
            onClick={onOpenHelp}
            className="shrink-0 justify-self-end text-sm text-stone-500 underline underline-offset-2 hover:text-stone-800 whitespace-nowrap"
            aria-label={t('help.openGuide')}
          >
            {t('help.openGuide')}
          </button>
        </div>
      </div>

      {showResetConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
            <p className="text-stone-700 mb-6">
              {t('listSelection.resetConfirm')}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-3 rounded-xl bg-stone-100 text-stone-600"
              >
                {t('common.cancel')}
              </button>
              <button
                onClick={handleReset}
                className="flex-1 py-3 rounded-xl bg-red-500 text-white"
              >
                {t('common.delete')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
