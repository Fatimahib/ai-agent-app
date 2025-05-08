// // src/pages/Transcription.jsx
// import { useState } from 'react'
// import AudioUpload from '../components/transcription/AudioUpload'
// import ProgressIndicator from '../components/transcription/ProgressIndicator'
// import TranscriptionViewer from '../components/transcription/TranscriptionViewer'

// export default function Transcription() {
//   const [transcription, setTranscription] = useState('')

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-3xl">
//       <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Audio Transcription</h1>
      
//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//         <AudioUpload onTranscriptionComplete={setTranscription} />
        
//         <TranscriptionViewer transcription={transcription} />
//       </div>
//     </div>
//   )
// }

// src/pages/Transcription.jsx

import { useState } from 'react'
import AudioUpload from '../components/transcription/AudioUpload'
import ProgressIndicator from '../components/transcription/ProgressIndicator'
import TranscriptionViewer from '../components/transcription/TranscriptionViewer'

export default function Transcription() {
  const [transcription, setTranscription] = useState('')
  const [isTranscribing, setIsTranscribing] = useState(false)

  const handleTranscriptionStart = () => {
    setIsTranscribing(true)
  }

  const handleTranscriptionComplete = (result) => {
    setTranscription(result)
    setIsTranscribing(false)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="flex flex-col items-center mb-8">

      <h1 className="text-4xl font-extrabold mb-3 tracking-tight">
            <span className="bg-gradient-to-r from-[#6E56CF] to-[#9B8AFF] bg-clip-text text-transparent">
            Audio Transcription
            </span>
          </h1>
       
        <p className="text-gray-600 dark:text-gray-400 text-center">
          Upload your audio and get instant transcription
        </p>
      </div>
      
      <div className="bg-white dark:bg-[#1A1233] rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-[#2D1B4D]">
        <AudioUpload 
          onTranscriptionStart={handleTranscriptionStart}
          onTranscriptionComplete={handleTranscriptionComplete} 
        />
        
        {isTranscribing ? (
          <div className="mt-8 flex flex-col items-center justify-center py-12 space-y-4">
            <ProgressIndicator />
            <p className="text-gray-600 dark:text-gray-400">
              Processing your audio...
            </p>
          </div>
        ) : (
          <TranscriptionViewer transcription={transcription} />
        )}
      </div>
    </div>
  )
}