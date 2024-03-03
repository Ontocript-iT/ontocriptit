import React from "react";
import "./Hero.css";

function Hero() {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Why Clients Prefer <br /> Collaborating with Our Team</h1>
                <div className="description">
                    "Working with the team at Ontocript empowered us to operate in an agile
                    delivery format, developing early prototypes, testing with our
                    customers, and making iterative changes and improvements. Empowering
                    tomorrow through technology today, cultivating innovation, connecting
                    possibilities, and crafting your digital future with excellence and
                    integrity"
                </div>
                <div className="hero-lower">
                    <div className="hero-buttons">
                        <a href="/contact" className="hero-contact-a">Let’s talk</a>
                        <button href="#" className="hero-works-a">See our works</button>
                    </div>
                    <div className="hero-social-icons"></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
