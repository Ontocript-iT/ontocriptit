import React from 'react'
import './OurWorks.css'
import people from '../../../../Assets/people.png'
import Swal from 'sweetalert2'
import webOne from '../../../../Assets/WebOne.png'
import webTwo from '../../../../Assets/WebTwo.png'
import webThree from '../../../../Assets/WebThree.png'

function clickedLink(title, decription, image) {
    return () => {
        Swal.fire({
            title: title,
            text: decription,
            imageUrl: image,
            imageWidth: 400,
            imageAlt: "Project Image",
            showCloseButton: true,
            confirmButtonText: `
            <i class="fa fa-thumbs-up"></i> Great! 👍🏼
          `,
        });
    };
}

function OurWorks() {

    const workList = [
        {
            projectTitle: "Ontocript Website",
            description: "We're passionate about connecting with new clients and our community. If you have questions about creating digital products or anything else, feel free to reach out—we'd love to hear from you!",
            projecturl: "#",
            image: webOne
        },
        {
            projectTitle: "Ontocript Website",
            description: "We're passionate about connecting with new clients and our community. If you have questions about creating digital products or anything else, feel free to reach out—we'd love to hear from you!",
            projecturl: "#",
            image: webTwo
        },
        {
            projectTitle: "Ontocript Website",
            description: "We're passionate about connecting with new clients and our community. If you have questions about creating digital products or anything else, feel free to reach out—we'd love to hear from you!",
            projecturl: "#",
            image: webThree
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
                        {workList.length} Products
                    </span>
                </div>
                <div className='works-list'>
                    {
                        workList.map((w, index) => (
                            <div key={index}>
                                <div className='work-details'>
                                    <h3 className='work-title'>{w.projectTitle}</h3>
                                    <span className='work-decription'>{w.description}</span>
                                    <a className='work-url' onClick={clickedLink(w.projectTitle, w.description, w.image)}>More...</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurWorks