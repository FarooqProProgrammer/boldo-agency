import React from 'react'

const AboutValues = () => {
    const values = [
        {
            icon: "🎯",
            title: "Mission",
            description: "To empower businesses with innovative solutions that drive growth and success in the digital age."
        },
        {
            icon: "👁️",
            title: "Vision",
            description: "To be the global leader in digital transformation, setting new standards for excellence and innovation."
        },
        {
            icon: "💎",
            title: "Values",
            description: "Integrity, Innovation, Excellence, Collaboration, and Customer Success drive everything we do."
        }
    ];

    return (
        <section className="py-20 bg-[#0A2640]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                        Our Values
                    </h2>
                    <p className="text-lg text-gray-300">
                        The principles that guide us in everything we do
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-2xl p-8 transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="text-4xl mb-4">
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-[#0A2640] mb-4">
                                {value.title}
                            </h3>
                            <p className="text-gray-600">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {[
                        { title: "Innovation First", number: "01" },
                        { title: "Customer Focus", number: "02" },
                        { title: "Team Excellence", number: "03" },
                        { title: "Sustainable Growth", number: "04" }
                    ].map((item, index) => (
                        <div 
                            key={index}
                            className="border border-white/20 rounded-2xl p-6 text-white hover:bg-white/5 transition-colors duration-300"
                        >
                            <div className="text-[#65E4A3] text-xl font-semibold mb-2">
                                {item.number}
                            </div>
                            <h3 className="text-xl font-semibold">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutValues
