// // src/App.jsx
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import Layout from './components/shared/Layout'
// //import Chat from './pages/Chat'
// // import Transcription from './pages/Transcription'

// function App() {
//   return (
//     <BrowserRouter>
//     <Home />
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="login" element={<Login />} />
//           <Route path="signup" element={<Signup />} />
//           {/* <Route path="chat" element={<Chat />} /> */}
//           {/* <Route path="transcription" element={<Transcription />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

// src/App.jsx
import Router from './router/Router'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  
 return <div>
 <Router />
 <ToastContainer position="top-right" />
  </div>
  
}