import React from "react";
import Grid from "@mui/material/Grid";
import "./Process.css";
import { processData, productData, images } from "./data";
import { CssBaseline, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../../shared/footer/Footer";
import Contact from "../home/contact/Contact";
import TopHero from "./TopHero/TopHero";
import AnimatedPage from "../../AnimatedPage";





export default function Process() {
  return (
    <>
       <AnimatedPage>
      <TopHero/>
      <ProcessDescription />
      <Typography
        variant="h1"
        align="center"
        fontSize={56}
        fontWeight={"bold"}
        color={"#152039"}
      >
        How It Works
      </Typography>
      <MainProcessGrid />
      <Contact />
      <MainProductGrid />
      <Footer/>
      </AnimatedPage>
    </>
  );
}

function MainProcessGrid() {
  return (
    <Grid container spacing={0}>
      <Grid className="gridClass" xs={6}>
        <Item processData={processData[0]} />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <Item />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <Item />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <Item processData={processData[1]} />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <Item processData={processData[2]} />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <Item />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <Item />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <Item processData={processData[3]} />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <Item processData={processData[4]} />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <Item />
      </Grid>
    </Grid>
  );
}

function Item({ processData }) {
  return (
    <>
      <Container className="containerClass" maxWidth="sm">
        <Typography variant="h5" color={"#152039"}>
          {processData?.step && processData.step}
        </Typography>
        <Typography variant="h2" color={"#152039"}>
          {processData?.headerName && processData.headerName}
        </Typography>
        <Typography variant="p" color={"#152039"}>
          {processData?.description && processData.description}
        </Typography>
      </Container>
    </>
  );
}

function ProcessDescription() {
  return (
    <Container className="processDescriptionContainerClass" maxWidth="lg">
      <Typography
        variant="h2"
        fontWeight={"bold"}
        fontSize={36}
        color={"#152039"}
      >
        Our Software Development Process
      </Typography>
      <Typography variant="p" color={"#152039"}>
        Navigating our software development process at Ontocript iT is a journey
        from inspiration to realization. From conceptualization to delivery, we
        collaborate with you every step of the way to plan, develop, test, and
        evaluate your software requirements. Our pragmatic approach demystifies
        the agile process, ensuring transparency and effective communication
        that keeps our clients consistently satisfied
      </Typography>
      <div>
        <button className="processDescriptionButton">Let's have a chat</button>
      </div>
    </Container>
  );
}


function ProductHeaderSection() {
  return (
    <Container className="processHeaderContainerClass" maxWidth="xl">
      <Typography
        variant="h1"
        fontSize={46}
        textAlign={"left"}
        fontFamily={"montserrat"}
      >
        Let's talk about your product
      </Typography>
      <Typography variant="p" color={"#FFFFFF"} fontWeight={100}>
        We're passionate about connecting with new clients and our community. If
        you have questions about creating digital products or anything else,
        feel free to reach out – we'd love to hear from you!
      </Typography>
      <div>
        <Link className="contactClass">hello@ontocriptit.com</Link>
        <Link className="contactClass">+(94) 70 575 3003</Link>
      </div>
    </Container>
  );
}

function MainProductGrid() {
  return (
    <Grid container spacing={0}>
      <Grid className="gridClass" xs={6}>
        <ProductImage image={images[0]} />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <ProductItem productData={productData[0]} />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <ProductItem productData={productData[1]} />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <ProductImage image={images[1]} />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <ProductImage image={images[2]} />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <ProductItem productData={productData[2]} />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <ProductItem productData={productData[3]} />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <ProductImage image={images[3]} />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <ProductImage image={images[4]} />
      </Grid>
      <Grid className="gridClass" xs={6}>
        <ProductItem productData={productData[4]} />
      </Grid>
    </Grid>
  );
}

function ProductItem({ productData }) {
  return (
    <>
      <Container className="containerClass" maxWidth="sm">
        <img src={productData.icon} alt={productData.icon} />
        <Typography variant="h2" color={"#F14902"}>
          {productData?.headerName && productData.headerName}
        </Typography>
        <Typography variant="p" color={"#152039"}>
          {productData?.description && productData.description}
        </Typography>
      </Container>
    </>
  );
}

function ProductImage({ image }) {
  return (
    <>
      <Container className="containerClass" maxWidth="sm">
        <img src={image.image} alt={image.image} />
      </Container>
      
    </>
  );
}
