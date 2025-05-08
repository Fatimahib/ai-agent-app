// src/components/transcription/ProgressIndicator.jsx
export default function ProgressIndicator() {
    return (
      <div className="flex justify-center items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-blue-600 animate-bounce"></div>
        <div className="w-3 h-3 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-3 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    )
  }