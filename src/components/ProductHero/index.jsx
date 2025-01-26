import React from 'react'

const ProductHero = () => {
    return (
        <section className="bg-[#0A2640] text-white py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
                        Save time by building fast with Boldo Template
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-[#65E4A3] text-[#0A2640] px-8 py-4 rounded-full hover:bg-[#50c88b] transition-colors duration-200 font-semibold">
                            Buy template
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#0A2640] transition-colors duration-200">
                            Explore
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="mt-16 relative">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60" 
                        alt="Team collaboration" 
                        className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
                </div>
            </div>
        </section>
    )
}

export default ProductHero
