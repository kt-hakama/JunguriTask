import { useState, useEffect } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import ListSelection from './components/ListSelection'
import TaskScreen from './components/TaskScreen'

export default function App() {
  const [data, setData] = useLocalStorage()
  const [activeListId, setActiveListId] = useState(null)

  const handleOpenList = (listId) => setActiveListId(listId)
  const handleBack = () => setActiveListId(null)

  const activeList = data.lists.find((l) => l.id === activeListId)

  useEffect(() => {
    if (activeListId && !activeList) setActiveListId(null)
  }, [activeListId, activeList])

  const showTaskScreen = activeListId && activeList
  return (
    <div className="min-h-dvh safe-area-pb">
      {showTaskScreen ? (
        <TaskScreen
          list={activeList}
          setData={setData}
          onBack={handleBack}
        />
      ) : (
        <ListSelection
          lists={data.lists}
          setData={setData}
          onOpenList={handleOpenList}
        />
      )}
    </div>
  )
}
