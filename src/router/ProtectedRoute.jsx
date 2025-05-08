// src/components/shared/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/Authcontext'

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth()
  
  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  return children
}