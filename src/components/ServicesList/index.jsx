import React from 'react'

const ServicesList = () => {
    const services = [
        {
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
            category: "Category",
            title: "Digital Marketing Solutions",
            description: "Learning curve network effects return on investment. Entrepreneur platform user experience crowdfunding stealth operation system value proposition.",
            features: ["Social Media Marketing", "SEO Optimization", "Content Strategy"]
        },
        {
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60",
            category: "Category",
            title: "Web Development",
            description: "Release facebook responsive web design business model canvas seed money monetization.",
            features: ["Custom Development", "E-commerce", "Mobile-First Design"]
        },
        {
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60",
            category: "Category",
            title: "Brand Strategy",
            description: "Beta prototype sales iPad gen-z marketing network effects value proposition entrepreneurship.",
            features: ["Brand Identity", "Market Research", "Campaign Strategy"]
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                {services.map((service, index) => (
                    <div 
                        key={index}
                        className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center mb-20 ${
                            index % 2 === 1 ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                        {/* Image */}
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <img 
                                    src={service.image} 
                                    alt={service.title}
                                    className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
                                />
                                <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-1/2">
                            <span className="text-[#0A2640] font-semibold">{service.category}</span>
                            <h3 className="text-2xl md:text-3xl font-semibold text-[#0A2640] mt-2 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 mb-6">
                                {service.description}
                            </p>
                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 text-[#65E4A3] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-8 bg-[#0A2640] text-white px-8 py-3 rounded-full hover:bg-[#083250] transition-colors duration-200">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ServicesList
