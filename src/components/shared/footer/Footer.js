import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faYoutube,
    faTiktok,
    faMedium,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const menuItems = [
        { title: 'Company', items: [
                { name: 'About us', link: '/aboutus' },
                { name: 'Services', link: '/services' },
                { name: 'Technology', link: '/technology' },
                { name: 'Contact Us', link: '/contact' },
            ]},
        { title: 'Updates', items: [
                // { name: 'Blogs', link: '/blog' },
            ]},
    ];

    const socialIcons = [
        { icon: faFacebook, link: 'https://www.facebook.com/share/1AD6GRzCmD/' },
        { icon: faInstagram, link: '#' },
        { icon: faLinkedin, link: 'https://www.linkedin.com/company/ontocript-it/' },
        { icon: faYoutube, link: '#' },
        { icon: faTiktok, link: 'https://www.tiktok.com/@ontocript.it?_t=ZS-8uvi5QzgTjk&_r=1' },
        { icon: faMedium, link: '#' },
    ];

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <h2 className="text-3xl font-bold text-orange-500 mb-4">Ontocript iT</h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Empowering Ideas, Engineering Success. We deliver cutting-edge software solutions
                                tailored to meet the evolving needs of businesses worldwide.
                            </p>
                            <div className="text-gray-400 mb-6 text-sm space-y-1">
                                <p>140E, USGODALLA MAWATHA, PANAPITIYA, KALUTARA</p>
                                <p><a href="mailto:ontocriptit@gmail.com" className="hover:text-orange-500">ontocriptit@gmail.com</a></p>
                                <p><a href="tel:+94705753003" className="hover:text-orange-500">070 575 3003</a> / <a href="tel:+94742779914" className="hover:text-orange-500">074 277 9914</a></p>
                            </div>
                            <div className="flex space-x-4">
                                {socialIcons.map((item, index) => (
                                    <Link key={index} to={item.link} target="_blank" rel="noopener noreferrer"
                                          className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                                        <FontAwesomeIcon icon={item.icon} size="lg" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {menuItems.map((section, index) => (
                            <div key={index}>
                                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <Link to={item.link} className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-t border-gray-800 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            &copy; 2025 OntocriptiT All Rights Reserved
                        </p>
                        <Link to="/privacy-policy" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
