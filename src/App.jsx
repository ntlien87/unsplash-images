import clsx from 'clsx'
import { ThemeToggle, SearchForm, Gallery } from './components'
import { useAppContext } from './context'

const App = () => {

  const {darkMode} = useAppContext()

  return (
    <main
      className={clsx('min-h-screen transition-colors duration-500', { 'dark': darkMode, 'light': !darkMode })}
     
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <ThemeToggle />
        <SearchForm />
        <Gallery />
      </div>
    </main>
  )
}
export default App
