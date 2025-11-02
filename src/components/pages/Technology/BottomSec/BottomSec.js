import React from 'react';
import { Coffee, TrendingUp, Shield, Shuffle } from 'lucide-react';

const features = [
  { title: 'Scalability', icon: Coffee, description: 'These technologies enable seamless scalability, allowing our solutions to grow alongside your business needs.' },
  { title: 'Performance', icon: TrendingUp, description: 'Leveraging these tools results in high-performing applications that deliver optimal user experiences.' },
  { title: 'Security', icon: Shield, description: 'Our choice of technologies prioritizes robust security measures, ensuring the safety and integrity of your data.' },
  { title: 'Flexibility', icon: Shuffle, description: 'With a versatile technology stack, we can adapt to changing project requirements and industry trends with ease.' },
];

const FeatureCard = ({ title, icon: Icon, description }) => (
    <div className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 mr-2 text-blue-500" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
);

const WhyUseTechnologies = () => {
  return (
      <div className="px-4 py-16 bg-gray-100 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-center text-blueColor">
            Why Use These Technologies
          </h2>
          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
            <div>
              <p className="leading-relaxed text-gray-700 text-md">
                Our company chooses these technologies for their unmatched benefits, including enhanced scalability, lightning-fast performance, robust security measures, and unmatched flexibility. Each technology is carefully selected to ensure optimal development outcomes, empowering our projects with seamless scalability, fortified security protocols, and the agility to adapt to evolving requirements, driving innovation and success in every endeavor.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default WhyUseTechnologies;