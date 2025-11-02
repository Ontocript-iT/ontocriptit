import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTiktok,
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
        { icon: faTiktok, link: 'https://www.tiktok.com/@ontocript.it?_r=1&_t=ZS-913Zzx07oLE' }
    ];

    return (
        <footer className="text-white bg-gradient-to-b from-gray-900 to-black">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="pt-16 pb-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="col-span-1 md:col-span-2">
                            <h2 className="mb-4 text-3xl font-bold text-orange-500">Ontocript iT</h2>
                            <p className="mb-6 leading-relaxed text-gray-300">
                                Empowering Ideas, Engineering Success. We deliver cutting-edge software solutions
                                tailored to meet the evolving needs of businesses worldwide.
                            </p>
                            <div className="mb-6 space-y-1 text-gray-400 text-md">
                                <p>140E, Usgodalla Mawatha, Panapitiya, Kalutara</p>
                                <p><a href="mailto:ontocriptit@gmail.com" className="hover:text-orange-500">contact@ontocriptit.com</a></p>
                                <p><a href="tel:+94705753003" className="hover:text-orange-500">070 575 3003</a> / <a href="tel:+94742779914" className="hover:text-orange-500">074 277 9914</a></p>
                            </div>
                            <div className="flex space-x-4">
                                {socialIcons.map((item, index) => (
                                    <Link key={index} to={item.link} target="_blank" rel="noopener noreferrer"
                                          className="text-gray-400 transition-colors duration-300 hover:text-orange-500">
                                        <FontAwesomeIcon icon={item.icon} size="lg" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {menuItems.map((section, index) => (
                            <div key={index}>
                                <h3 className="mb-4 text-lg font-semibold">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <Link to={item.link} className="text-gray-300 transition-colors duration-300 hover:text-orange-500">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="py-8 border-t border-gray-800">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <p className="mb-4 text-sm text-gray-400 md:mb-0">
                            &copy; 2025 OntocriptiT All Rights Reserved
                        </p>
                        <Link to="/privacy-policy" className="text-sm text-gray-400 transition-colors duration-300 hover:text-orange-500">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
