import { useState, useEffect } from 'react'
import { generateId } from '../utils/id'
import {
  PencilIcon,
  TrashIcon,
  ClockIcon,
  ClockToggleBadge,
  ArrowUpIcon,
  ArrowDownIcon,
  ReorderArrowsBadge,
} from './icons'
import { formatCompletionDate } from '../utils/formatCompletionDate'
import {
  getReorderArrowsVisible,
  setReorderArrowsVisible,
} from '../utils/reorderArrowsPreference'
import {
  getTaskTimesVisible,
  setTaskTimesVisible,
} from '../utils/taskTimeVisibilityPreference'
import { useLocale } from '../i18n/LocaleContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function TaskScreen({ list, setData, onBack }) {
  const { t } = useLocale()
  if (!list) return null

  const [listNameEditing, setListNameEditing] = useState(false)
  const [listNameDraft, setListNameDraft] = useState('')
  const [showReorderArrows, setShowReorderArrows] = useState(() =>
    getReorderArrowsVisible(list.id)
  )
  const [showTaskTimes, setShowTaskTimes] = useState(() =>
    getTaskTimesVisible(list.id)
  )

  useEffect(() => {
    setListNameEditing(false)
    setListNameDraft('')
  }, [list.id])

  useEffect(() => {
    setShowReorderArrows(getReorderArrowsVisible(list.id))
    setShowTaskTimes(getTaskTimesVisible(list.id))
  }, [list.id])

  useEffect(() => {
    setReorderArrowsVisible(list.id, showReorderArrows)
  }, [list.id, showReorderArrows])

  useEffect(() => {
    setTaskTimesVisible(list.id, showTaskTimes)
  }, [list.id, showTaskTimes])

  const tasks = list.tasks || []
  const firstTask = tasks[0]
  const remainingTasks = tasks.slice(1)
  const isEmpty = tasks.length === 0
  const isSingle = tasks.length === 1

  const updateList = (updater) => {
    setData((prev) => ({
      ...prev,
      lists: prev.lists.map((l) =>
        l.id === list.id ? updater(l) : l
      ),
    }))
  }

  const handleComplete = () => {
    if (isEmpty) return
    if (isSingle) {
      updateList((l) => ({
        ...l,
        tasks: l.tasks.map((t) =>
          t.id === firstTask.id
            ? { ...t, lastCompletedAt: Date.now() }
            : t
        ),
      }))
    } else {
      const [head, ...tail] = tasks
      updateList((l) => ({
        ...l,
        tasks: [...tail, { ...head, lastCompletedAt: Date.now() }],
      }))
    }
  }

  const handleSkip = () => {
    if (isEmpty || isSingle) return
    const [head, ...tail] = tasks
    updateList((l) => ({
      ...l,
      tasks: [...tail, head],
    }))
  }

  const handleAddTask = (name) => {
    const trimmed = name.trim()
    if (!trimmed) return
    updateList((l) => ({
      ...l,
      tasks: [
        ...l.tasks,
        { id: generateId(), name: trimmed, lastCompletedAt: null },
      ],
    }))
  }

  const handleDeleteTask = (taskId) => {
    updateList((l) => ({
      ...l,
      tasks: l.tasks.filter((t) => t.id !== taskId),
    }))
  }

  const handleRenameTask = (taskId, newName) => {
    const trimmed = newName.trim()
    updateList((l) => ({
      ...l,
      tasks: l.tasks.map((t) =>
        t.id === taskId ? { ...t, name: trimmed || t.name } : t
      ),
    }))
  }

  /** 「このあと」同士のみ入れ替え。tasks[0] とは入れ替えない。 */
  const handleMoveTaskInTail = (taskId, direction) => {
    updateList((l) => {
      const i = l.tasks.findIndex((t) => t.id === taskId)
      if (i < 1) return l
      const j = direction === 'up' ? i - 1 : i + 1
      if (j < 1 || j >= l.tasks.length) return l
      const next = [...l.tasks]
      ;[next[i], next[j]] = [next[j], next[i]]
      return { ...l, tasks: next }
    })
  }

  const startListNameEdit = () => {
    setListNameDraft(list.name)
    setListNameEditing(true)
  }

  const saveListName = () => {
    const trimmed = listNameDraft.trim()
    setData((prev) => ({
      ...prev,
      lists: prev.lists.map((l) =>
        l.id === list.id ? { ...l, name: trimmed || l.name } : l
      ),
    }))
    setListNameEditing(false)
  }

  const cancelListNameEdit = () => {
    setListNameEditing(false)
    setListNameDraft('')
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="flex items-center gap-2 px-4 py-3 border-b border-stone-100 bg-white/80 backdrop-blur">
        <button
          onClick={onBack}
          className="p-2 -ml-1 text-stone-500 hover:text-stone-700 shrink-0"
          aria-label={t('taskScreen.back')}
        >
          ←
        </button>
        {listNameEditing ? (
          <>
            <div className="flex flex-1 flex-wrap items-center gap-2 min-w-0">
              <input
                type="text"
                value={listNameDraft}
                onChange={(e) => setListNameDraft(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && saveListName()}
                className="flex-1 min-w-[8rem] px-3 py-2 rounded-lg border border-stone-200 text-base text-stone-800"
                autoFocus
              />
              <button
                type="button"
                onClick={saveListName}
                className="px-3 py-2 rounded-lg bg-stone-800 text-white text-sm shrink-0"
              >
                {t('common.save')}
              </button>
              <button
                type="button"
                onClick={cancelListNameEdit}
                className="px-3 py-2 rounded-lg bg-stone-100 text-stone-600 text-sm shrink-0"
              >
                {t('common.cancel')}
              </button>
            </div>
            <LanguageSwitcher className="shrink-0" />
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={startListNameEdit}
              className="text-base font-medium text-stone-700 truncate flex-1 min-w-0 text-left py-1 rounded-lg hover:bg-stone-50"
              aria-label={t('taskScreen.editListNameTap')}
            >
              {list.name}
            </button>
            {!isEmpty && isSingle && (
              <button
                type="button"
                onClick={() => setShowTaskTimes((v) => !v)}
                className="p-1.5 rounded-lg border border-stone-200 text-stone-500 hover:bg-stone-50 hover:text-stone-700 shrink-0 flex items-center justify-center"
                aria-pressed={showTaskTimes}
                aria-label={
                  showTaskTimes
                    ? t('taskScreen.lastCompletedHide')
                    : t('taskScreen.lastCompletedShow')
                }
              >
                <ClockToggleBadge active={showTaskTimes} />
              </button>
            )}
            <LanguageSwitcher className="shrink-0" />
            <button
              type="button"
              onClick={startListNameEdit}
              className="p-2 text-stone-400 hover:text-stone-700 shrink-0 rounded-lg flex items-center justify-center"
              aria-label={t('taskScreen.editListName')}
            >
              <PencilIcon className="h-5 w-5" />
            </button>
          </>
        )}
      </header>

      <main className="flex-1 overflow-auto px-4 py-6">
        {isEmpty ? (
          <EmptyState onAddTask={handleAddTask} emptyPrompt={t('taskScreen.emptyPrompt')} taskNamePlaceholder={t('taskScreen.taskNamePlaceholder')} addTaskLabel={t('taskScreen.addTask')} />
        ) : (
          <>
            <div className="mb-6 animate-task-enter" key={firstTask.id}>
              <FirstTaskCard
                task={firstTask}
                onComplete={handleComplete}
                onSkip={handleSkip}
                onDelete={handleDeleteTask}
                onRename={handleRenameTask}
                showSkip={!isSingle}
                showCompletionTime={showTaskTimes}
              />
            </div>

            {remainingTasks.length > 0 && (
              <div className="space-y-2 animate-task-enter">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <p className="text-sm text-stone-400 shrink-0 m-0">
                    {t('taskScreen.upNext')}
                  </p>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => setShowTaskTimes((v) => !v)}
                      className="p-1.5 rounded-lg border border-stone-200 text-stone-500 hover:bg-stone-50 hover:text-stone-700 flex items-center justify-center"
                      aria-pressed={showTaskTimes}
                      aria-label={
                        showTaskTimes
                          ? t('taskScreen.lastCompletedHide')
                          : t('taskScreen.lastCompletedShow')
                      }
                    >
                      <ClockToggleBadge active={showTaskTimes} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowReorderArrows((v) => !v)}
                      className="p-1.5 rounded-lg border border-stone-200 text-stone-500 hover:bg-stone-50 hover:text-stone-700 flex items-center justify-center"
                      aria-pressed={showReorderArrows}
                      aria-label={
                        showReorderArrows
                          ? t('taskScreen.reorderHide')
                          : t('taskScreen.reorderShow')
                      }
                    >
                      <ReorderArrowsBadge active={showReorderArrows} />
                    </button>
                  </div>
                </div>
                {remainingTasks.map((task) => {
                  const idx = tasks.findIndex((t) => t.id === task.id)
                  return (
                    <TaskRow
                      key={task.id}
                      task={task}
                      onDelete={handleDeleteTask}
                      onRename={handleRenameTask}
                      showReorderArrows={showReorderArrows}
                      showCompletionTime={showTaskTimes}
                      canMoveUp={idx >= 2}
                      canMoveDown={idx >= 1 && idx < tasks.length - 1}
                      onMoveUp={() => handleMoveTaskInTail(task.id, 'up')}
                      onMoveDown={() => handleMoveTaskInTail(task.id, 'down')}
                    />
                  )
                })}
              </div>
            )}

            <AddTaskForm
              onAdd={handleAddTask}
              newTaskPlaceholder={t('taskScreen.newTaskPlaceholder')}
              addTaskLabel={t('taskScreen.addTask')}
            />
          </>
        )}
      </main>
    </div>
  )
}

function CompletionDateLine({ completedAt, className = '' }) {
  const { locale, t } = useLocale()
  if (completedAt == null) return null
  const ms = Number(completedAt)
  if (!Number.isFinite(ms)) return null
  const text = formatCompletionDate(ms, locale)
  if (!text) return null
  const iso = new Date(ms).toISOString()
  return (
    <p
      className={`flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-sm text-stone-400 w-full min-w-0 ${className}`}
      role="status"
      aria-label={`${t('task.lastCompletedPrefix')} ${text}`}
    >
      <ClockIcon className="h-4 w-4 shrink-0" />
      <time dateTime={iso} className="tabular-nums min-w-0">
        {text}
      </time>
    </p>
  )
}

function EmptyState({
  onAddTask,
  emptyPrompt,
  taskNamePlaceholder,
  addTaskLabel,
}) {
  const [name, setName] = useState('')

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <p className="text-stone-500 mb-6 text-lg">{emptyPrompt}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onAddTask(name)}
        placeholder={taskNamePlaceholder}
        className="w-full max-w-sm px-4 py-3 rounded-xl border border-stone-200 mb-3"
      />
      <button
        onClick={() => onAddTask(name)}
        className="w-full max-w-sm py-3 rounded-xl bg-stone-800 text-white font-medium"
      >
        {addTaskLabel}
      </button>
    </div>
  )
}

function FirstTaskCard({
  task,
  onComplete,
  onSkip,
  onDelete,
  onRename,
  showSkip,
  showCompletionTime,
}) {
  const { t } = useLocale()
  const [showActions, setShowActions] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editName, setEditName] = useState('')

  const startEdit = () => {
    setEditName(task.name)
    setIsEditing(true)
    setShowActions(false)
  }

  const saveEdit = () => {
    onRename(task.id, editName)
    setIsEditing(false)
    setEditName('')
  }

  const cancelEdit = () => {
    setIsEditing(false)
    setEditName('')
  }

  return (
    <div className="bg-white rounded-2xl shadow-md border border-stone-100 p-6">
      {isEditing ? (
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && saveEdit()}
            className="w-full px-4 py-3 rounded-xl border border-stone-200 text-lg text-stone-800"
            autoFocus
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={saveEdit}
              className="flex-1 py-3 rounded-xl bg-stone-800 text-white font-medium"
            >
              {t('common.save')}
            </button>
            <button
              type="button"
              onClick={cancelEdit}
              className="flex-1 py-3 rounded-xl bg-stone-100 text-stone-600"
            >
              {t('common.cancel')}
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between gap-4">
            <button
              type="button"
              onClick={startEdit}
              className="text-xl font-medium text-stone-800 leading-relaxed flex-1 min-w-0 text-left rounded-xl py-1 -my-1 px-1 -mx-1 hover:bg-stone-50 active:bg-stone-100"
              aria-label={t('task.editNameTap')}
            >
              {task.name}
            </button>
            <button
              type="button"
              onClick={() => setShowActions(!showActions)}
              className="p-1.5 text-stone-400 hover:text-stone-600 shrink-0"
              aria-label={t('task.more')}
            >
              ⋮
            </button>
          </div>

          {showCompletionTime && (
            <CompletionDateLine completedAt={task.lastCompletedAt} className="mt-3" />
          )}

          {showActions && (
            <div className="mt-4 pt-4 border-t border-stone-100 flex flex-col gap-1">
              <button
                type="button"
                onClick={startEdit}
                className="p-2 text-stone-500 hover:text-stone-700 rounded-lg flex items-center gap-2"
                aria-label={t('task.editName')}
              >
                <PencilIcon className="h-5 w-5 shrink-0" />
              </button>
              <button
                type="button"
                onClick={() => {
                  onDelete(task.id)
                  setShowActions(false)
                }}
                className="p-2 text-red-500 hover:text-red-600 rounded-lg flex items-center gap-2"
                aria-label={t('task.deleteTask')}
              >
                <TrashIcon className="h-5 w-5 shrink-0" />
              </button>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <button
              onClick={onComplete}
              className="flex-1 py-3.5 rounded-xl bg-stone-800 text-white font-medium text-base"
            >
              {t('task.done')}
            </button>
            {showSkip && (
              <button
                onClick={onSkip}
                className="px-5 py-3.5 rounded-xl border border-stone-200 text-stone-600 text-sm"
              >
                {t('task.skip')}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

function TaskRow({
  task,
  onDelete,
  onRename,
  showReorderArrows,
  showCompletionTime,
  canMoveUp,
  canMoveDown,
  onMoveUp,
  onMoveDown,
}) {
  const { t } = useLocale()
  const [showDelete, setShowDelete] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editName, setEditName] = useState('')

  const startEdit = () => {
    setEditName(task.name)
    setIsEditing(true)
  }

  const saveEdit = () => {
    onRename(task.id, editName)
    setIsEditing(false)
    setEditName('')
  }

  const cancelEdit = () => {
    setIsEditing(false)
    setEditName('')
  }

  return (
    <div className="flex flex-col gap-2 bg-white rounded-xl px-4 py-3 border border-stone-100 shadow-sm transition-opacity duration-250">
      {isEditing ? (
        <div className="flex flex-col gap-2 w-full min-w-0">
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && saveEdit()}
            className="w-full px-3 py-2 rounded-lg border border-stone-200 text-sm text-stone-800"
            autoFocus
          />
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={cancelEdit}
              className="px-3 py-2 rounded-lg bg-stone-100 text-stone-600 text-sm"
            >
              {t('common.cancel')}
            </button>
            <button
              type="button"
              onClick={saveEdit}
              className="px-3 py-2 rounded-lg bg-stone-800 text-white text-sm"
            >
              {t('common.save')}
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-stretch gap-2 min-w-0">
            {showReorderArrows && (
              <div className="flex flex-col justify-center gap-1 shrink-0">
                <button
                  type="button"
                  disabled={!canMoveUp}
                  onClick={onMoveUp}
                  className="min-h-9 min-w-9 flex items-center justify-center rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                  aria-label={t('task.moveUp')}
                >
                  <ArrowUpIcon className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  disabled={!canMoveDown}
                  onClick={onMoveDown}
                  className="min-h-9 min-w-9 flex items-center justify-center rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                  aria-label={t('task.moveDown')}
                >
                  <ArrowDownIcon className="h-5 w-5" />
                </button>
              </div>
            )}
            <div className="flex-1 min-w-0 flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2 min-w-0">
                <button
                  type="button"
                  onClick={startEdit}
                  className="text-stone-600 text-sm truncate flex-1 min-w-0 text-left rounded-lg py-1.5 pl-0 pr-2 hover:bg-stone-50 active:bg-stone-100"
                  aria-label={t('task.editNameTap')}
                >
                  {task.name}
                </button>
                <div className="flex items-center shrink-0 gap-1">
                  <button
                    type="button"
                    onClick={startEdit}
                    className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg flex items-center justify-center"
                    aria-label={t('task.edit')}
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDelete(true)}
                    className="p-1.5 text-stone-400 hover:text-red-500 rounded-lg flex items-center justify-center"
                    aria-label={t('task.delete')}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              {showCompletionTime && (
                <CompletionDateLine completedAt={task.lastCompletedAt} />
              )}
            </div>
          </div>
        </>
      )}
      {showDelete && (
        <div className="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
            <p className="text-stone-700 mb-6">{t('task.deleteConfirm')}</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDelete(false)}
                className="flex-1 py-3 rounded-xl bg-stone-100 text-stone-600"
              >
                {t('common.cancel')}
              </button>
              <button
                onClick={() => {
                  onDelete(task.id)
                  setShowDelete(false)
                }}
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

function AddTaskForm({ onAdd, newTaskPlaceholder, addTaskLabel }) {
  const [name, setName] = useState('')

  const handleSubmit = () => {
    if (!name.trim()) return
    onAdd(name)
    setName('')
  }

  return (
    <div className="mt-8 pt-6 border-t border-stone-100">
      <div className="flex gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder={newTaskPlaceholder}
          className="flex-1 px-4 py-3 rounded-xl border border-stone-200 text-base"
        />
        <button
          onClick={handleSubmit}
          className="px-5 py-3 rounded-xl bg-stone-200 text-stone-700 font-medium shrink-0"
        >
          {addTaskLabel}
        </button>
      </div>
    </div>
  )
}
