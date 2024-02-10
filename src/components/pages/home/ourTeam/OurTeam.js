import React from 'react'
import './OurTeam.css'
import people from '../../../../Assets/people.png'

function OurTeam() {

    const team = [
        {
            photo: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "John Doe",
            position: "Software Developer"
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
            position: "QA Enineer"
        }
    ];

    return (
        <div className='our-team-section'>
            <img src={people} />
            <div className='our-team-content'>
                <h3 className='underline-title'>
                    <span className='orange-underline'>Our</span>
                    <span className='blue-underline'> Team</span>
                </h3>
                <div className='team-cards' >
                    {team.map((t) => (
                        <div className='team-card' key={t.name}>
                            <div className='photo'>
                                <img src={t.photo} />
                            </div>
                            <div className='members-details'>
                                <div className='name'>{t.name}</div>
                                <div className='position'>{t.position}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default OurTeam