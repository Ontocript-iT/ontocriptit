import React from 'react'
import "./WhyChoose.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


import team from '../../../../Assets/team.png';
import solution from '../../../../Assets/solution.png';
import result from '../../../../Assets/result.png';



export default function WhyChoose() {

  return (
    <div className='why-choose-container'>
        <h1 className='why-choose-topic'>Why Choose Us?</h1>

   <div className='card'>

    <div className='card-one'>
    <Card sx={{ maxWidth: 345,boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)', transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)', // Increase scale on hover
    }}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={solution}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontFamily={"montserrat"} fontWeight={700} color={"#F14902"}>
            Trusted Solutions
          </Typography>
          <Typography variant="body2" fontFamily={"montserrat"}  color={"#152039"}>
          Let us guide you through tailor-made innovation. Rely on our expertise to ensure every challenge finds resolution in our hands with care         </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>
    <div className='card-two'>
    <Card sx={{ maxWidth: 345,boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)', transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)', // Increase scale on hover
    } }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={result}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontFamily={"montserrat"} fontWeight={700} color={"#F14902"}>
            Trusted Results
          </Typography>
          <Typography variant="body2" fontFamily={"montserrat"}  color={"#152039"}>
          Count on us to deliver what we promise, surpassing your expectations every time. With a proven history of success, we are dedicated to achieving flawless outcomes         </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        
    </div>
    <div className='card-three'>
    <Card sx={{ maxWidth: 345,boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)', transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)', // Increase scale on hover
    } }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={team}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontFamily={"montserrat"} fontWeight={700} color={"#F14902"}>
            Trusted Team
          </Typography>
          <Typography variant="body2" fontFamily={"montserrat"}  color={"#152039"}>
          Meet our passionate experts, committed to your success. Working together seamlessly, we earn your trust with every interaction, empowering you to reach greater heights        </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        
    </div>
   

   </div>

        
      
    </div>
  )
}
