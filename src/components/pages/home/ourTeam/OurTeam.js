import React, { useEffect, useState } from 'react'
import './OurTeam.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            photo: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "John Doe",
            position: "Software Engineer"
        },
        {
            photo: "https://images.pexels.com/photos/4892782/pexels-photo-4892782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Jane Smith",
            position: "UI/ UX Engineer"
        },
        {
            photo: "https://images.pexels.com/photos/4192307/pexels-photo-4192307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Bob Johnson",
            position: "Project Manager"
        },
        {
            photo: "https://images.pexels.com/photos/8053518/pexels-photo-8053518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Alice Williams",
            position: "QA Engineer"
        },
        {
            photo: "https://st.depositphotos.com/2673929/54174/i/450/depositphotos_541742048-stock-photo-businesswoman-confident-look-dressed-beige.jpg",
            name: "Laura Griffin",
            position: "Business Analysts"
        }
    ];

    return (
        <div className='team-section'>
            <div className='team-content'>
                <div>
                    <h3 className='team-title'>
                        Our Team
                    </h3>
                    <span  className='our-team-slogan'>Meet our team</span>
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