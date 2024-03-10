import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import logo1 from "../footer/1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faYoutube,
    faTiktok,
    faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Contact from '../../pages/home/contact/Contact';



class Footer extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className='footer-container'>


                <div className='footerBody'>
                    <div className='footerMenu'>
                        <div >
                            <p className='footerHeadsCompany'>Company</p>

                            <div>

                                <ul className="footer-menu">
                                    <li><a href="/aboutus">About us</a></li>
                                    <li><a href="/services">Services</a></li>
                                    <li><a href="#">Technology</a></li>
                                    {/* <li><a href="/process">Process</a></li> */}
                                    <li><a href="/contact">Contact Us</a></li>
                                </ul>
                            </div>



                        </div>
                        <div className='footerSubBody'>
                            <p className='footerHeads'>Updates</p>
                            <div>
                                <ul className="footer-menu">
                                    <li><a href="/blog">Blogs</a></li>

                                </ul>
                            </div>

                        </div>
                        <div className='footer-menu-social-icons'>
                            <Link to="#" target='_blank'><FontAwesomeIcon icon={faFacebook} className='fa-i' /></Link>
                            <Link to="#" target='_blank'><FontAwesomeIcon icon={faInstagram} className='fa-i' /></Link>
                            <Link to="#" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='fa-i' /></Link>
                            <Link to="#" target='_blank'><FontAwesomeIcon icon={faYoutube} className='fa-i' /></Link>
                            <Link to="#" target='_blank'><FontAwesomeIcon icon={faTiktok} className='fa-i' /></Link>
                            <Link to="#" target='_blank'><FontAwesomeIcon icon={faMedium} className='fa-i' /></Link>
                        </div>
                    </div>

                    <div className='footerDec'>
                        <p>Empowering Ideas,Engineering Success</p>

                        <h6> At Ontocript iT, we excel in delivering cutting-edge software solutions tailored to meet
                            the evolving needs of businesses worldwide. With a dedicated team of skilled developers and
                            innovators, we specialize in crafting bespoke software applications that drive efficiency,
                            enhance productivity, and propel business growth. Leveraging the latest technologies and
                            industry best practices, we empower our clients to stay ahead in today's competitive
                            landscape. From conceptualization to deployment and ongoing support, we are committed to
                            delivering superior quality solutions that exceed expectations and foster long-term success.
                            Partner with us to unlock the full potential of technology and transform your vision into
                            reality
                        </h6>


                        <div className='allRights-container'>

                            <div>
                                <ul className="footer-menu footer-menu-privacy">
                                    <li><a href="/privacy-policy">Privacy Policy</a></li>

                                </ul>
                            </div>
                            <p className='privacyPolicy'>2023 OntocriptiT All Rights Reserved</p>
                        </div>


                    </div>


                    {/*<div className="logo">*/}
                    {/*    <img src={logo} alt="Logo"/>*/}
                    {/*</div>*/}

                </div>

                {/*<div className="logo1">*/}
                {/*    <img src={logo1} alt="Logo"/>*/}
                {/*</div>*/}
                
            </div>
          
        );
    }
}

Footer.propTypes = {};

export default Footer;