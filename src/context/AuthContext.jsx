import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../config/firebase'
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  updateProfile  
} from 'firebase/auth'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

//   const registerUser = async (email, password, displayName) => {
//     try {
//       const { user } = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       )
//       await updateProfile(auth.currentUser, {
//         displayName: displayName,
//       })
//       setCurrentUser({ ...user, displayName })
//       return user
//     } catch (error) {
//       if (error.code === 'auth/email-already-in-use') {
//         throw new Error('This email is already registered. Please login instead.')
//       }
//       throw error
//     }
//   }

const registerUser = async (email, password, displayName) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      
      // Extract first name from displayName (split by space and take first part)
      const firstName = displayName.split(' ')[0]
      
      await updateProfile(auth.currentUser, {
        displayName: firstName, // Store only first name
      })
      setCurrentUser({ ...user, displayName: firstName })
      return user
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('This email is already registered. Please login instead.')
      }
      throw error
    }
  }

  const signUpProvider = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      return result.user
    } catch (error) {
      throw error
    }
  }

  function logout() {
    return signOut(auth)
  }

  const value = {
    currentUser,
    registerUser,
    login,
    signUpProvider,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}