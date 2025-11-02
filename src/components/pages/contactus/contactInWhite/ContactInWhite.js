import React from 'react';

const ContactInWhite = () => {
    return (
        <div className="px-4 py-16 bg-white sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Let's talk
                </h2>
                <p className="mt-4 leading-6 text-gray-500 text-md">
                    Cultivating Connections, Resolving Questions, and Delivering Solutions. Reach out to us for expert assistance. Your feedback fuels our growth and shapes our commitment to serving you.
                </p>
                <div className="mt-10">
                    <div className="inline-flex rounded-md shadow">
                        <a
                            href="mailto:hello@ontocriptit.com"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-orangeColor hover:bg-[#162345]"
                        >
                            contact@ontocriptit.com
                        </a>
                    </div>
                    <div className="inline-flex mt-3 rounded-md shadow">
                        <a
                            href="tel:+94742779914"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium bg-white border border-transparent rounded-md text-blueColor hover:bg-gray-50"
                        >
                            +(94) 74 277 9914
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInWhite;