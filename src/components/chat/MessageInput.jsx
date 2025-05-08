// src/components/chat/Message.jsx

import { useState, useRef, useEffect } from 'react'
import { MicrophoneIcon, StopIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid'

export default function MessageInput({ value, onChange, onSend, disabled }) {
  const [isRecording, setIsRecording] = useState(false)
  const [micError, setMicError] = useState('')
  const recognitionRef = useRef(null)

  const handleRecord = async () => {
    if (isRecording) {
      recognitionRef.current.stop()
      setIsRecording(false)
      setMicError('')
    } else {
      try {
        // Request microphone permission first
        await navigator.mediaDevices.getUserMedia({ audio: true })
        recognitionRef.current.start()
        setIsRecording(true)
        setMicError('')
      } catch (error) {
        console.error('Error accessing microphone:', error)
        setIsRecording(false)
        if (error.name === 'NotFoundError') {
          setMicError('No microphone found. Please connect a microphone and try again.')
        } else if (error.name === 'NotAllowedError') {
          setMicError('Microphone access was denied. Please allow microphone access in your browser settings.')
        } else {
          setMicError('Error accessing microphone. Please check your microphone connection.')
        }
      }
    }
  }

  useEffect(() => {
    // Initialize speech recognition
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = false
        recognitionRef.current.interimResults = false
        recognitionRef.current.lang = 'en-US'

        recognitionRef.current.onresult = (event) => {
          const transcript = event.results[0][0].transcript
          onChange(transcript)
          setIsRecording(false)
        }

        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error', event.error)
          setIsRecording(false)
        }

        recognitionRef.current.onend = () => {
          setIsRecording(false)
        }
      } else {
        console.warn('Speech recognition not supported in this browser')
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [onChange])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSend()
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <button
          onClick={handleRecord}
          className={`p-2 rounded-full ${
            isRecording 
              ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white animate-pulse' 
              : 'bg-gray-200 dark:bg-[#3A1D66] text-gray-700 dark:text-gray-300'
          } hover:bg-gray-300 dark:hover:bg-[#4B2785] transition-colors`}
          aria-label={isRecording ? 'Stop recording' : 'Start recording'}
          disabled={disabled}
        >
          {isRecording ? (
            <StopIcon className="h-5 w-5" />
          ) : (
            <MicrophoneIcon className="h-5 w-5" />
          )}
        </button>

        <input
          type="text"
          className="flex-1 border border-gray-300 dark:border-[#3A1D66] rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#6E56CF] bg-white dark:bg-[#1A1233] text-gray-800 dark:text-gray-200"
          placeholder="Type or speak your message..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={onSend}
          disabled={disabled || !value.trim()}
          className="p-2 rounded-full bg-[#6E56CF] text-white hover:bg-[#7D65DF] focus:outline-none focus:ring-2 focus:ring-[#6E56CF] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
          aria-label="Send message"
        >
          <PaperAirplaneIcon className="h-5 w-5 transform -rotate-45" />
        </button>
      </div>
      {micError && (
        <p className="text-red-500 text-sm mt-1">{micError}</p>
      )}
    </div>
  )
}