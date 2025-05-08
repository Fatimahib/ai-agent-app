

    import { useState } from 'react'
    import { Link, useNavigate } from 'react-router-dom'
    import { useAuth } from '../context/Authcontext'
    import { ArrowPathIcon } from '@heroicons/react/24/outline'
    import GoogleIcon from '../assets/GoogleIcon'
    import { toastSuccessNotify, toastErrorNotify } from '../helpers/ToastNotify'
    import Lottie from 'lottie-react'
    import animationData from '../assets/Animation.json'

    export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { login, signUpProvider } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        setLoading(true)
        await login(email, password)
        navigate('/')
        toastSuccessNotify('Login successful!')
        } catch (error) {
        toastErrorNotify(error.message)
        setLoading(false)
        }
    }

    const handleGoogleLogin = async () => {
        try {
        setLoading(true)
        await signUpProvider()
        navigate('/')
        toastSuccessNotify('Login successful with Google!')
        } catch (error) {
        toastErrorNotify(error.message)
        setLoading(false)
        }
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden p-4">
        {/* Background Animation */}
        {/* <div className="absolute inset-0 z-0 w-screen h-screen" style={{
            marginLeft: '-50vw',
            left: '50%',
            width: '100vw',
            minWidth: '100vw'
        }}>
            <Lottie
            animationData={animationData}
            loop={true}
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.3,
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) scale(1.1)'
            }}
            />
        </div> */}

    <div className="absolute inset-0 z-0  h-full w-[200vh]">
    <Lottie
        animationData={animationData}
        loop={true}
        className="w-[200vh] h-full opacity-30 absolute  top-1/2 -translate-y-1/2 scale-[1.6]"
    />
    </div>

        {/* Login Card */}
        <div className="w-full max-w-md rounded-3xl bg-white/90 backdrop-blur-lg dark:bg-[#1A1233]/90 p-8 shadow-2xl dark:shadow-[#6E56CF]/10">
            <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#6E56CF] to-[#9B8AFF] bg-clip-text text-transparent mb-2">
                Welcome Back
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
                Log in to continue your AI journey
            </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                {/* Email Input */}
                <div className="group relative">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="peer w-full rounded-xl border border-gray-300 bg-white/50 px-4 py-3 text-gray-800 focus:border-[#6E56CF] focus:outline-none focus:ring-2 focus:ring-[#6E56CF]/30 dark:border-[#2D1B4D] dark:bg-[#1A1233]/50 dark:text-white"
                    placeholder="Email Address"
                />
                </div>

                {/* Password Input */}
                <div className="group relative">
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="peer w-full rounded-xl border border-gray-300 bg-white/50 px-4 py-3 text-gray-800 focus:border-[#6E56CF] focus:outline-none focus:ring-2 focus:ring-[#6E56CF]/30 dark:border-[#2D1B4D] dark:bg-[#1A1233]/50 dark:text-white"
                    placeholder="Password"
                />
                </div>
            </div>

            <div className="flex items-center justify-between text-sm">
                <Link
                to="/forgot-password"
                className="font-medium text-[#6E56CF] hover:text-[#9B8AFF] transition-colors"
                >
                Forgot password?
                </Link>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-[#6E56CF] to-[#9B8AFF] px-5 py-3.5 text-center font-medium text-white shadow-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-[#6E56CF]/30 disabled:opacity-70 transition-all duration-300"
            >
                {loading ? (
                <ArrowPathIcon className="mx-auto h-5 w-5 animate-spin" />
                ) : (
                'Log In'
                )}
            </button>

            <div className="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300 dark:before:border-[#2D1B4D] dark:after:border-[#2D1B4D]">
                <p className="mx-4 mb-0 text-center text-gray-500 dark:text-gray-400">
                Or continue with
                </p>
            </div>

            <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={loading}
                className="flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-center text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300/30 disabled:opacity-70 dark:border-[#2D1B4D] dark:bg-[#1A1233] dark:text-white dark:hover:bg-[#2D1B4D] transition-all duration-300"
            >
                <GoogleIcon className="mr-3 h-5 w-5" />
                Continue with Google
            </button>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{' '}
                <Link
                to="/signup"
                className="font-medium text-[#6E56CF] hover:text-[#9B8AFF] transition-colors"
                >
                Sign up
                </Link>
            </p>
            </form>
        </div>
        </div>
    )
    }
