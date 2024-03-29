import { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext()

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches
  // console.log(prefersDarkMode)

  const storedDarkMode = localStorage.getItem('darkTheme') === 'true'

  return storedDarkMode || prefersDarkMode
}

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode)
  const [searchValue, setSearchValue] = useState('cat')

  const toggleDarkMode = () => {
    const newDarkTheme = !darkMode
    setDarkMode(newDarkTheme)

    localStorage.setItem('darkTheme', newDarkTheme)
  }

  return (
    <AppContext.Provider
      value={{ toggleDarkMode, darkMode, searchValue, setSearchValue }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
