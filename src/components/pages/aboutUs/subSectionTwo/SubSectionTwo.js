import React from 'react';
import { Link } from 'react-router-dom';
import { Code, BookOpen, Cpu } from 'lucide-react';

const sections = [
    {
        title: "See Our Services",
        content: "We specialize in custom software development, responsive web and mobile apps, UI/UX design, quality assurance, and ongoing support. Our dedicated team ensures cutting-edge solutions that drive business success.",
        link: "/services",
        icon: Code
    },
    {
        title: "What are Technologies We Use",
        content: "Enhance your product using Angular and React.js for dynamic frontend experiences, Spring Boot for robust backend development, and MySQL and MongoDB for efficient data management. Utilize AWS and Firebase for scalability, reliability, and enhanced user experiences.",
        link: "/technology",
        icon: Cpu
    },
    {
        title: "Read Our Blogs",
        content: "Our insightful blogs delve into industry trends, best practices, and innovative solutions. Explore our diverse topics covering software development, technology insights, and business strategies to stay informed and inspired.",
        link: "/blog",
        icon: BookOpen
    }
];

const Section = ({ title, content, link, icon: Icon }) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-center mb-4">
            <Icon className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
        <p className="text-gray-600 mb-4">{content}</p>
        <Link to={link} className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
            More Details...
        </Link>
    </div>
);

export default function SubSectionTwo() {
    return (
        <div className="bg-gray-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {sections.map((section, index) => (
                    <Section key={index} {...section} />
                ))}
            </div>
        </div>
    );
}
