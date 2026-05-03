import { useState, useEffect } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { LocaleProvider } from './i18n/LocaleContext'
import ListSelection from './components/ListSelection'
import TaskScreen from './components/TaskScreen'
import HelpGuide from './components/HelpGuide'

export default function App() {
  const [data, setData] = useLocalStorage()
  const [activeListId, setActiveListId] = useState(null)
  const [showHelp, setShowHelp] = useState(false)

  const handleOpenList = (listId) => setActiveListId(listId)
  const handleBack = () => setActiveListId(null)

  const activeList = data.lists.find((l) => l.id === activeListId)

  useEffect(() => {
    if (activeListId && !activeList) setActiveListId(null)
  }, [activeListId, activeList])

  const showTaskScreen = activeListId && activeList
  return (
    <LocaleProvider>
      <div className="flex min-h-dvh flex-col bg-blue-600 px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col overflow-hidden rounded-lg bg-white shadow-sm">
          {showHelp ? (
            <HelpGuide onClose={() => setShowHelp(false)} />
          ) : showTaskScreen ? (
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
              onOpenHelp={() => setShowHelp(true)}
            />
          )}
        </div>
      </div>
    </LocaleProvider>
  )
}
