import React from 'react'

const About = () => {
    return (
        <section className="py-14 md:py-24 md:pb-10 bg-[#0A2640]">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Side - Image */}
                    <div className="relative">
                        <img 
                            src="/images/about-1.png" 
                            alt="About Boldo" 
                            className="max-w-full h-auto rounded-2xl"
                        />
                    </div>

                    {/* Right Side - Content and Feature Cards */}
                    <div className="space-y-12">
                        {/* Content */}
                        <div className="space-y-6 text-white">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                                We're more than a digital agency
                            </h2>
                            <p className="text-gray-300 text-lg">
                                We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth Asset Management is made up of a team of expert, committed and experienced people with a passion for financial markets. Our goal is to achieve continuous and sustainable growth of our clients.
                            </p>
                        </div>

                        {/* Feature Cards */}
                        <div className="space-y-6">
                            {/* Feature Card 1 */}
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-12 h-12 bg-[#65E4A3] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[#0A2640]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold">120m</h3>
                                    <p className="text-gray-300">Cool feature title</p>
                                </div>
                            </div>

                            {/* Feature Card 2 */}
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-12 h-12 bg-[#65E4A3] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[#0A2640]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold">10.000</h3>
                                    <p className="text-gray-300">Cool feature title</p>
                                </div>
                            </div>

                            {/* Feature Card 3 */}
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-12 h-12 bg-[#65E4A3] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[#0A2640]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold">240%</h3>
                                    <p className="text-gray-300">Cool feature title</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
