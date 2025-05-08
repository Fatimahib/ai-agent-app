// // 

// // src/pages/Profile.jsx
// import APIKeyManager from '../components/profile/APIKeyManager'

// export default function Profile() {
//   return (
//     <div className="container mx-auto px-4 py-8 max-w-4xl">
//       <div className="flex flex-col items-center mb-8">
//         <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">
//           Profile Settings
//         </h1>
//         <p className="text-gray-600 dark:text-gray-400 text-center">
//           Manage your API keys and account preferences
//         </p>
//       </div>
      
//       <APIKeyManager />
//     </div>
//   )
// }
// src/pages/Profile.jsx
import APIKeyManager from '../components/profile/APIKeyManager'

export default function Profile() {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-12 text-center relative">
          {/* Decorative background effect */}
          <div className="absolute inset-0 -z-10 blur-2xl opacity-20">
            <div className="bg-gradient-to-r from-[#6E56CF] to-[#9B8AFF] w-48 h-48 rounded-full mx-auto mt-4"></div>
          </div>
  
          <h1 className="text-4xl font-extrabold mb-3 tracking-tight">
            <span className="bg-gradient-to-r from-[#6E56CF] to-[#9B8AFF] bg-clip-text text-transparent">
              Profile Settings
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Easily manage your API keys and tailor your account preferences to your workflow.
          </p>
        </div>
  
        <APIKeyManager />
      </div>
    );
}
  