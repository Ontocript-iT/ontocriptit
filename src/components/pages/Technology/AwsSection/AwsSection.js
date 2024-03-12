import React from 'react';
import './AwsSection.css';
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import solution from "../../../../Assets/solution.png";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Firebase from "../../../../Assets/firebase-tech.png";
import Aws from "../../../../Assets/aws-tech.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function AwsSection(props) {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div style={{ marginLeft: "80px" }}>
            <h1 className="cloud-com-heading">Cloud Computing Solutions</h1>
            <div className='cloud-sec-container'>




                <div style={{ marginRight: "70px" }}>
                    <Card data-aos="fade-right" sx={{
                        maxWidth: 645,
                        boxShadow: '10px 5px 15px rgba(0, 0, 0, 0.5)',
                        transition: 'transform 0.3s',
                        '&:hover': {
                            transform: 'scale(1.05)', // Increase scale on hover
                        }
                    }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={Aws}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" fontFamily={"montserrat"}
                                    fontWeight={700} color={"#F14902"}>
                                    AWS Services
                                </Typography>
                                <Typography variant="body2" fontFamily={"montserrat"}
                                    color={"#152039"}>
                                    Angular is a platform and framework for building single-page client applications
                                    using HTML and TypeScript.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </div>
                <div>

                    <Card data-aos="fade-left" sx={{
                        maxWidth: 645,
                        boxShadow: '10px 5px 15px rgba(0, 0, 0, 0.5)',
                        transition: 'transform 0.3s',
                        '&:hover': {
                            transform: 'scale(1.05)', // Increase scale on hover
                        }
                    }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={Firebase}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" fontFamily={"montserrat"}
                                    fontWeight={700} color={"#F14902"}>
                                    Firebase
                                </Typography>
                                <Typography variant="body2" fontFamily={"montserrat"}
                                    color={"#152039"}>
                                    Angular is a platform and framework for building single-page client applications
                                    using HTML and TypeScript.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>


                </div>



            </div>
        </div>
    );
}

export default AwsSection;