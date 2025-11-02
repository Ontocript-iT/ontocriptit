import React from "react";
import Slider from "react-slick";
import Image1 from "./assets/navod.jpg";
import Image2 from "./assets/imash.jpg";
import Image3 from "./assets/hiranya.jpeg";
import ReactStars from "react-stars";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Box,
  Container,
  Rating,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  minHeight: "500px",  // Add this
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  border: "1px solid #e0e0e0",
  background: "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
  "&:hover": {
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.15)",
    transform: "translateY(-8px)",
    borderColor: "#2196F3",
  },
}));


const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  margin: "0 auto 16px",
  border: "3px solid #2196F3",
  boxShadow: "0 4px 12px rgba(33, 150, 243, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1) rotate(5deg)",
  },
}));

const feedbacks = [
  {
    image: Image1,
    name: "Nawod Vimalasooriya",
    address: "Network Engineer",
    comment:
      "Ontocript IT demonstrated exceptional performance on our project. Their technical expertise and problem-solving abilities were outstanding. Throughout the project, they maintained clear communication channels and consistently met deadlines.",
    rating: 5,
  },
  {
    image: Image2,
    name: "Imash Eshan Wijesooriya",
    address: "Associate Software Engineer",
    comment:
      "I had the pleasure of working with Ontocript IT on a UI project. They developed the entire interface with exceptional expertise and speed, meeting tight deadlines without compromising quality.",
    rating: 5,
  },
  {
    image: Image3,
    name: "Hiranaya Kodithuwakku",
    address: "Teacher/Tutor",
    comment:
      "Ontocript IT delivered a highly efficient and user-friendly online learning platform for our classes. Their expertise, attention to detail, and commitment to quality ensured a seamless experience.",
    rating: 5,
  },
];

const ClientSays = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 748,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: 6, mt: 4, mb: 4, background: "linear-gradient(135deg, #f2f3f5 0%, #f2f3f5 100%)" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#151f38",
              fontSize: { xs: "1.7rem", md: "2.3rem" },
            }}
          >
            What Our Clients Say
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              fontSize: { xs: "0.9rem", md: "0.9rem" },
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Trusted Voices, Proven Results – Hear What Our Clients Say About Us!
          </Typography>
        </Box>

        <Box sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
          <Slider {...settings}>
            {feedbacks.map((feedback, index) => (
             <Box key={index} sx={{ px: 1.5, display: "flex" }}> 
                <StyledCard>
                  <CardHeader
                    avatar={
                      <StyledAvatar
                        alt={feedback.name}
                        src={feedback.image}
                      />
                    }
                    sx={{ pb: 0 }}
                  />
                <CardContent
  sx={{
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",  // Add this
    overflow: "auto",  // Add this
  }}
>

                    <Box>
                      <Box sx={{ textAlign: "center", mb: 2 }}>
                        <FormatQuoteIcon
                          sx={{
                            color: "#2196F3",
                            fontSize: 32,
                            opacity: 0.3,
                            mb: 1,
                          }}
                        />
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#131c36",
                          mb: 0.5,
                        }}
                      >
                        {feedback.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#4c5663",
                          fontWeight: 600,
                          mb: 1.5,
                        }}
                      >
                        {feedback.address}
                      </Typography>

                      <Box sx={{ display: "flex", justifyContent: "left", mb: 2 }}>
                        <Rating
                          value={feedback.rating}
                          readOnly
                          sx={{ color: "#ffd700" }}
                        />
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#666",
                          lineHeight: 1.6,
                          fontStyle: "italic",
                          mb: 1,
                        }}
                      >
                        "{feedback.comment}"
                      </Typography>
                    </Box>
                  </CardContent>
                </StyledCard>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientSays;
