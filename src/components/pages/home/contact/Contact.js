import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='contact-section content-section-homepage'>
            <div className='contact-content'>
                <div className='contact-content-title'>
                    <h3>
                        Let’s talk about your product
                    </h3>
                </div>
                <div className='contact-content-sub-title'>
                    <span style={{textAlign:"justify"}}>
                        We're passionate about connecting with new clients and our community. If you have questions about creating digital products or anything else, feel free to reach out – we'd love to hear from you!
                    </span>
                </div>
                <div className='contact-button'>
                    <div className='contact-email'>
                        hello@ontocriptit.com
                    </div>
                    <div className='contact-phone'>
                        +(94) 70 575 3003
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact