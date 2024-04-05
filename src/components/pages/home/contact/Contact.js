import React from 'react'
import './Contact.css'

import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';


function Contact() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/contact');
    };
    return (
        <div className='contact-section content-section-homepage'>
            <div className='contact-content'>
                <div className='contact-content-title'>
                    <h3>
                        Let’s talk about your product
                    </h3>
                </div>
                <div className='contact-content-sub-title'>
                    <span style={{ textAlign: "justify" }}>
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
                    <div className='contact-message'>
                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ marginTop: "10px", backgroundColor: "#f14902", color: "#FFFFFF", borderRadius: "50px" }}
                                endIcon={<SendIcon />}
                                onClick={handleButtonClick}
                            >
                                Get in touch via message
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact