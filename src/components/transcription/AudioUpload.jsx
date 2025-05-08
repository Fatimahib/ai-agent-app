// src/components/transcription/AudioUpload.jsx

import { useCallback, useState } from 'react'
import { useTranscription } from '../../hooks/useTranscription'

export default function AudioUpload({ onTranscriptionComplete, onTranscriptionStart }) {
  const { transcribe, isTranscribing, error } = useTranscription()
  const [file, setFile] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const [localError, setLocalError] = useState(null)

  const handleDrag = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0]
      validateFile(droppedFile)
    }
  }, [])

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      validateFile(selectedFile)
    }
  }

  const validateFile = (file) => {
    const validTypes = ['audio/mpeg', 'audio/wav', 'audio/x-m4a', 'audio/mp4']
    
    if (!validTypes.includes(file.type)) {
      setLocalError('Invalid file type. Please upload MP3, WAV, or M4A files.')
      return
    }

    if (file.size > 25 * 1024 * 1024) {
      setLocalError('File size too large (max 25MB)')
      return
    }

    setLocalError(null)
    setFile(file)
  }

  const handleSubmit = async () => {
    if (!file) return
    
    try {
      onTranscriptionStart?.()
      const result = await transcribe(file)
      onTranscriptionComplete?.(result)
    } catch (err) {
      console.error('Transcription error:', err)
    }
  }

  return (
    <div className="space-y-6">
      <div 
        className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all ${
          dragActive ? 'border-[#6E56CF] bg-[#6E56CF]/5' : 'border-[#6E56CF]/30'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6E56CF]/5 to-[#9B8AFF]/5 opacity-60"></div>
        <input
          type="file"
          id="audio-upload"
          className="hidden"
          accept="audio/*,.mp3,.wav,.m4a"
          onChange={handleChange}
        />
        <label htmlFor="audio-upload" className="cursor-pointer relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4">
          <div className="p-4 bg-[#6E56CF]/10 rounded-full">
              <svg 
                className="w-10 h-10 text-[#6E56CF]" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M17 8L12 3M12 3L7 8M12 3V15" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-800 dark:text-white">
                {file ? file.name : 'Drag & drop audio file (MP3, WAV, M4A)'}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {file ? 'Click the button below to transcribe' : 'or click to browse files'}
              </p>
            </div>
          </div>
        </label>
      </div>

      {(error || localError) && (
        <div className="text-red-500 text-sm p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
          {error?.includes('API key') ? (
            <>
              {error}. Please set your API key in the Profile section.
            </>
          ) : error || localError}
        </div>
      )}

      {file && !localError && (
        <button
          onClick={handleSubmit}
          disabled={isTranscribing}
          className="w-full py-3 px-6 bg-gradient-to-r from-[#6E56CF] to-[#9B8AFF] text-white font-medium rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#6E56CF] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isTranscribing ? (
            <span className="flex items-center justify-center">
              <span className="animate-pulse mr-2">⚡</span>
              Transcribing...
            </span>
          ) : (
            'Transcribe Audio'
          )}
        </button>
      )}
    </div>
  )
}