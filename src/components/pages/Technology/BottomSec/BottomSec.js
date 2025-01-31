import React from 'react';
import { Coffee, TrendingUp, Shield, Shuffle } from 'lucide-react';

const features = [
  { title: 'Scalability', icon: Coffee, description: 'These technologies enable seamless scalability, allowing our solutions to grow alongside your business needs.' },
  { title: 'Performance', icon: TrendingUp, description: 'Leveraging these tools results in high-performing applications that deliver optimal user experiences.' },
  { title: 'Security', icon: Shield, description: 'Our choice of technologies prioritizes robust security measures, ensuring the safety and integrity of your data.' },
  { title: 'Flexibility', icon: Shuffle, description: 'With a versatile technology stack, we can adapt to changing project requirements and industry trends with ease.' },
];

const FeatureCard = ({ title, icon: Icon, description }) => (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-blue-500 mr-2" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
);

const WhyUseTechnologies = () => {
  return (
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-blueColor text-center mb-8">
            Why Use These Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our company chooses these technologies for their unmatched benefits, including enhanced scalability, lightning-fast performance, robust security measures, and unmatched flexibility. Each technology is carefully selected to ensure optimal development outcomes, empowering our projects with seamless scalability, fortified security protocols, and the agility to adapt to evolving requirements, driving innovation and success in every endeavor.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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