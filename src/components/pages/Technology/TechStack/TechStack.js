import React from 'react';
import './TechStack.css';
import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import solution from "../../../../Assets/solution.png";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Angular from "../../../../Assets/Angular_tech.png";
import ReactJs from "../../../../Assets/Reactjs_tech.png";
import Mongodb from "../../../../Assets/mongodb_tech.png";
import Springboot from "../../../../Assets/springboot_tech.png";
import Mysql from "../../../../Assets/mysql_tech.png";






function TechStack(props) {
    return (
        <div className="stack-container">

            <div className="stack-body-upper">
                <div className="left-stack-body-upper">
                    <h2 style={{color: "#F14902"}}>Front End</h2>

                </div>
                <div className="middle-stack-body-upper">

                    <Card sx={{
                        maxWidth: 445,
                        boxShadow: '10px 5px 15px rgba(241, 73, 2, 0.5)',
                        transition: 'transform 0.3s',
                        '&:hover': {
                            transform: 'scale(1.05)', // Increase scale on hover
                        }
                    }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={Angular}
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
                <div className="right-stack-body-upper">
                    <Card sx={{
                        maxWidth: 445,
                        boxShadow: '10px 5px 15px rgba(241, 73, 2, 0.5)',
                        transition: 'transform 0.3s',
                        '&:hover': {
                            transform: 'scale(1.05)', // Increase scale on hover
                        }
                    }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={ReactJs}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" fontFamily={"montserrat"}
                                            fontWeight={700} color={"#F14902"}>
                                    React
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontFamily={"montserrat"}
                                            color={"#152039"}>
                                    React is a JavaScript library for building user interfaces, known for its
                                    component-based architecture.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                   

                </div>
            </div>


            <div className="stack-body-upper">

                <div className="second-left-stack-body-upper">

                    <Card sx={{
                        maxWidth: 345,
                        boxShadow: '10px 5px 15px rgba(204, 229, 255, 0.5)',
                        transition: 'transform 0.3s',
                        '&:hover': {
                            transform: 'scale(1.05)', // Increase scale on hover
                        }
                    }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={Springboot}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" fontFamily={"montserrat"}
                                            fontWeight={700} color={"#F14902"}>
                                    SpringBoot
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontFamily={"montserrat"}
                                            color={"#152039"}>
                                    Spring Boot is a Java-based framework for quickly building stand-alone, production-grade Spring applications
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                        <h2 style={{color: "#F14902", marginLeft: "80px"}}>Backend End</h2>




                </div>

                <div className="middle-stack-body-upper">



                </div>
                <div className="right-stack-body-upper">


                <div className='text-anim-com-name' style={{
                        fontSize: "80px",
                        marginTop: "-10px",
                        color: "#F14902",
                        fontWeight:"700",
                        marginLeft: "-70px"
                    }}>OntoCript iT  </div> 

               <div className='text-anim-com-name'> 
               <span className='text-anim-text' style={{
                        fontSize: "80px",
                        marginTop: "-10px",
                        color: "#ffffff",
                        marginLeft: "100px",
                        fontWeight:"600",

                    }}>  TechStack</span>
            </div>

                 
                
                   



                </div>
            </div>

        </div>
    );
}

export default TechStack;