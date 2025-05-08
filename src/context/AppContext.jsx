
// src/context/AppContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [apiKey, setApiKey] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedApiKey = localStorage.getItem('openai_api_key')
    const savedTheme = localStorage.getItem('theme')
    
    if (savedApiKey) setApiKey(savedApiKey)
    
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

//   const saveApiKey = (key) => {
//     localStorage.setItem('openai_api_key', key)
//     setApiKey(key)
//   }

   const saveApiKey = (key) => {
    if (!key || typeof key !== 'string') {
      throw new Error('Invalid API key')
    }
    const trimmedKey = key.trim()
    localStorage.setItem('openai_api_key', trimmedKey)
    setApiKey(trimmedKey)
  }

  const removeApiKey = () => {
    localStorage.removeItem('openai_api_key')
    setApiKey('')
  }

  return (
    <AppContext.Provider value={{ 
      apiKey, 
      saveApiKey, 
      removeApiKey,
      darkMode,
      toggleDarkMode
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}