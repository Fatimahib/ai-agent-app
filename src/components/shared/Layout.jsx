import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'

export default function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const showSidebar = location.pathname === '/chat' || location.pathname === '/transcription' || location.pathname === '/profile'

  // Automatically collapse sidebar on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true)
      } else {
        setSidebarCollapsed(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const sidebarItems = [
    { path: '/chat', name: 'Chat', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )},
    { path: '/transcription', name: 'Transcription', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )},
    { path: '/profile', name: 'Profile', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )}
  ]

  return (
    <div className="min-h-screen bg-light-main dark:bg-gradient-to-b from-[#100B2D] to-[#2A1548] transition-colors duration-300 pt-16">
      <Navbar />
      <div className={`flex ${showSidebar ? 'h-[calc(100vh-4rem)]' : ''}`}>
        {showSidebar && (
          <div className={`bg-white dark:bg-[#1A1233] border-r border-gray-200 dark:border-[#2D1B4D] flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-64'}`}>
            
            {/* Collapse/Expand Button - visible only on md+ screens */}
            <div className="hidden md:block">
              <button 
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-3 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2D1B4D] transition-colors"
              >
                {sidebarCollapsed ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>

            {/* Sidebar Navigation */}
            <nav className="flex-1 px-2 py-2 space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3 px-4'} py-3 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === item.path 
                      ? 'bg-[#6E56CF] text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2D1B4D]'
                  }`}
                  title={sidebarCollapsed ? item.name : ''}
                >
                  <span className={`${location.pathname === item.path ? 'text-white' : 'text-[#6E56CF]'}`}>
                    {item.icon}
                  </span>
                  {!sidebarCollapsed && <span>{item.name}</span>}
                </button>
              ))}
            </nav>
          </div>
        )}

        {/* Main Content */}
        <main className={`flex-1 overflow-auto ${showSidebar ? 'p-4 md:p-6' : ''}`}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
