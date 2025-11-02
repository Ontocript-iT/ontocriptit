import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/contact');
    };

    return (
        <div className=" py-10 sm:mb-[20px]">
            <div className="px-4 mx-auto">
                <div className="overflow-hidden bg-white rounded-lg shadow-xl">
                    <div className="md:flex">
                        <div className="p-8 md:w-1/2">
                            <h2 className="mb-4 text-3xl font-bold text-gray-800">
                                Let's talk about your product
                            </h2>
                            <p className="mb-6 text-gray-600">
                                We're passionate about connecting with new clients and our community. If you have questions about creating digital products or anything else, feel free to reach out – we'd love to hear from you!
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-gray-700">  contact@ontocriptit.com</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-gray-700">+(94) 74 277 9914</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-8 bg-gray-100 md:w-1/2">
                            <button
                                onClick={handleButtonClick}
                                className="flex items-center px-6 py-3 font-bold text-white transition duration-300 ease-in-out transform rounded-full bg-gradient-to-r from-blue-500 to-blueColor hover:shadow-lg hover:-translate-y-1"
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