import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


import picOfThilina from '../../../../Assets/thili.png'
import picOfRavindu from "../../../../Assets/Ravindu.jpg"
import picOfVishwa from "../../../../Assets/Vishwa Waweliyadda.jpg"
import picOfHirumalshi from "../../../../Assets/hirumalshi.jpg"
import picOfSasindu from "../../../../Assets/sasindu.jpg"
import picOfPrageeth from "../../../../Assets/prageeth.jpg"

const team = [
    {
        photo: picOfThilina,
        name: "Thilina Karunarathne",
        position: "Software Engineer"
    },
    {
        photo: picOfVishwa,
        name: "Bhanuka Ekanayake",
        position: "UI/UX Engineer"
    },
    {
        photo: picOfRavindu,
        name: "Ravindu Jayaweera",
        position: "Project Manager"
    },
    {
        photo: picOfSasindu,
        name: "Randima Mallawa",
        position: "QA Engineer"
    },
    {
        photo: picOfHirumalshi,
        name: "Tharakee Hirumalshi",
        position: "Business Analyst"
    },
    // {
    //     photo: picOfPrageeth,
    //     name: "Prageeth Jayasinghe",
    //     position: "Project Manager"
    // },
];

const OurTeam = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setItemsToShow(1);
            else if (window.innerWidth < 768) setItemsToShow(2);
            else if (window.innerWidth < 1024) setItemsToShow(3);
            else setItemsToShow(4);
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
                            className="absolute left-0 z-10 p-2 transition-colors duration-200 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                        </button>
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
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 z-10 p-2 transition-colors duration-200 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;