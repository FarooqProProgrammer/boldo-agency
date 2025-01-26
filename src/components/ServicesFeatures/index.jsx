import React from 'react'

const ServicesFeatures = () => {
    const features = [
        {
            icon: '/images/service-1.png',
            title: 'Cool feature title',
            description: 'Learning curve network effects return on investment.'
        },
        {
            icon: '/images/service-2.png',
            title: 'Even cooler feature',
            description: 'Prescription timeline release immediate value proposition.'
        },
        {
            icon: '/images/service-3.png',
            title: 'Cool feature title',
            description: 'Beta prototype sales iPad gen-z marketing network effects value proposition.'
        },
        {
            icon: '/images/service-1.png',
            title: 'Cool feature title',
            description: 'Learning curve network effects return on investment.'
        }
    ];

    return (
        <section className="py-20 bg-[#0A2640]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                        We create customer experiences
                    </h2>
                    <p className="text-lg text-gray-300">
                        Value proposition accelerator product management venture
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-2xl p-6 transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            <img 
                                src={feature.icon}
                                alt={feature.title}
                                className="w-28 h-28 object-cover mb-6"
                            />
                            <h3 className="text-xl font-semibold text-[#0A2640] mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500">
                                {feature.description}
                            </p>
                            <button className="mt-6 text-[#0A2640] font-semibold hover:text-[#65E4A3] transition-colors duration-200">
                                Explore →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesFeatures
