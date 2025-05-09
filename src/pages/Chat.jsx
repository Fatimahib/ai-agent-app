


// src/pages/Chat.jsx
import { useAuth } from '../context/AuthContext'
import ChatInterface from '../components/chat/ChatInterface'

export default function Chat() {
  const { currentUser } = useAuth()

  return (
    <div className="h-full">
      <ChatInterface />
    </div>
  )
}
