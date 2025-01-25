import React from 'react';

const ContactInWhite = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Let's talk
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-500">
                    Cultivating Connections, Resolving Questions, and Delivering Solutions. Reach out to us for expert assistance. Your feedback fuels our growth and shapes our commitment to serving you.
                </p>
                <div className="mt-10">
                    <div className="inline-flex rounded-md shadow">
                        <a
                            href="mailto:hello@ontocriptit.com"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orangeColor hover:bg-indigo-700"
                        >
                            ontocriptit@gmail.com
                        </a>
                    </div>
                    <div className="mt-3 inline-flex rounded-md shadow">
                        <a
                            href="tel:+94705753003"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blueColor bg-white hover:bg-gray-50"
                        >
                            +(94) 70 575 3003
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInWhite;