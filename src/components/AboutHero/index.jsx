import React from 'react'

const AboutHero = () => {
    return (
        <section className="bg-[#0A2640] text-white py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
                        About Boldo
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-12">
                        We're more than just a company. We're a team of passionate individuals dedicated to transforming ideas into reality.
                    </p>
                </div>

                {/* Hero Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative h-[300px] md:h-[400px]">
                        <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60" 
                            alt="Team collaboration" 
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
                    </div>
                    <div className="relative h-[300px] md:h-[400px]">
                        <img 
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=60" 
                            alt="Office culture" 
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
                    </div>
                    <div className="relative h-[300px] md:h-[400px]">
                        <img 
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60" 
                            alt="Team meeting" 
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div className="text-center">
                        <h3 className="text-5xl font-semibold mb-2 text-[#65E4A3]">120m</h3>
                        <p className="text-gray-300">Global customers</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-5xl font-semibold mb-2 text-[#65E4A3]">10+</h3>
                        <p className="text-gray-300">Years of experience</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-5xl font-semibold mb-2 text-[#65E4A3]">240+</h3>
                        <p className="text-gray-300">Team members</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHero
