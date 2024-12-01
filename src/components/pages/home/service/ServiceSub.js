import React from 'react';
import { CheckCircle, Shield, TrendingUp, Layers } from 'lucide-react';
import image1 from "../../../../Assets/1234.png"
import image2 from "../../../../Assets/12345.png"

// Separate data into a constants file or separate module
const SERVICES_DATA = [
  {
    icon: CheckCircle,
    title: 'Expertise',
    description: 'Our team comprises seasoned professionals with extensive experience in IT solutions.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Count on us for dependable, 24/7 support to keep your operations running smoothly.',
  },
  {
    icon: Layers,
    title: 'Customization',
    description: 'We tailor our services to meet your specific business needs, ensuring optimal outcomes.',
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Catalysts for change, scaling your business seamlessly.',
  },
];

const BADGE_DATA = [
  {
    icon: TrendingUp,
    title: 'Business Growth',
    description: 'Strategic solutions driving your business forward.',
  },
  {
    icon: Shield,
    title: 'IT Consultancy',
    description: 'Expert guidance for your technology infrastructure.',
  },
  {
    icon: Layers,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud computing services.',
  },
  {
    icon: CheckCircle,
    title: 'Digital Transformation',
    description: 'Innovative approaches to modernize your business.',
  },
];

const ServiceBadge = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-4 hover:bg-blue-50 transition-colors rounded-lg">
      <div className="bg-blue-100 text-blue-500 w-12 h-12 flex items-center justify-center rounded-full mb-3">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-gray-800 font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
);

const Service = () => {
  return (
      <div className="bg-gray-50 pb-20 pt-16 mr-10 ml-10">
        <div className="mx-auto px-4 lg:px-8">
          {/* About Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="relative grid grid-cols-2 gap-4 order-1 lg:order-first h-[450px] sm:ml-32">
              <div className="absolute top-0 left-0 w-[65%] z-10 shadow-2xl rounded-lg overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <img
                    src={image1}
                    alt="Team collaboration"
                    className="w-full h-full md:h-[475px] lg:h-full xl:h-[600px] object-cover"
                />
              </div>
              <div className="absolute top-16 right-0 w-[65%] z-20 shadow-1xl rounded-lg overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                    src={image2}
                    alt="Tech solutions"
                    className="w-[300px] object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-blueColor mb-4 leading-tight">
                We Provide the Best <span className="text-blue-600">IT Solutions</span>
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-6">
                At Ontocript IT, we specialize in delivering cutting-edge technology solutions tailored to meet the unique needs of businesses. Our experienced team offers reliable, scalable, and cost-effective services, including cloud computing, cybersecurity, software development, and IT consulting.
              </p>
              <ul className="space-y-4 text-gray-700">
                {SERVICES_DATA.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <service.icon className="text-blue-500 w-6 h-6 mr-3 mt-6 flex-shrink-0" />
                      <p className="mt-6">
                        <span className="font-medium">{service.title}: </span>
                        {service.description}
                      </p>
                    </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Badge Section */}
          <div className="lg:mt-32 md:mt-8">
            <h3 className="text-3xl font-bold text-center text-blueColor mb-8">
              Our Core Capabilities
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {BADGE_DATA.map((badge, index) => (
                  <ServiceBadge key={index} {...badge} />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Service;