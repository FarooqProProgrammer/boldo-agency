import React from 'react'
import Link from 'next/link'

const Footer = () => {
    const links = {
        landings: [
            { name: 'Home', href: '/' },
            { name: 'Products', href: '/products' },
            { name: 'Services', href: '/services' }
        ],
        company: [
            { name: 'Careers', href: '#!' },
            { name: 'Services', href: '/services' }
        ],
        resources: [
            { name: 'Blog', href: '/blog' },
            { name: 'Products', href: '/products' },
            { name: 'Services', href: '/services' }
        ]
    };

    return (
        <footer className="bg-[#0A2640] pt-16 pb-8">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="grid md:grid-cols-4 gap-8 pb-16 border-b border-white/10">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            <img src="/logo.png" alt="Boldo Logo" className="h-8" />
                        </Link>
                        <p className="text-white/70">
                            Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
                        </p>
                        <p className="text-white/70">All rights reserved.</p>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-3 grid sm:grid-cols-3 gap-8">
                        {/* Landings */}
                        <div>
                            <h3 className="font-semibold text-white mb-4">Landings</h3>
                            <ul className="space-y-3">
                                {links.landings.map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            href={link.href}
                                            className="text-white/70 hover:text-[#65E4A3] transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="font-semibold text-white mb-4">Company</h3>
                            <ul className="space-y-3">
                                {links.company.map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            href={link.href}
                                            className="text-white/70 hover:text-[#65E4A3] transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="font-semibold text-white mb-4">Resources</h3>
                            <ul className="space-y-3">
                                {links.resources.map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            href={link.href}
                                            className="text-white/70 hover:text-[#65E4A3] transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 text-center text-sm text-white/70">
                    <p> {new Date().getFullYear()} Boldo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
