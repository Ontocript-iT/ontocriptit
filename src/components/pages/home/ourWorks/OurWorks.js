import React from 'react'
import './OurWorks.css'
import people from '../../../../Assets/people.png'

function OurWorks() {

    const workList = [
        {
            projectTitle: "Digital products or anything else, feel free to reach out – we'd love to hear from you!",
            projecturl: "#"
        },
        {
            projectTitle: "Digital products or anything else, feel free to reach out – we'd love to hear from you!",
            projecturl: "#"
        },
        {
            projectTitle: "digital products or anything else, feel free to reach out – we'd love to hear from you!",
            projecturl: "#"
        },
        {
            projectTitle: "digital products or anything else, feel free to reach out – we'd love to hear from you!",
            projecturl: "#"
        },
        {
            projectTitle: "digital products or anything else, feel free to reach out – we'd love to hear from you!",
            projecturl: "#"
        }

    ]

    return (
        <div className='ourWorks-section'>
            <img src={people} />
            <div className='ourWorks-content'>
                <div className='ourWorks-content-title'>
                    <h3>
                        See Our Works
                    </h3>
                </div>
                <div className='ourWorks-content-sub-title'>
                    <span>
                        We have {workList.length} products
                    </span>
                </div>
                <div className='works-list'>
                    {
                        workList.map((w, index) => (
                            <div key={index}>
                                <div className='work-details'>
                                    <span className='work-title'>{w.projectTitle}</span>
                                    <a className='work-url' href={w.projecturl}>see more...</a>
                                </div>
                                <hr className='work-divider' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurWorks