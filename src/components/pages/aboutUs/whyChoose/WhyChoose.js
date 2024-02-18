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
    <Card sx={{ maxWidth: 345,border: '2px solid #F14902',boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)', transition: 'transform 0.3s',
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
          <Typography gutterBottom variant="h5" component="div" fontFamily={"montserrat"} fontWeight={700} color={"#152039"}>
            Trusted Solutions
          </Typography>
          <Typography variant="body2" color="text.secondary" fontFamily={"montserrat"}  color={"#152039"}>
          We make software that fits your needs perfectly, so you get exactly what you want.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>
    <div className='card-two'>
    <Card sx={{ maxWidth: 345,border: '2px solid #F14902',boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)', transition: 'transform 0.3s',
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
          <Typography gutterBottom variant="h5" component="div" fontFamily={"montserrat"} fontWeight={700} color={"#152039"}>
            Trusted Results
          </Typography>
          <Typography variant="body2" color="text.secondary" fontFamily={"montserrat"}  color={"#152039"}>
          We've done this before and our clients are happy. You can count on us to get the job done well."
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        
    </div>
    <div className='card-three'>
    <Card sx={{ maxWidth: 345,border: '2px solid #F14902',boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)', transition: 'transform 0.3s',
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
          <Typography gutterBottom variant="h5" component="div" fontFamily={"montserrat"} fontWeight={700} color={"#152039"}>
            Trusted Team
          </Typography>
          <Typography variant="body2" color="text.secondary" fontFamily={"montserrat"}  color={"#152039"}>
          Our team knows what they're doing, and they'll make sure your project is done right.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        
    </div>
   

   </div>

        
      
    </div>
  )
}
