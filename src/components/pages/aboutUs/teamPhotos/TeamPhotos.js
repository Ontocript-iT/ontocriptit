import React from 'react'
import './TeamPhotos.css'
import people from '../../../../Assets/people.png'
import logoMockup from '../../../../Assets/logoMockup.png'
import picOfThilina from '../../../../Assets/thi.jpg'
import picOfRavindu from "../../../../Assets/Ravindu.jpg"
import picOfVishwa from "../../../../Assets/Vishwa Waweliyadda.jpg"
import picOfSasindu from "../../../../Assets/sasindu.jpg"

function TeamPhotos() {

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
            photo: "https://st.depositphotos.com/2673929/54174/i/450/depositphotos_541742048-stock-photo-businesswoman-confident-look-dressed-beige.jpg",
            name: "Laura Griffin",
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