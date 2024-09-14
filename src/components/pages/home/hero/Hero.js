import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Facebook, Twitter, Instagram } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-r bg-blueColor to-indigo-700 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Why Clients Prefer <br /> Collaborating with Our Team
                    </h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 mb-8 max-w-2xl mx-auto lg:mx-0"
                    >
                        <p className="text-lg leading-relaxed">
                            "Working with the team at Ontocript empowered us to operate in an agile
                            delivery format, developing early prototypes, testing with our
                            customers, and making iterative changes and improvements. Empowering
                            tomorrow through technology today, cultivating innovation, connecting
                            possibilities, and crafting your digital future with excellence and
                            integrity"
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
                    >
                        <Link
                            to="/contact"
                            className="px-8 py-3 bg-white text-blueColor rounded-full font-semibold text-lg transition duration-300 ease-in-out hover:bg-blue-50 hover:shadow-lg flex items-center"
                        >
                            Let's talk
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            to="/works"
                            className="px-8 py-3 border-2 border-white rounded-full font-semibold text-lg transition duration-300 ease-in-out hover:bg-white hover:text-orangeColor"
                        >
                            See our works
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6"
            >
                {[Facebook, Twitter, Instagram].map((Icon, index) => (
                    <a
                        key={index}
                        href="#"
                        className="text-white hover:text-blue-200 transition duration-300"
                    >
                        <Icon className="h-6 w-6" />
                    </a>
                ))}
            </motion.div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-400 to-pink-500 rounded-full filter blur-3xl opacity-20 -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-400 to-cyan-500 rounded-full filter blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/3"></div>
        </section>
    );
};

export default Hero;