import React from 'react'

const Newsletter = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
    };

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="bg-[#0A2640] rounded-xl md:rounded-[4rem] overflow-hidden relative">
                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-[#65E4A3] rounded-full opacity-10 transform -translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#65E4A3] rounded-full opacity-10 transform translate-x-20 translate-y-20"></div>
                    
                    {/* Content Container */}
                    <div className="relative px-6 py-12 md:p-16 lg:p-24">
                        {/* Newsletter Content */}
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 leading-tight">
                                Get started with Boldo today
                            </h2>
                            
                            {/* Newsletter Form */}
                            <form 
                                onSubmit={handleSubmit}
                                className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
                            >
                                <input 
                                    type="email" 
                                    placeholder="Your email address" 
                                    className="flex-1 px-6 py-3 rounded-full text-[#0A2640] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#65E4A3] transition-shadow duration-200"
                                    required
                                />
                                <button 
                                    type="submit"
                                    className="bg-[#65E4A3] text-[#0A2640] px-8 py-3 rounded-full hover:bg-[#50c88b] transition-colors duration-200 font-semibold whitespace-nowrap"
                                >
                                    Start now
                                </button>
                            </form>

                            {/* Additional Info */}
                            <p className="text-white/70 mt-6 text-sm">
                                By signing up you agree to our 
                                <a href="#" className="text-white hover:text-[#65E4A3] ml-1">
                                    Terms & Conditions
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
