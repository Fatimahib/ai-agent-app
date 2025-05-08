// src/hooks/useTranscription.jsx
import { useState } from 'react'
import { transcribeAudio } from '../services/openai'
import { useApp } from '../context/AppContext'

export function useTranscription() {
  const { apiKey } = useApp()
  const [isTranscribing, setIsTranscribing] = useState(false)
  const [transcription, setTranscription] = useState('')
  const [error, setError] = useState(null)

  const transcribe = async (audioFile) => {
    if (!audioFile) return
    
    setIsTranscribing(true)
    setError(null)
    
    try {
      const result = await transcribeAudio(apiKey, audioFile)
      setTranscription(result)
      return result
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setIsTranscribing(false)
    }
  }

  return { transcribe, isTranscribing, transcription, error }
}