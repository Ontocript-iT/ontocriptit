import React, { useState, useEffect, useCallback } from 'react';

import { ChevronLeft, ChevronRight, Linkedin, Facebook } from 'lucide-react';

import { ChevronLeft, ChevronRight } from 'lucide-react';


import picOfThilina from '../../../../Assets/nuwan.png'
import picOfImasha from "../../../../Assets/imashaaaa.png"
import picOfVishwa from "../../../../Assets/Vishwa Waweliyadda.jpg"
import picOfHirumalshi from "../../../../Assets/hirumalshi.jpg"

import picOfRandima from "../../../../Assets/rand.png"

import picOfSasindu from "../../../../Assets/sasindu.jpg"



const team = [
    {
        photo: picOfThilina,
        name: "Thilina Karunarathne",
        position: "Project Manager",
        linkedin: "https://www.linkedin.com/in/thilina",
        facebook: "https://www.facebook.com/thilina"
    },
    {
        photo: picOfVishwa,
        name: "Bhanuka Ekanayake",
        position: "Lead Engineer",
        linkedin: "https://www.linkedin.com/in/bhanuka",
        facebook: "https://www.facebook.com/bhanuka"
    },
    {
        photo: picOfImasha,
        name: "Imasha Rasangee",
        position: "QA Engineer",
        linkedin: "https://www.linkedin.com/in/ravindu",
        facebook: "https://www.facebook.com/ravindu"
    },
    {
        photo: picOfRandima,
        name: "Randima Mallawa",
        position: "Senior Engineer",
        linkedin: "https://www.linkedin.com/in/randima",
        facebook: "https://www.facebook.com/randima"
    },
    {
        photo: picOfHirumalshi,
        name: "Tharakee Hirumalshi",
        position: "UI/UX Engineer",
        linkedin: "https://www.linkedin.com/in/hirumalshi",
        facebook: "https://www.facebook.com/hirumalshi"
    },
];

const OurTeam = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);
    const [hoveredMember, setHoveredMember] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setItemsToShow(1);
            else if (window.innerWidth < 768) setItemsToShow(2);
            else if (window.innerWidth < 1024) setItemsToShow(3);
            else if (window.innerWidth < 1524) setItemsToShow(4);
            else setItemsToShow(5);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % (team.length - itemsToShow + 1)
        );
    }, [itemsToShow]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? team.length - itemsToShow : prevIndex - 1
        );
    }, [itemsToShow]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [itemsToShow]);

    return (

        <div className="pt-20 bg-gray-50 pb-60 mb-36">
            <div className="container px-4 mx-auto">
                <h2 className="pt-4 mb-4 text-3xl font-bold text-center text-blueColor">
                    Our Team
                </h2>
                <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600 text-lg">
                    Innovative minds driving our success forward

        <div className="pt-20 bg-gray-100 pb-60 ">
            <div className="container px-4 mx-auto">
                <h2 className="pt-4 mb-4 text-3xl font-bold text-center text-whiteColor">
                    Our Team
                </h2>
                <p className="max-w-2xl mx-auto mb-6 text-center text-gray-600 sm:mb-8">
                    Meet the talented individuals behind our success

                </p>
                <div className="relative">
                    <div className="flex items-center justify-center">
                        <button
                            onClick={prevSlide}

                            className="absolute left-0 z-10 p-3 transition-all duration-300 bg-white rounded-full shadow-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"

                            className="absolute left-0 z-10 p-2 transition-colors duration-200 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"

                        >
                            <ChevronLeft className="w-7 h-7 text-blue-600" />
                        </button>

                        <div className="flex overflow-visible space-x-6">
                            {team.slice(currentIndex, currentIndex + itemsToShow).map((member) => (
                                <div
                                    key={member.name}
                                    className="w-full max-w-xs group"
                                    onMouseEnter={() => setHoveredMember(member.name)}
                                    onMouseLeave={() => setHoveredMember(null)}
                                >
                                    <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500
                                        hover:shadow-2xl transform hover:-translate-y-2">
                                        <div className="relative">
                                            <img
                                                src={member.photo}
                                                alt={member.name}
                                                className="w-full h-80 object-cover rounded-2xl"
                                            />
                                            {hoveredMember === member.name && (
                                                <div className="absolute inset-0 bg-blue-600 bg-opacity-70 rounded-2xl
                                                    flex flex-col justify-between p-6 text-white transition-all duration-500">
                                                    <div className="text-center mt-12">
                                                        <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                                        <p className="text-blue-100">{member.position}</p>
                                                    </div>
                                                    <div className="flex justify-center space-x-4 pb-4">
                                                        <a
                                                            href={member.linkedin}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:scale-110 transition-transform bg-white bg-opacity-20 p-3 rounded-full"
                                                        >
                                                            <Linkedin className="w-7 h-7 text-white" />
                                                        </a>
                                                        <a
                                                            href={member.facebook}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:scale-110 transition-transform bg-white bg-opacity-20 p-3 rounded-full"
                                                        >
                                                            <Facebook className="w-7 h-7 text-white" />
                                                        </a>
                                                    </div>
                                                </div>
                                            )}

                        <div className="flex overflow-hidden">
                            {team.slice(currentIndex, currentIndex + itemsToShow).map((member, index) => (
                                <div key={member.name} className="w-full px-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
                                    <div className="overflow-hidden transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
                                        <img
                                            src={member.photo}
                                            alt={member.name}
                                            className="object-cover w-full h-64 transition-all duration-300 filter grayscale hover:grayscale-0"
                                        />
                                        <div className="p-4">
                                            <h3 className="mb-1 text-xl font-semibold text-gray-800">{member.name}</h3>
                                            <p className="text-gray-600">{member.position}</p>

                                        </div>
                                        {hoveredMember !== member.name && (
                                            <div className="p-4 bg-white">
                                                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                                                <p className="text-gray-600">{member.position}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={nextSlide}

                            className="absolute right-0 z-10 p-3 transition-all duration-300 bg-white rounded-full shadow-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"

                            className="absolute right-0 z-10 p-2 transition-colors duration-200 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"

                        >
                            <ChevronRight className="w-7 h-7 text-blue-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;