import React from 'react'

const ProductFeatures = () => {
    const features = [
        {
            title: "Cool feature title",
            description: "Learning curve network effects return on investment.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60"
        },
        {
            title: "Even cooler feature",
            description: "Prescription timeline release immediate value proposition.",
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format&fit=crop&q=60"
        },
        {
            title: "Cool feature title",
            description: "Beta prototype sales iPad gen-z marketing network effects value proposition",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60"
        }
    ];

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2640] mb-6">
                        Our product features
                    </h2>
                    <p className="text-lg text-gray-500">
                        Creativity is our passion. We create innovative solutions that make a difference.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-48 md:h-64">
                                <img 
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#0A2640] mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                                <button className="mt-4 text-[#0A2640] font-semibold hover:text-[#65E4A3] transition-colors duration-200 flex items-center">
                                    Learn more
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductFeatures
