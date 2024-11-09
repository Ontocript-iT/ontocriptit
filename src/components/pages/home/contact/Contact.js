import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/contact');
    };

    return (
        <div className=" py-16   mb-[150px] sm:mb-[20px]">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                Let's talk about your product
                            </h2>
                            <p className="text-gray-600 mb-6">
                                We're passionate about connecting with new clients and our community. If you have questions about creating digital products or anything else, feel free to reach out – we'd love to hear from you!
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-gray-700">hello@ontocriptit.com</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-gray-700">+(94) 70 575 3003</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 bg-gray-100 p-8 flex items-center justify-center">
                            <button
                                onClick={handleButtonClick}
                                className="bg-gradient-to-r from-blue-500 to-blueColor text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out flex items-center"
                            >
                                Get in touch via message
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;