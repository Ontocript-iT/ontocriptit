import React, { useEffect } from "react";
import "./WhyUs.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhyUs() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <div className="whyUs-section">
            <div className="whyUs-content-title">
                <h3>Why Choose Us?</h3>
            </div>
            <div className="whyUs-content-sub-title">
                <span>
                    Choose us as your digital partner for unmatched innovation,
                    reliability, and transformative solutions{" "}
                </span>
            </div>
            <div className="whyus-cards">
                <div className="whyus-cards-set">
                    <div className="first-row" >
                        <div className="whyus-card expertise" data-aos="fade-right">
                            <span className="card-title">Expertise</span>
                            <span className="card-description">
                                We bring years of industry experience and expertise to deliver
                                top-notch solutions
                            </span>
                        </div>
                        <div className="whyus-card innovation" data-aos="fade-left">
                            <span className="card-title">Innovation</span>
                            <span className="card-description">
                                We stay on the cutting edge of technology, ensuring your website
                                is modern and future-ready
                            </span>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="whyus-card solutions" data-aos="fade-right">
                            <span className="card-title">Solutions</span>
                            <span className="card-description">
                                We customize every project to fit your unique needs and goals
                            </span>
                        </div>
                        <div className="whyus-card timely-delivery" data-aos="fade-left">
                            <span className="card-title">Timely Delivery</span>
                            <span className="card-description">
                                We are committed to delivering projects on time and within budget
                            </span>
                        </div>
                    </div>
                    <div className="third-row">
                        <div className="whyus-card quality-assurance " data-aos="fade-right">
                            <span className="card-title">Quality Assurance</span>
                            <span className="card-description">
                                Our rigorous testing and quality control guarantee a flawless end
                                product
                            </span>
                        </div>
                        <div className="whyus-card affordability" data-aos="fade-left">
                            <span className="card-title">Affordability</span>
                            <span className="card-description">
                                We offer competitive pricing without compromising on quality
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
