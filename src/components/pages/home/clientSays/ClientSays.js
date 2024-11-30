import React from 'react';
import Slider from 'react-slick';  // Import the react-slick package
import Image1 from './assets/p1.png';
import Image2 from './assets/p2.jpg';
import Image3 from './assets/p3.jpg';
import Image4 from './assets/p4.jpg';
import Image5 from './assets/p5.jpg';

// Make sure you import slick-carousel styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const feedbacks = [
    {
        image: Image1,
        name: "Bhanuka Ekanayaka",
        address: "University of Ruhuna",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        image: Image2,
        name: "Thilina Karunarathne",
        address: "University of Moratuwa",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        image: Image3,
        name: "Ravindu Jayaweera",
        address: "University of Moratuwa",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        image: Image5,
        name: "Randima Mallawa",
        address: "University of Moratuwa",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        image: Image4,
        name: "Tharaki Hirumalshi",
        address: "University of Moratuwa",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
];

const ClientSays = () => {
    // Settings for the slick carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default: show 3 slides
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,  
        arrows: false,  // Hide arrows
        responsive: [
            {
                breakpoint: 1524,  // Large screen (tablet or desktop)
                settings: {
                    slidesToShow: 3,  // Show 3 slides on large screens
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,  // Medium screen (small tablet or large mobile)
                settings: {
                    slidesToShow: 2,  // Show 2 slides on medium screens
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 748,  // Small screen (mobile)
                settings: {
                    slidesToShow: 1,  // Show 1 slide on small screens
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="py-12 bg-gray-100 mt-20 mb-10">
            <div className="mx-auto px-4 sm:px-8 max-w-8xl h-auto">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
                <Slider {...settings}>
                    {feedbacks.map((feedback, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md text-center p-6 mx-auto mb-6 hover:shadow-lg transition-all duration-300">
                            {/* Set a larger size for the image to simulate "passport size" */}
                            <img 
                                src={feedback.image} 
                                alt={feedback.name} 
                                className="w-32 h-32 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover shadow-md transition-transform transform hover:scale-110"
                            />
                            <h3 className="text-xl font-bold mb-2">{feedback.name}</h3>
                            <p className="text-gray-600">{feedback.address}</p>
                            <p className="text-gray-600 italic">{feedback.comment}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ClientSays;
