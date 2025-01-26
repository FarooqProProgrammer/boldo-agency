import React from 'react'

const AboutTeam = () => {
    const team = [
        {
            name: "Michael Scott",
            position: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            name: "Sarah Johnson",
            position: "CTO",
            image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=500&auto=format&fit=crop&q=60",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            name: "David Chen",
            position: "Design Lead",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            name: "Emily Brown",
            position: "Marketing Director",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            name: "James Wilson",
            position: "Product Manager",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            name: "Lisa Zhang",
            position: "Development Lead",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2640] mb-6">
                        Meet Our Team
                    </h2>
                    <p className="text-lg text-gray-500">
                        The talented people behind our success
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div 
                            key={index}
                            className="group"
                        >
                            {/* Image Container */}
                            <div className="relative mb-6 rounded-2xl overflow-hidden">
                                <img 
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {/* Social Links */}
                                    <div className="absolute bottom-6 left-6 flex space-x-4">
                                        <a 
                                            href={member.social.linkedin}
                                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0A2640] hover:bg-[#65E4A3] transition-colors duration-200"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                        </a>
                                        <a 
                                            href={member.social.twitter}
                                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0A2640] hover:bg-[#65E4A3] transition-colors duration-200"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Member Info */}
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-[#0A2640] mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-gray-500">
                                    {member.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutTeam
