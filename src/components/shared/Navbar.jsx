
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/Authcontext'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/outline'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useApp } from '../../context/AppContext'

export default function Navbar() {
  const { currentUser, logout, loading } = useAuth()
  const { darkMode, toggleDarkMode } = useApp()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#291547] shadow-sm border-b border-gray-200 dark:border-[#3A1D66]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">


             <div className="flex items-center">
               <Link to="/" className="text-xl font-extrabold tracking-tight">
                 <span className="bg-gradient-to-r from-[#6E56CF] to-[#9B8AFF] bg-clip-text text-transparent">
                   FatiMind AI
                 </span>
               </Link>
             </div>


          {/* Right side - Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-[#3A1D66] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#4B2785] transition-colors"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            {/* User dropdown */}
            {!loading && (
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center space-x-2 focus:outline-none">
                  {currentUser ? (
                    <>
                      {currentUser.photoURL ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src={currentUser.photoURL}
                          alt="User avatar"
                        />
                      ) : (
                        <div className="h-8 w-8 rounded-full bg-primary-main flex items-center justify-center">
                          <UserIcon className="h-5 w-5 text-white" />
                        </div>
                      )}
                      <span className="hidden md:inline text-sm font-medium text-gray-700 dark:text-gray-300">
                        {currentUser.displayName || 'User'}
                      </span>
                    </>
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-[#3A1D66] flex items-center justify-center">
                      <UserIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </div>
                  )}
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-[#3A1D66] shadow-lg ring-1 ring-black dark:ring-[#4B2785] ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1">
                      {currentUser ? (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={logout}
                              className={`${
                                active ? 'bg-gray-100 dark:bg-[#4B2785]' : ''
                              } block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      ) : (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/login"
                                className={`${
                                  active ? 'bg-gray-100 dark:bg-[#4B2785]' : ''
                                } block px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
                              >
                                Sign in
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/signup"
                                className={`${
                                  active ? 'bg-gray-100 dark:bg-[#4B2785]' : ''
                                } block px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
                              >
                                Sign up
                              </Link>
                            )}
                          </Menu.Item>
                        </>
                      )}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}