import React, { useState } from 'react'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is your refund policy?",
            answer: "Money back guarantee within 30 days of purchase. If you're not satisfied with our product, we'll refund your purchase. No questions asked."
        },
        {
            question: "How do you process payments?",
            answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment gateway."
        },
        {
            question: "Can I change my plan later?",
            answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
        },
        {
            question: "What's your customer support response time?",
            answer: "We typically respond to support tickets within 24 hours. Premium customers receive priority support with 4-hour response time."
        },
        {
            question: "Do you offer custom solutions?",
            answer: "Yes, we provide custom solutions tailored to your specific needs. Contact our sales team for more information."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A2640] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-500">
                        Everything you need to know about our services and pricing.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="border border-gray-200 rounded-2xl overflow-hidden"
                        >
                            <button
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-lg font-semibold text-[#0A2640]">
                                    {faq.question}
                                </span>
                                <span className="ml-6 flex-shrink-0">
                                    <svg
                                        className={`w-6 h-6 transform transition-transform duration-200 ${
                                            activeIndex === index ? 'rotate-180' : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`transition-all duration-200 ease-in-out ${
                                    activeIndex === index
                                        ? 'max-h-48 opacity-100'
                                        : 'max-h-0 opacity-0'
                                } overflow-hidden`}
                            >
                                <div className="px-6 pb-4 text-gray-600">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-500 mb-4">Still have questions?</p>
                    <button className="bg-[#0A2640] text-white px-8 py-3 rounded-full hover:bg-[#083250] transition-colors duration-200 font-semibold">
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FAQ
