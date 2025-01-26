import React from 'react'

const AboutStory = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative">
                        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop&q=60" 
                                alt="Our Story" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#65E4A3] rounded-2xl -z-10"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2640]">
                            Our Story
                        </h2>
                        <p className="text-gray-600">
                            Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus.
                        </p>
                        <p className="text-gray-600">
                            Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer.
                        </p>

                        {/* Timeline */}
                        <div className="space-y-6 mt-8">
                            <div className="flex gap-4">
                                <div className="w-16 h-16 bg-[#0A2640] text-white rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl font-semibold">2015</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#0A2640] mb-2">Founded</h3>
                                    <p className="text-gray-600">Our journey began with a simple idea: to create something meaningful.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-16 h-16 bg-[#0A2640] text-white rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl font-semibold">2018</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#0A2640] mb-2">Global Expansion</h3>
                                    <p className="text-gray-600">We expanded our operations to serve clients worldwide.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-16 h-16 bg-[#0A2640] text-white rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl font-semibold">2023</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#0A2640] mb-2">Industry Leader</h3>
                                    <p className="text-gray-600">Recognized as a leading force in digital transformation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutStory
