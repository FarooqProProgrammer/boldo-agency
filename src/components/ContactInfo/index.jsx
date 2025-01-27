import React from 'react'
import { CiFacebook, CiSearch } from "react-icons/ci";
import { FaGooglePlusSquare, FaTwitter } from "react-icons/fa";

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
                    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7239.24508120027!2d67.16313809999998!3d24.876738200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1737967453733!5m2!1sen!2s"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full"
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
                            <div className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                                <CiFacebook color='#0A2640' size={24} />
                            </div>
                            <div className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                                <FaGooglePlusSquare color='#0A2640' size={24} />
                            </div>
                            <div className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                                <FaTwitter color='#0A2640' size={24} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo
