import React from 'react'
import './TeamPhotos.css'
import people from '../../../../Assets/people.png'
import logoMockup from '../../../../Assets/logoMockup.png'
import picOfThilina from '../../../../Assets/thi.jpg'
import picOfRavindu from "../../../../Assets/Ravindu.jpg"
import picOfVishwa from "../../../../Assets/Vishwa Waweliyadda.jpg"
import picOfSasindu from "../../../../Assets/sasindu.jpg"
import picOfPrageeth from "../../../../Assets/prageeth.jpg"

function TeamPhotos() {

    const team = [
        {
            photo: picOfThilina,
            name: "Thilina Karunarathne",
            position: "Software Engineer"
        },
        {
            photo: picOfRavindu,
            name: "Ravindu Jayaweera",
            position: "Project Manager"
        },
        {
            photo: picOfPrageeth,
            name: "Prageeth Jayasinghe",
            position: "Business Analysts"
        }
    ];

    return (
        <div className='our-team-section'>

            <div className='our-team-content'>
                <h3 className='underline-title'>

                </h3>
                <div className='team-cards' >
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
                </div>
            </div>
            <img style={{ maxWidth: "100%", height: "auto", marginTop: "50px" }} src={logoMockup}></img>

        </div>
    )
}

export default TeamPhotos