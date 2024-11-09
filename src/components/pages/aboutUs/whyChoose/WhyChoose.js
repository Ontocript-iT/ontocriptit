import React from 'react';
import { Lightbulb, Target, Users } from 'lucide-react';

const features = [
    {
        title: "Trusted Solutions",
        description: "Let us guide you through tailor-made innovation. Rely on our expertise to ensure every challenge finds resolution in our hands with care.",
        icon: Lightbulb
    },
    {
        title: "Trusted Results",
        description: "Count on us to deliver what we promise, surpassing your expectations every time. With a proven history of success, we are dedicated to achieving flawless outcomes.",
        icon: Target
    },
    {
        title: "Trusted Team",
        description: "Meet our passionate experts, committed to your success. Working together seamlessly, we earn your trust with every interaction, empowering you to reach greater heights.",
        icon: Users
    }
];

const FeatureCard = ({ title, description, icon: Icon }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
        <div className="p-6">
            <Icon className="w-12 h-12 text-[#F14902] mb-4" />
            <h2 className="text-xl font-semibold text-[#F14902] mb-2">{title}</h2>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    </div>
);

export default function WhyChoose() {
    return (
        <section className="bg-white py-16 px-4 mb-[500px] sm:mb-[250px]">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-12  pt-4 text-whiteColor">
                    Why Choose Us?
                </h1>
                <div className="flex flex-wrap justify-center gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}
