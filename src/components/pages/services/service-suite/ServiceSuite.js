import React from 'react'
import './ServiceSuite.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function ServiceSuite() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='suite-container'>
            <h1 className='suite-main-heading'>Our Technology Services Suite</h1>
            <h6 className='suite-sub-heading'>We provide these digital services to grow your business</h6>

            <div className='suite-body'>
                <div className='suite-content' data-aos="fade-right">

                    <h1 className='main-text-in-suite'>Fullstack Development</h1>
                    <h4 className='sub-text-in-suite'>Comprehensive Fullstack Development Solutions</h4>

                </div>
                <div className='suite-content' data-aos="fade-left">

                    <h1 className='main-text-in-suite'>UI/UX Design</h1>
                    <h4 className='sub-text-in-suite'>Innovative UI/UX Design Expertise</h4>

                </div>
            </div>

            <div className='suite-body'>
                <div className='suite-content' data-aos="fade-right">

                    <h1 className='main-text-in-suite'>Cloud Services</h1>
                    <h4 className='sub-text-in-suite'>Robust Cloud Solutions & Services</h4>

                </div>
                <div className='suite-content' data-aos="fade-left">
                    <h1 className='main-text-in-suite'>Digital Marketing</h1>
                    <h4 className='sub-text-in-suite'>Strategic Digital Marketing Solutions</h4>

                </div>
            </div>

        </div>

    )
}
