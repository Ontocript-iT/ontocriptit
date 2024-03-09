import React from 'react';
import './TechSecTwo.css';
import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import solution from "../../../../Assets/solution.png";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Mongodb from "../../../../Assets/mongodb_tech.png";
import Mysql from "../../../../Assets/mysql_tech.png";

function TechSecTwo(props) {
    return (
        <div className="teck-stack-sec-two">

            <div className="stack-body-upper">
                <div className="left-stack-body-bottom">
                    <Card sx={{
                        maxWidth: 345,
                       
                        boxShadow: '10px 25px 105px rgba(0, 0, 0, 0.9)',
                        transition: 'transform 0.3s',
                        '&:hover': {
                            transform: 'scale(1.05)', // Increase scale on hover
                        }
                    }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={Mongodb}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" fontFamily={"montserrat"}
                                            fontWeight={700} color={"#F14902"}>
                                    MongoDB
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontFamily={"montserrat"}
                                            color={"#152039"}>
                                  MongoDB is an open-source NoSQL database known for its document-oriented model and scalability.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>


                </div>

                <div className="middle-stack-body-bottom">

                    <Card sx={{
                        maxWidth: 345,
                        boxShadow: '10px 25px 105px rgba(0, 0, 0, 0.9)',
                        transition: 'transform 0.3s',
                        '&:hover': {
                            transform: 'scale(1.05)', // Increase scale on hover
                        }
                    }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={Mysql}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" fontFamily={"montserrat"}
                                            fontWeight={700} color={"#F14902"}>
                                    MySql
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontFamily={"montserrat"}
                                            color={"#152039"}>
                                    MySQL is an open-source relational database management system based on SQL.
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