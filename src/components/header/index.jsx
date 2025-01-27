import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: 'Product', href: '/product' },
        { label: 'Services', href: '/services' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <header className='bg-[#0A2640] sticky top-0 z-50'>
            <nav className='container mx-auto px-4 py-5'>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <Link href="/" className='flex-shrink-0'>
                        <img src="/images/logo.png" alt="Boldo Logo" className='h-8 md:h-10' />
                    </Link>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center space-x-8'>
                        {menuItems.map((item, index) => (
                            <Link 
                                key={index}
                                href={item.href}
                                className='text-white hover:text-gray-300 transition-colors duration-200'
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link href={'/login'} className='bg-white text-[#0A2640] px-8 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200'>
                            Log In
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className='md:hidden text-white p-2'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className='w-6 h-5 relative flex flex-col justify-between'>
                            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className='pt-4 pb-3 space-y-3'>
                        {menuItems.map((item, index) => (
                            <Link 
                                key={index}
                                href={item.href}
                                className='block text-white hover:text-gray-300 transition-colors duration-200 py-2'
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link href="/login" className='w-full bg-white text-[#0A2640] px-8 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200'>
                            Log In
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header