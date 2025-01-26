import React from 'react'

const ContactInfo = () => {
    const officeHours = [
        { day: 'Monday - Thursday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Friday', hours: '9:00 AM - 4:00 PM' },
        { day: 'Saturday - Sunday', hours: 'Closed' }
    ];

    return (
        <section className="py-20 bg-[#0A2640]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Map Image */}
                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1553290322-0440b3457d0c?w=800&auto=format&fit=crop&q=60" 
                            alt="Office Location"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    {/* Contact Information */}
                    <div className="text-white">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                            Visit Our Office
                        </h2>
                        
                        {/* Address */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-[#65E4A3]">Address</h3>
                            <p className="text-gray-300">
                                123 Business Avenue, Suite 100<br />
                                San Francisco, CA 94107<br />
                                United States
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-[#65E4A3]">Contact</h3>
                            <p className="text-gray-300">
                                Phone: +1 (555) 000-0000<br />
                                Email: contact@boldo.com<br />
                                Fax: +1 (555) 000-0001
                            </p>
                        </div>

                        {/* Office Hours */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-[#65E4A3]">Office Hours</h3>
                            <div className="space-y-2">
                                {officeHours.map((schedule, index) => (
                                    <div key={index} className="flex justify-between text-gray-300">
                                        <span>{schedule.day}</span>
                                        <span>{schedule.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8 flex space-x-4">
                            {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                                <a
                                    key={social}
                                    href={`#${social}`}
                                    className="w-10 h-10 rounded-full bg-[#65E4A3] flex items-center justify-center text-[#0A2640] hover:bg-white transition-colors duration-200"
                                >
                                    <span className="sr-only">{social}</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo
