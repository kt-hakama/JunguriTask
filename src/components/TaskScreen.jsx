import { useState } from 'react'
import { generateId } from '../utils/id'

export default function TaskScreen({ list, setData, onBack }) {
  if (!list) return null

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

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="flex items-center gap-3 px-4 py-3 border-b border-stone-100 bg-white/80 backdrop-blur">
        <button
          onClick={onBack}
          className="p-2 -ml-1 text-stone-500 hover:text-stone-700"
          aria-label="戻る"
        >
          ←
        </button>
        <h2 className="text-base font-medium text-stone-700 truncate flex-1">
          {list.name}
        </h2>
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

function FirstTaskCard({ task, onComplete, onSkip, onDelete, showSkip }) {
  const [showActions, setShowActions] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-md border border-stone-100 p-6">
      <div className="flex items-start justify-between gap-4">
        <p className="text-xl font-medium text-stone-800 leading-relaxed flex-1 min-w-0">
          {task.name}
        </p>
        <button
          onClick={() => setShowActions(!showActions)}
          className="p-1.5 text-stone-400 hover:text-stone-600 shrink-0"
          aria-label="その他"
        >
          ⋮
        </button>
      </div>

      {showActions && (
        <div className="mt-4 pt-4 border-t border-stone-100">
          <button
            onClick={() => {
              onDelete(task.id)
              setShowActions(false)
            }}
            className="text-sm text-red-500"
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
    </div>
  )
}

function TaskRow({ task, onDelete }) {
  const [showDelete, setShowDelete] = useState(false)

  return (
    <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-stone-100 shadow-sm transition-opacity duration-250">
      <span className="text-stone-600 text-sm truncate flex-1">{task.name}</span>
      <button
        onClick={() => setShowDelete(true)}
        className="p-1.5 text-stone-400 hover:text-red-500 text-sm shrink-0"
        aria-label="削除"
      >
        削除
      </button>
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
