import React, { useState, useEffect } from 'react';
import {
    Trophy,
    Clock,
    Code,
    Users,
    Star
} from 'lucide-react';

const ProfessionalAchievements = () => {
    // State for animated counters
    const [counters, setCounters] = useState({
        experience: 1,
        projects: 0,
        expertise: 0,
        clients: 0
    });

    // Animated counter effect
    useEffect(() => {
        const animateCounters = () => {
            const targets = {
                experience: 2,
                projects: 7,
                expertise: 5,
                clients: 6
            };

            const animationDuration = 5000; // 2 seconds
            const steps = 10; // Update 60 times per second

            Object.keys(targets).forEach(key => {
                const target = targets[key];
                const increment = target / steps;

                const counterInterval = setInterval(() => {
                    setCounters(prev => {
                        const newValue = prev[key] + increment;
                        if (newValue >= target) {
                            clearInterval(counterInterval);
                            return { ...prev, [key]: target };
                        }
                        return { ...prev, [key]: Math.round(newValue) };
                    });
                }, animationDuration / steps);

                return () => clearInterval(counterInterval);
            });
        };

        animateCounters();
    }, []);

    // Achievement data
    const achievementsData = [
        {
            icon: <Clock className="w-12 h-12 text-white" />,
            value: counters.experience,
            label: "Years of Experience",
            gradient: "from-blue-200 to-blue-900"
        },
        {
            icon: <Code className="w-12 h-12 text-white" />,
            value: counters.projects,
            label: "Projects Completed",
            gradient: "from-blue-300 to-blue-900"
        },
        {
            icon: <Star className="w-12 h-12 text-white" />,
            value: counters.expertise,
            label: "Expert Skills",
            gradient: "from-blue-400 to-blue-900"
        },
        {
            icon: <Users className="w-12 h-12 text-white" />,
            value: counters.clients,
            label: "Satisfied Clients",
            gradient: "from-blue-800 to-blue-950"
        }
    ];

    return (
        <div className="flex items-center justify-center p-10 mb-12 bg-gray-50">
            <div className="w-full max-w-6xl">
                <h1 className="mb-2 text-3xl font-bold text-center text-gray-800">
                    Professional Achievements
                </h1>

                <p className="max-w-2xl mx-auto mb-12 text-lg text-center text-gray-600">
                    Discover the milestones we've reached and the impact we've made through dedication and innovation
                </p>

                {/* Achievements Grid */}
                <div className="grid gap-6 md:grid-cols-4">
                    {achievementsData.map((achievement, index) => (
                        <div
                            key={index}
                            className={`
                bg-gradient-to-br ${achievement.gradient}
                rounded-2xl shadow-xl p-6 text-center 
                transform transition duration-300 
                hover:scale-105 hover:shadow-2xl
                relative overflow-hidden
              `}
                        >
                            {/* Background Glow Effect */}
                            <div className="absolute inset-0 bg-blue-500 opacity-10 blur-3xl"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex justify-center mb-4">
                                    {achievement.icon}
                                </div>
                                <h2 className="mb-2 text-4xl font-bold text-white">
                                    {achievement.value}+
                                </h2>
                                <p className="text-sm tracking-wider uppercase text-white/80">
                                    {achievement.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfessionalAchievements;