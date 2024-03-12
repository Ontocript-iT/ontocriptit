import React, { useEffect, useState } from 'react'
import './OurTeam.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import picOfThilina from '../../../../Assets/thi.jpg'
import picOfRavindu from "../../../../Assets/Ravindu.jpg"
import picOfVishwa from "../../../../Assets/Vishwa Waweliyadda.jpg"
import picOfHirumalshi from "../../../../Assets/hirumalshi.jpg"
import picOfSasindu from "../../../../Assets/sasindu.jpg"


function OurTeam() {

    const [slidesToShow, setSlidesToShow] = useState(4);
    const [dots, setDots] = useState(false);

    useEffect(() => {
        const updateSettings = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 1024) {
                setSlidesToShow(screenWidth < 580 ? 1 : screenWidth < 768 ? 2 : screenWidth < 1100 ? 3 : 4);
            } else {
                setSlidesToShow(4);
                setDots(false);
            }
        };

        updateSettings();

        window.addEventListener('resize', updateSettings);

        return () => {
            window.removeEventListener('resize', updateSettings);
        };
    }, []);

    const settings = {
        dots: dots,
        infinite: true,
        speed: 300,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    const team = [
        {
            photo: picOfThilina,
            name: "Thilina Karunarathne",
            position: "Software Engineer"
        },
        {
            photo: picOfVishwa,
            name: "Vishwa Waweliyadda",
            position: "UI/ UX Engineer"
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
            name: "Hirumalshi Gunawardhana",
            position: "Business Analysts"
        },
        {
            photo: "https://images.pexels.com/photos/4192307/pexels-photo-4192307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Bob Johnson",
            position: "Project Manager"
        },
    ];

    return (
        <div className='team-section'>
            <div className='team-content'>
                <div>
                    <h3 className='team-title'>
                        Our Team
                    </h3>
                    <span className='our-team-slogan'>Meet our team</span>
                </div>
                <div className='team-cards' >
                    <Slider {...settings}>
                        {team.map((t) => (
                            <div className='team-card' key={t.name}>
                                <div className='photo'>
                                    <img src={t.photo} style={{ filter: "grayscale(100%)" }} />
                                </div>
                                <div className='members-details'>
                                    <div className='name'>{t.name}</div>
                                    <div className='position'>{t.position}</div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default OurTeam