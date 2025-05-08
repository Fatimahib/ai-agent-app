// // src/pages/Home.jsx
// import { useNavigate } from 'react-router-dom'
// import { useAuth } from '../context/Authcontext'
// import Lottie from 'lottie-react'
// import robotAnimation from '../assets/robot-animation.json'
// import backgroundAnimation from '../assets/Animation.json'

// export default function Home() {
//   const navigate = useNavigate()
//   const { currentUser } = useAuth()

//   const handleGetStarted = () => {
//     if (currentUser) {
//         console.log('go into chat page')
//       navigate('/chat')
//     } else {
//       navigate('/login')
//     }
//   }

//   return (
//     <div className="relative min-h-screen bg-echo-light dark:bg-echo-dark overflow-hidden">
//       {/* Background Animation - FULL SCREEN COVER */}
//       <div className="absolute inset-0 z-0 w-screen h-screen" style={{
//         marginLeft: '-50vw',
//         left: '50%',
//         width: '100vw',
//         minWidth: '100vw'
//       }}>
//         <Lottie
//           animationData={backgroundAnimation}
//           loop={true}
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             opacity: 0.3,
//             position: 'absolute',
//             left: '50%',
//             top: '50%',
//             transform: 'translate(-50%, -50%) scale(1.1)'
//           }}
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
//         {/* Rest of your content remains the same */}
//         <div className="w-full max-w-md text-center">
//           {/* Robot Animation */}
//           <div className="mb-8 mx-auto w-64 h-64 relative z-10">
//             <Lottie 
//               animationData={robotAnimation} 
//               loop={true}
//               className="w-full h-full"
//             />
//           </div>
          
//           {/* Heading */}
//           <h1 className="text-4xl font-bold text-echo-text-dark dark:text-white mb-4 relative z-10">
//             Hello! I'm here to help you
//           </h1>
          
//           {/* Subheading */}
//           <p className="text-lg text-echo-text-secondary mb-8 relative z-10">
//             Your AI assistant ready to chat and transcribe audio for you.
//           </p>
          
//           {/* Get Started Button */}
//           <button
//             onClick={handleGetStarted}
//             className="relative z-10 inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition-all rounded-full group"
//             style={{
//               background: 'linear-gradient(90deg, #6E56CF 0%, #9B8AFF 100%)',
//               boxShadow: '0px 4px 20px rgba(110, 86, 207, 0.3)'
//             }}
//           >
//             <span className="relative z-10">Get Started</span>
//             <span className="absolute inset-0 bg-gradient-to-r from-[#6E56CF] to-[#9B8AFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
//           </button>
//         </div>
//       </div>
      
//       {/* Wave Design at Bottom */}
//       <div className="relative z-10 w-full">
//         <svg viewBox="0 0 1440 120" className="w-full">
//           <path 
//             fill="#6E56CF" 
//             fillOpacity="0.1" 
//             d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,117.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//           ></path>
//         </svg>
//       </div>
//     </div>
//   )
// }


import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/Authcontext'
import Lottie from 'lottie-react'
import robotAnimation from '../assets/robot-animation.json'
import backgroundAnimation from '../assets/Animation.json'

export default function Home() {
  const navigate = useNavigate()
  const { currentUser } = useAuth()

  const handleGetStarted = () => {
    if (currentUser) {
      console.log('go into chat page')
      navigate('/chat')
    } else {
      navigate('/login')
    }
  }

  return (
    <div className="relative min-h-screen bg-echo-light dark:bg-echo-dark overflow-hidden font-sans">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <Lottie
          animationData={backgroundAnimation}
          loop
          className="w-[200vh] h-full  top-1/2 object-cover opacity-30 scale-[1.4]  "
        />
      </div>
{/* 
      <div className="absolute inset-0 z-0  h-full w-[200vh]">
    <Lottie
        animationData={backgroundAnimation}
        loop={true}
        className="w-[200vh] h-full opacity-30 absolute  top-1/2 -translate-y-1/2 scale-[1.6]"
    />
    </div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl bg-white/20 dark:bg-[#2B1D4B]/30 backdrop-blur-md shadow-xl rounded-3xl p-10 text-center border border-white/10 dark:border-white/10 transition duration-300">
          {/* Robot Animation */}
          <div className="mb-6 mx-auto w-48 h-48 sm:w-56 sm:h-56">
            <Lottie animationData={robotAnimation} loop className="w-full h-full" />
          </div>

          {/* Heading */}

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-echo-text-dark dark:text-white mb-3">
            <span className="bg-gradient-to-r from-[#6E56CF] to-[#9B8AFF] bg-clip-text text-transparent">
            Hello! I'm here to help you
            </span>
          </h1>
        

          {/* Subheading */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Your AI assistant ready to chat and transcribe audio for you. Let’s make things smarter.
          </p>

          {/* Get Started Button */}
          <button
            onClick={handleGetStarted}
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white rounded-full transition-transform transform hover:scale-105 bg-gradient-to-r from-[#6E56CF] to-[#9B8AFF] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-main"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Wave Design at Bottom */}
      <div className="relative z-10 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#6E56CF" 
            fillOpacity="0.08" 
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,117.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  )
}

//-----------------------------------
// import { useNavigate } from 'react-router-dom'
// import { useAuth } from '../context/Authcontext'
// import Lottie from 'lottie-react'
// import robotAnimation from '../assets/robot-animation.json'
// import backgroundAnimation from '../assets/Animation.json'

// export default function Home() {
//   const navigate = useNavigate()
//   const { currentUser } = useAuth()

//   const handleGetStarted = () => {
//     if (currentUser) {
//       console.log('go into chat page')
//       navigate('/chat')
//     } else {
//       navigate('/login')
//     }
//   }

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-[#F5F5FF] to-[#F0EEFF] dark:bg-gradient-to-br dark:from-[#100B2D] dark:to-[#2A1548] overflow-hidden">
//       {/* Background Animation - FULL SCREEN COVER */}
//       <div className="absolute inset-0 z-0 w-screen h-screen opacity-20 dark:opacity-10">
//         <Lottie
//           animationData={backgroundAnimation}
//           loop={true}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
//         <div className="w-full max-w-md text-center">
//           {/* Robot Animation */}
//           <div className="mb-8 mx-auto w-64 h-64 relative z-10">
//             <Lottie 
//               animationData={robotAnimation} 
//               loop={true}
//               className="w-full h-full"
//             />
//           </div>
          
//           {/* Heading */}
//           <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E56CF] to-[#9B8AFF] mb-4 relative z-10">
//             Hello! I'm Echo
//           </h1>
          
//           {/* Subheading */}
//           <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 relative z-10">
//             Your personal AI assistant ready to help with anything you need.
//           </p>
          
//           {/* Get Started Button */}
//           <button
//             onClick={handleGetStarted}
//             className="relative z-10 inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-medium transition-all rounded-full group"
//             style={{
//               background: 'linear-gradient(90deg, #6E56CF 0%, #9B8AFF 100%)',
//               boxShadow: '0px 8px 30px rgba(110, 86, 207, 0.4)'
//             }}
//           >
//             <span className="relative z-10 text-white font-semibold text-lg">Get Started</span>
//             <span className="absolute inset-0 bg-gradient-to-r from-[#6E56CF] to-[#9B8AFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
//           </button>
//         </div>
//       </div>
      
//       {/* Wave Design at Bottom */}
//       <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
//         <svg viewBox="0 0 1440 120" className="w-full">
//           <path 
//             fill="#6E56CF" 
//             fillOpacity="0.1" 
//             d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,117.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//           ></path>
//         </svg>
//       </div>
//     </div>
//   )
// }