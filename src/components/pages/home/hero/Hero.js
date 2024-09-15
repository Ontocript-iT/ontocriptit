import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Code, Zap, Users, ChevronDown } from 'lucide-react';

const InnovativeHero = () => {
    const [scrollY, setScrollY] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        controls.start({ y: scrollY * 0.5 });
    }, [scrollY, controls]);

    const features = [
        { icon: Code, title: 'Innovative Solutions', color: 'from-blue-400 to-cyan-300' },
        { icon: Zap, title: 'Lightning Fast', color: 'from-yellow-400 to-orange-500' },
        { icon: Users, title: 'Collaborative Approach', color: 'from-green-400 to-emerald-500' },
    ];

    return (
        <section className="relative bg-gray-900 text-white overflow-hidden min-h-screen">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={controls}
                    initial={{ y: 0 }}
                >
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute h-40 w-40 rounded-full"
                            style={{
                                background: `radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(99,102,241,0) 70%)`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                transform: `scale(${Math.random() * 2 + 1})`,
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Innovate. Create. Elevate.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Empowering businesses with next-generation software solutions that drive growth and innovation.
                    </p>
                    <motion.div
                        className="flex flex-wrap justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-blue-600 rounded-full font-semibold text-lg transition duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg flex items-center"
                        >
                            Start Innovating
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="#portfolio"
                            className="px-8 py-3 border-2 border-blue-400 rounded-full font-semibold text-lg transition duration-300 ease-in-out hover:bg-blue-400 hover:text-gray-900"
                        >
                            Explore Our Work
                        </a>
                    </motion.div>
                </motion.div>

                {/* Feature cards */}
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`bg-gradient-to-br ${feature.color} p-1 rounded-2xl transform hover:scale-105 transition duration-300`}
                            whileHover={{ y: -5 }}
                        >
                            <div className="bg-gray-900 p-6 rounded-2xl h-full flex flex-col justify-between">
                                <feature.icon className="h-12 w-12 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ChevronDown className="h-8 w-8 text-blue-400" />
                </motion.div>
            </div>
        </section>
    );
};

export default InnovativeHero;