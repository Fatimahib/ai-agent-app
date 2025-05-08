// // src/Router.jsx
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Layout from '../components/shared/Layout'
// import Home from '../pages/Home'
// import Login from '../pages/Login'
// import Signup from '../pages/Signup'
// // import Chat from '../pages/Chat'
// // import Transcription from '../pages/Transcription'
// import ProtectedRoute from '../router/ProtectedRoute'

// export default function Router() {
//   return (
//     // <BrowserRouter>
//     //   <Routes>
//     //     {/* Public routes */}
//     //     <Route path="/" element={<Home />} />
//     //     <Route path="/login" element={<Login />} />
//     //     <Route path="/signup" element={<Signup />} />

//     //     {/* Protected routes */}
//     //     <Route element={<ProtectedRoute />}>
//     //       <Route path="/app" element={<Layout />}>
//     //         {/* <Route path="chat" element={<Chat />} />
//     //         <Route path="transcription" element={<Transcription />} /> */}
//     //       </Route>
//     //     </Route>
//     //   </Routes>
//     // </BrowserRouter>

//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="login" element={<Login />} />
//         <Route path="signup" element={<Signup />} />
//         {/* <Route path="chat" element={<Chat />} /> */}
//             {/* <Route path="transcription" element={<Transcription />} /> */}
//       </Route>
//     </Routes>
//   </BrowserRouter>
//   )
// }

// src/Router.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Chat from '../pages/Chat'
 import Transcription from '../pages/Transcription'
import ProtectedRoute from './ProtectedRoute'
import Profile from '../pages/Profile'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route 
                path="profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
          <Route 
            path="chat" 
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="transcription" 
            element={
              <ProtectedRoute>
                <Transcription />
              </ProtectedRoute>
            } 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}