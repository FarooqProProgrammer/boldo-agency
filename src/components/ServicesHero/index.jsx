import React from 'react'

const ServicesHero = () => {
    return (
        <section className="bg-[#0A2640] text-white py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
                        Our Services
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus.
                    </p>
                    
                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center">
                            <h3 className="text-5xl font-semibold mb-2 text-[#65E4A3]">120m</h3>
                            <p className="text-gray-300">Cool feature title</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-5xl font-semibold mb-2 text-[#65E4A3]">10.000</h3>
                            <p className="text-gray-300">Cool feature title</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-5xl font-semibold mb-2 text-[#65E4A3]">240</h3>
                            <p className="text-gray-300">Cool feature title</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesHero
