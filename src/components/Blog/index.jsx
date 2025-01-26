import React from 'react'
import Link from 'next/link'

const Blog = () => {
    const blogPosts = [
        {
            image: '/images/blog-1.png',
            category: 'Category',
            date: 'November 22, 2021',
            title: 'Pitch termsheet backing validation focus release.',
            author: {
                image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
                name: 'Chandler Bing'
            }
        },
        {
            image: '/images/blog-2.png',
            category: 'Category',
            date: 'November 22, 2021',
            title: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
            author: {
                image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
                name: 'Rachel Green'
            }
        },
        {
            image: '/images/blog-3.png',
            category: 'Category',
            date: 'November 22, 2021',
            title: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
            author: {
                image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
                name: 'Monica Geller'
            }
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-[#777777] text-lg mb-4">Our Blog</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A2640] max-w-3xl mx-auto leading-tight">
                        Value proposition accelerator product management venture
                    </h2>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {blogPosts.map((post, index) => (
                        <article 
                            key={index} 
                            className="group bg-white rounded-2xl transition-transform duration-300 hover:-translate-y-2"
                        >
                            {/* Blog Image */}
                            <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-2xl">
                                <img 
                                    src={post.image} 
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Blog Content */}
                            <div className="space-y-4 px-4">
                                {/* Meta */}
                                <div className="flex items-center gap-4 text-[#777777]">
                                    <span>{post.category}</span>
                                    <span>{post.date}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-[#0A2640] leading-tight min-h-[3rem]">
                                    {post.title}
                                </h3>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-4">
                                    <img 
                                        src={post.author.image} 
                                        alt={post.author.name}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span className="text-[#0A2640]">{post.author.name}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-16">
                    <button className="border-2 border-[#0A2640] text-[#0A2640] px-12 py-3 rounded-full hover:bg-[#0A2640] hover:text-white transition-colors duration-200 font-semibold">
                        Load more
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Blog
