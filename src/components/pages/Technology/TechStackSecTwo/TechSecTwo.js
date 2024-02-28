import React from 'react';
import './TechSecTwo.css';
import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import solution from "../../../../Assets/solution.png";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function TechSecTwo(props) {
    return (
        <div className="teck-stack-sec-two">

            <div className="stack-body-upper">
                <div className="left-stack-body-bottom">
                    <Card sx={{
                        maxWidth: 345,
                        border: '3px solid #F14902',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
                        transition: 'transform 0.3s',
                        '&:hover': {
                            transform: 'scale(1.05)', // Increase scale on hover
                        }
                    }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={solution}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" fontFamily={"montserrat"}
                                            fontWeight={700} color={"#F14902"}>
                                    Angular
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontFamily={"montserrat"}
                                            color={"#152039"}>
                                    Angular is a platform and framework for building single-page client applications
                                    using HTML and TypeScript.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>


                </div>

                <div className="middle-stack-body-bottom">

                    <Card sx={{
                        maxWidth: 345,
                        border: '3px solid #F14902',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
                        transition: 'transform 0.3s',
                        '&:hover': {
                            transform: 'scale(1.05)', // Increase scale on hover
                        }
                    }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={solution}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" fontFamily={"montserrat"}
                                            fontWeight={700} color={"#F14902"}>
                                    Angular
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontFamily={"montserrat"}
                                            color={"#152039"}>
                                    Angular is a platform and framework for building single-page client applications
                                    using HTML and TypeScript.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>


                </div>
                <div className="right-stack-body-bottom">
                    <h2 style={{color: "#F14902"}}>Databases</h2>
                </div>

            </div>

        </div>

    );
}

export default TechSecTwo;