import { useState, useEffect } from 'react'
import { generateId } from '../utils/id'

export default function TaskScreen({ list, setData, onBack }) {
  if (!list) return null

  const [listNameEditing, setListNameEditing] = useState(false)
  const [listNameDraft, setListNameDraft] = useState('')

  useEffect(() => {
    setListNameEditing(false)
    setListNameDraft('')
  }, [list.id])

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
          aria-label="戻る"
        >
          ←
        </button>
        {listNameEditing ? (
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
              保存
            </button>
            <button
              type="button"
              onClick={cancelListNameEdit}
              className="px-3 py-2 rounded-lg bg-stone-100 text-stone-600 text-sm shrink-0"
            >
              キャンセル
            </button>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={startListNameEdit}
              className="text-base font-medium text-stone-700 truncate flex-1 min-w-0 text-left py-1 rounded-lg hover:bg-stone-50"
              aria-label="リスト名を編集（タップ）"
            >
              {list.name}
            </button>
            <button
              type="button"
              onClick={startListNameEdit}
              className="text-sm text-stone-500 hover:text-stone-700 shrink-0 py-2"
            >
              編集
            </button>
          </>
        )}
      </header>

      <main className="flex-1 overflow-auto px-4 py-6">
        {isEmpty ? (
          <EmptyState onAddTask={handleAddTask} />
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
              />
            </div>

            {remainingTasks.length > 0 && (
              <div className="space-y-2 animate-task-enter">
                <p className="text-sm text-stone-400 mb-3">このあと</p>
                {remainingTasks.map((task) => (
                  <TaskRow
                    key={task.id}
                    task={task}
                    onDelete={handleDeleteTask}
                    onRename={handleRenameTask}
                  />
                ))}
              </div>
            )}

            <AddTaskForm onAdd={handleAddTask} />
          </>
        )}
      </main>
    </div>
  )
}

function EmptyState({ onAddTask }) {
  const [name, setName] = useState('')

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <p className="text-stone-500 mb-6 text-lg">
        最初のタスクを追加しましょう
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onAddTask(name)}
        placeholder="タスク名"
        className="w-full max-w-sm px-4 py-3 rounded-xl border border-stone-200 mb-3"
      />
      <button
        onClick={() => onAddTask(name)}
        className="w-full max-w-sm py-3 rounded-xl bg-stone-800 text-white font-medium"
      >
        タスク追加
      </button>
    </div>
  )
}

function FirstTaskCard({ task, onComplete, onSkip, onDelete, onRename, showSkip }) {
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
              保存
            </button>
            <button
              type="button"
              onClick={cancelEdit}
              className="flex-1 py-3 rounded-xl bg-stone-100 text-stone-600"
            >
              キャンセル
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
              aria-label="タスク名を編集（タップ）"
            >
              {task.name}
            </button>
            <button
              type="button"
              onClick={() => setShowActions(!showActions)}
              className="p-1.5 text-stone-400 hover:text-stone-600 shrink-0"
              aria-label="その他"
            >
              ⋮
            </button>
          </div>

          {showActions && (
            <div className="mt-4 pt-4 border-t border-stone-100 flex flex-col gap-3">
              <button
                type="button"
                onClick={startEdit}
                className="text-sm text-stone-600 text-left"
              >
                名前を編集
              </button>
              <button
                type="button"
                onClick={() => {
                  onDelete(task.id)
                  setShowActions(false)
                }}
                className="text-sm text-red-500 text-left"
              >
                タスクを削除
              </button>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <button
              onClick={onComplete}
              className="flex-1 py-3.5 rounded-xl bg-stone-800 text-white font-medium text-base"
            >
              完了
            </button>
            {showSkip && (
              <button
                onClick={onSkip}
                className="px-5 py-3.5 rounded-xl border border-stone-200 text-stone-600 text-sm"
              >
                スキップ
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

function TaskRow({ task, onDelete, onRename }) {
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
    <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-stone-100 shadow-sm transition-opacity duration-250 gap-2">
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
              キャンセル
            </button>
            <button
              type="button"
              onClick={saveEdit}
              className="px-3 py-2 rounded-lg bg-stone-800 text-white text-sm"
            >
              保存
            </button>
          </div>
        </div>
      ) : (
        <>
          <button
            type="button"
            onClick={startEdit}
            className="text-stone-600 text-sm truncate flex-1 min-w-0 text-left rounded-lg py-1.5 pl-0 pr-2 hover:bg-stone-50 active:bg-stone-100"
            aria-label="タスク名を編集（タップ）"
          >
            {task.name}
          </button>
          <div className="flex items-center shrink-0 gap-1">
            <button
              type="button"
              onClick={startEdit}
              className="p-1.5 text-stone-400 hover:text-stone-700 text-sm"
              aria-label="編集"
            >
              編集
            </button>
            <button
              type="button"
              onClick={() => setShowDelete(true)}
              className="p-1.5 text-stone-400 hover:text-red-500 text-sm"
              aria-label="削除"
            >
              削除
            </button>
          </div>
        </>
      )}
      {showDelete && (
        <div className="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
            <p className="text-stone-700 mb-6">このタスクを削除しますか？</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDelete(false)}
                className="flex-1 py-3 rounded-xl bg-stone-100 text-stone-600"
              >
                キャンセル
              </button>
              <button
                onClick={() => {
                  onDelete(task.id)
                  setShowDelete(false)
                }}
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

function AddTaskForm({ onAdd }) {
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
          placeholder="新しいタスク"
          className="flex-1 px-4 py-3 rounded-xl border border-stone-200 text-base"
        />
        <button
          onClick={handleSubmit}
          className="px-5 py-3 rounded-xl bg-stone-200 text-stone-700 font-medium shrink-0"
        >
          タスク追加
        </button>
      </div>
    </div>
  )
}
