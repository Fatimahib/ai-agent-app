// // src/components/transcription/TranscriptionViewer.jsx
// import { useState } from 'react'
// //import { CopyToClipboard } from 'react-copy-to-clipboard'

// export default function TranscriptionViewer({ transcription }) {
//   const [copied, setCopied] = useState(false)

//   const handleCopy = () => {
//     setCopied(true)
//     setTimeout(() => setCopied(false), 2000)
//   }

//   if (!transcription) return null

//   return (
//     <div className="mt-6 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
//       <div className="flex justify-between items-center mb-2">
//         <h3 className="font-medium text-gray-800 dark:text-white">Transcription</h3>
//         {/* <CopyToClipboard text={transcription} onCopy={handleCopy}>
//           <button className="text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-3 py-1 rounded">
//             {copied ? 'Copied!' : 'Copy'}
//           </button>
//         </CopyToClipboard> */}
//       </div>
//       <div className="bg-white dark:bg-gray-900 p-4 rounded-md">
//         <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200">{transcription}</p>
//       </div>
//     </div>
//   )
// }

// src/components/transcription/TranscriptionViewer.jsx

// src/components/transcription/TranscriptionViewer.jsx
import { useState } from 'react'

export default function TranscriptionViewer({ transcription }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(transcription)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(err => {
        console.error('Failed to copy:', err)
      })
  }

  if (!transcription) return null

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Transcription Result</h3>
        <button 
          onClick={handleCopy}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg bg-[#6E56CF]/10 hover:bg-[#6E56CF]/20 dark:bg-[#6E56CF]/20 dark:hover:bg-[#6E56CF]/30 text-[#6E56CF] dark:text-[#9B8AFF] transition-all"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
              </svg>
              <span>Copy Text</span>
            </>
          )}
        </button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6E56CF] to-[#9B8AFF] rounded-xl opacity-10 blur-lg"></div>
        <div className="relative bg-white dark:bg-[#1A1233] rounded-xl p-6 shadow-lg border border-gray-100 dark:border-[#2D1B4D]">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 leading-relaxed">
              {transcription}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}