// src/components/profile/APIKeyManager.jsx
import { useState } from 'react'
import { useApp } from '../../context/AppContext'

export default function APIKeyManager() {
  const { apiKey, saveApiKey, removeApiKey } = useApp()
  const [inputKey, setInputKey] = useState('')
  const [status, setStatus] = useState({ message: '', isError: false })
  const [showKey, setShowKey] = useState(false)

  const handleSave = () => {
    if (!inputKey.trim()) {
      setStatus({ message: 'API key cannot be empty', isError: true })
      return
    }

    if (!inputKey.startsWith('sk-')) {
      setStatus({ message: 'Invalid API key format', isError: true })
      return
    }

    saveApiKey(inputKey)
    setInputKey('')
    setStatus({ message: 'API key saved successfully', isError: false })
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="relative">
        {/* Gradient background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6E56CF]/10 to-[#9B8AFF]/10 rounded-2xl opacity-60 blur-xl"></div>
        
        {/* Main card */}
        <div className="relative bg-white dark:bg-[#1A1233] rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-[#2D1B4D]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">API Settings</h2>
            <div className="p-2 bg-[#6E56CF]/10 rounded-full">
              <svg className="w-6 h-6 text-[#6E56CF] dark:text-[#9B8AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                OpenAI API Key
              </label>
              <div className="relative">
                <input
                  type={showKey ? "text" : "password"}
                  value={inputKey}
                  onChange={(e) => setInputKey(e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-[#1A1233] border border-gray-200 dark:border-[#2D1B4D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6E56CF] focus:border-transparent dark:text-white"
                  placeholder="sk-...your-api-key"
                />
                <button 
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showKey ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Your key is stored securely in your browser's local storage
              </p>
            </div>

            {status.message && (
              <div className={`p-3 rounded-lg ${status.isError ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300' : 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-300'}`}>
                {status.message}
              </div>
            )}

            <div className="flex space-x-3">
              <button
                onClick={handleSave}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-[#6E56CF] to-[#9B8AFF] text-white font-medium rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#6E56CF] focus:ring-offset-2 transition-all"
              >
                Save Key
              </button>
              
              {apiKey && (
                <button
                  onClick={removeApiKey}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all"
                >
                  Remove Key
                </button>
              )}
            </div>

            {apiKey && (
              <div className="p-4 bg-gray-50 dark:bg-[#2D1B4D] rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Current Key:</p>
                  <button 
                    onClick={() => navigator.clipboard.writeText(apiKey)}
                    className="text-xs text-[#6E56CF] dark:text-[#9B8AFF] hover:underline"
                  >
                    Copy
                  </button>
                </div>
                <div className="p-3 bg-white dark:bg-[#1A1233] rounded-md">
                  <p className="text-xs font-mono text-gray-600 dark:text-gray-300 break-all">
                    {apiKey.substring(0, 5)}...{apiKey.substring(apiKey.length - 4)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

