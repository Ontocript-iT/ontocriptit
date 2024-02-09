import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import logo1 from "../footer/1.png";



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
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Technology</a></li>
                                <li><a href="#">Process</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        
                        
                    
                    </div>
                    <div className='footerSubBody'>
                        <p className='footerHeads'>Updates</p>
                        <div>
                            <ul className="footer-menu">
                                <li><a href="#">Blogs</a></li>

                            </ul>
                        </div>

                    </div>
                    <div>
                        <p className='footerHeads'>Connect</p>
                     
                        
                        <div>
                            <ul className="footer-menu">
                                <li><a href="#">Blogs</a></li>
                              

                            </ul>
                        </div>
                     
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
                                <ul className="footer-menu">
                                    <li><a href="#">Privacy Policy</a></li>

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