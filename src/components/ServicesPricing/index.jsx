import React from 'react'

const ServicesPricing = () => {
    const plans = [
        {
            name: "Basic",
            price: "49",
            description: "Perfect for small businesses and startups",
            features: [
                "All features in Basic",
                "Unlimited users",
                "Unlimited projects",
                "Analytics",
                "Basic Support"
            ]
        },
        {
            name: "Premium",
            price: "99",
            description: "Best for growing companies",
            features: [
                "All features in Basic",
                "Unlimited users",
                "Unlimited projects",
                "Analytics",
                "Priority Support",
                "Custom Integration"
            ],
            featured: true
        },
        {
            name: "Enterprise",
            price: "149",
            description: "For large-scale organizations",
            features: [
                "All features in Premium",
                "Unlimited users",
                "Unlimited projects",
                "Analytics",
                "24/7 Support",
                "Custom Integration",
                "API Access"
            ]
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2640] mb-6">
                        Our Pricing Plans
                    </h2>
                    <p className="text-lg text-gray-500">
                        Simple, transparent pricing that grows with you
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div 
                            key={index}
                            className={`rounded-2xl p-8 ${
                                plan.featured 
                                    ? 'bg-[#0A2640] text-white transform scale-105' 
                                    : 'bg-white border-2 border-[#0A2640]'
                            }`}
                        >
                            <h3 className={`text-2xl font-semibold mb-2 ${
                                plan.featured ? 'text-white' : 'text-[#0A2640]'
                            }`}>
                                {plan.name}
                            </h3>
                            <p className={`mb-6 ${
                                plan.featured ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                                {plan.description}
                            </p>
                            <div className="flex items-baseline mb-8">
                                <span className="text-4xl font-bold">$</span>
                                <span className="text-5xl font-bold mx-1">{plan.price}</span>
                                <span>/month</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <svg 
                                            className={`w-5 h-5 mr-2 ${
                                                plan.featured ? 'text-[#65E4A3]' : 'text-[#0A2640]'
                                            }`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button 
                                className={`w-full py-4 rounded-full font-semibold transition-colors duration-200 ${
                                    plan.featured
                                        ? 'bg-white text-[#0A2640] hover:bg-gray-100'
                                        : 'bg-[#0A2640] text-white hover:bg-[#083250]'
                                }`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesPricing
