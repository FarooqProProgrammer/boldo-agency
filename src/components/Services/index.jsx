import React from 'react'

const Services = () => {
    const services = [
        {
            icon: '/images/service-1.png',
            title: 'Cool feature title',
            description: 'Learning curve network effects return on investment.',
            link: '#!'
        },
        {
            icon: '/images/service-2.png',
            title: 'Even cooler feature',
            description: 'Prescription timeline release immediate value proposition.',
            link: '#!'
        },
        {
            icon: '/images/service-3.png',
            title: 'Cool feature title',
            description: 'Beta prototype sales iPad gen-z marketing network effects value.',
            link: '#!'
        }
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                        Handshake infographic mass market crowdfunding iteration.
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Learning curve network effects return on investment.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="group bg-white rounded-2xl p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2"
                        >
                            {/* Service Icon */}
                            <div className="w-full aspect-[4/3] mb-6 relative">
                                <img 
                                    src={service.icon} 
                                    alt={service.title}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                                <div className="absolute inset-0 bg-[#0A2640] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
                            </div>

                            {/* Service Content */}
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 mb-6">
                                {service.description}
                            </p>

                            {/* Service Link */}
                            <a 
                                href={service.link}
                                className="inline-flex items-center text-[#0A2640] font-semibold group-hover:text-[#65E4A3] transition-colors duration-300"
                            >
                                Explore page
                                <svg 
                                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                                    />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

           
            </div>
        </section>
    )
}

export default Services
