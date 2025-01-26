import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className='bg-[#0A2640] text-white pb-12 md:pb-24'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center pt-6 md:pt-10'>
                    {/* Left Content */}
                    <div className='space-y-6 md:space-y-8 text-center md:text-left'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight'>
                            Save time by building fast with Boldo Template
                        </h1>
                        <p className='text-base sm:text-lg text-gray-300 md:pr-12 max-w-2xl md:max-w-none mx-auto md:mx-0'>
                            Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
                            <button className='w-full sm:w-auto bg-[#65E4A3] text-[#0A2640] px-6 md:px-8 py-3 rounded-full hover:bg-[#50c88b] transition-colors duration-200 font-semibold text-sm md:text-base'>
                                Buy template
                            </button>
                            <button className='w-full sm:w-auto border-2 border-white text-white px-6 md:px-8 py-3 rounded-full hover:bg-white hover:text-[#0A2640] transition-colors duration-200 text-sm md:text-base'>
                                Explore
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className='relative w-full'>
                        <div className='aspect-[4/3] md:aspect-square w-full max-w-xl mx-auto'>
                            <img 
                                src="/images/hero-graphics.svg" 
                                alt="Hero Graphics" 
                                className='w-full h-full object-contain'
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className='absolute -top-4 -right-4 w-16 md:w-24 h-16 md:h-24 bg-[#65E4A3] rounded-full opacity-20'></div>
                        <div className='absolute -bottom-4 -left-4 w-12 md:w-16 h-12 md:h-16 bg-[#65E4A3] rounded-full opacity-20'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero