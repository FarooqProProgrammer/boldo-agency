import React from 'react'
import Link from 'next/link'

const SignupForm = () => {
    return (
        <section className="min-h-screen bg-gradient-to-b from-[#0A2640] to-[#083250] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <Link href="/">
                        <img src="/logo.png" alt="Boldo Logo" className="h-12" />
                    </Link>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-[#0A2640] mb-2">
                            Create Account
                        </h2>
                        <p className="text-gray-500">
                            Join us and start your journey
                        </p>
                    </div>

                    {/* Social Signup Buttons */}
                    <div className="space-y-4">
                        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-200">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            Sign up with Google
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#1877F2] text-white rounded-full hover:bg-[#1864D9] transition-colors duration-200">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            Sign up with Facebook
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or sign up with email</span>
                        </div>
                    </div>

                    {/* Signup Form */}
                    <form className="space-y-6">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#65E4A3] focus:border-transparent transition-colors duration-200"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#65E4A3] focus:border-transparent transition-colors duration-200"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#65E4A3] focus:border-transparent transition-colors duration-200"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#65E4A3] focus:border-transparent transition-colors duration-200"
                                placeholder="Create a strong password"
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#65E4A3] focus:border-transparent transition-colors duration-200"
                                placeholder="Confirm your password"
                            />
                        </div>

                        <div className="flex items-center">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="h-4 w-4 text-[#0A2640] focus:ring-[#65E4A3] border-gray-300 rounded"
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                I agree to the{' '}
                                <Link href="/terms" className="text-[#0A2640] hover:text-[#65E4A3] transition-colors duration-200">
                                    Terms of Service
                                </Link>
                                {' '}and{' '}
                                <Link href="/privacy" className="text-[#0A2640] hover:text-[#65E4A3] transition-colors duration-200">
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-white bg-[#0A2640] hover:bg-[#083250] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#65E4A3] transition-colors duration-200 font-semibold"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="text-center text-sm">
                        <span className="text-gray-500">Already have an account?</span>
                        {' '}
                        <Link 
                            href="/login"
                            className="font-medium text-[#0A2640] hover:text-[#65E4A3] transition-colors duration-200"
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignupForm
