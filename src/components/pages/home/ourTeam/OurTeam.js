import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


import picOfThilina from '../../../../Assets/thi.jpg'
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
        name: "Vishwa Waweliyadda",
        position: "UI/UX Engineer"
    },
    {
        photo: picOfRavindu,
        name: "Ravindu Jayaweera",
        position: "Project Manager"
    },
    {
        photo: picOfSasindu,
        name: "Sasindu Weerakkodi",
        position: "QA Engineer"
    },
    {
        photo: picOfHirumalshi,
        name: "Tharakee Hirumalshi",
        position: "Business Analyst"
    },
    {
        photo: picOfPrageeth,
        name: "Prageeth Jayasinghe",
        position: "Project Manager"
    },
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

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % (team.length - itemsToShow + 1)
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? team.length - itemsToShow : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [itemsToShow]);

    return (
        <div className="bg-gray-100 pb-60 pt-10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center pt-4 mb-4 text-whiteColor">
                    Our Team
                </h2>
                <p className="text-center text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                    Meet the talented individuals behind our success
                </p>
                <div className="relative">
                    <div className="flex items-center justify-center">
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 absolute left-0 z-10"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                        </button>
                        <div className="flex overflow-hidden">
                            {team.slice(currentIndex, currentIndex + itemsToShow).map((member, index) => (
                                <div key={member.name} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4">
                                    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                        <img
                                            src={member.photo}
                                            alt={member.name}
                                            className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                                            <p className="text-gray-600">{member.position}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 absolute right-0 z-10"
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