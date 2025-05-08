// // src/pages/Chat.jsx
// import { useState } from 'react'
// import { useAuth } from '../context/Authcontext'
// import ChatInterface from '../components/chat/ChatInterface'

// export default function Chat() {
//   const { currentUser } = useAuth()
//   const [activeTab, setActiveTab] = useState('chat')

//   return (
//     <div className="flex h-full">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-800 text-white p-4 hidden md:block">
//         <h2 className="text-xl font-bold mb-4">AI Agent</h2>
//         <button 
//           onClick={() => setActiveTab('chat')}
//           className={`w-full text-left p-2 rounded mb-2 ${activeTab === 'chat' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
//         >
//           Chat
//         </button>
//         <button 
//           onClick={() => setActiveTab('transcription')}
//           className={`w-full text-left p-2 rounded ${activeTab === 'transcription' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
//         >
//           Transcription
//         </button>
//       </div>
      
//       {/* Main Content */}
//       <div className="flex-1 p-4">
//         {activeTab === 'chat' ? (
//           <ChatInterface />
//         ) : (
//           <div className="flex items-center justify-center h-full">
//             <p>Transcription feature will be implemented here</p>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }


// src/pages/Chat.jsx
import { useAuth } from '../context/Authcontext'
import ChatInterface from '../components/chat/ChatInterface'

export default function Chat() {
  const { currentUser } = useAuth()

  return (
    <div className="h-full">
      <ChatInterface />
    </div>
  )
}
