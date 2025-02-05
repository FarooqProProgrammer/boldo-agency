import React from 'react'

const ContactHero = () => {
    return (
        <section className="bg-[#0A2640] text-white py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
                        Get in Touch
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        We'd love to hear from you. Please fill out this form or shoot us an email.
                    </p>
                    
                    {/* Contact Methods */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-4 bg-[#65E4A3] rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                <svg className="w-8 h-8 text-[#0A2640]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                            <p className="text-gray-300">contact@boldo.com</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-4 bg-[#65E4A3] rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                <svg className="w-8 h-8 text-[#0A2640]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                            <p className="text-gray-300">+1 (555) 000-0000</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-4 bg-[#65E4A3] rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                <svg className="w-8 h-8 text-[#0A2640]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                            <p className="text-gray-300">123 Business Ave, Suite 100<br />San Francisco, CA 94107</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactHero
