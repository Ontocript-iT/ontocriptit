import React, { useEffect, useState } from "react";
import MainHero from "./MainHero/MainHero";
import Footer from "../../shared/footer/Footer";
import MiddleBlogs from "./MiddleBlogs/MiddleBlogs";
import AnimatedPage from "../../AnimatedPage";
import Contact from "../home/contact/Contact";
import { createClient } from "contentful";
import { Box, CircularProgress } from "@mui/material";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const client = createClient({
    space: "u6sprwjlzdet",
    accessToken: "emWDIx0Wm2tauvjFgvRdd2tS_g231WyWQS_YU-i0pA0",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      setIsLoading(true);
      try {
        await client.getEntries().then((entries) => {
          console.log(entries);
          setBlogs(entries);
        });
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getAllEntries();
  }, []);

  return (
    <div>
      <AnimatedPage>
        {isLoading ? (
          <Box style={{ marginLeft: "50%" }}>
            <CircularProgress color="secondary" />
          </Box>
        ) : (
          <MainHero blogs={blogs} />
        )}
        {isLoading ? (
          <Box style={{ marginLeft: "50%" }}>
            <CircularProgress color="secondary" />
          </Box>
        ) : (
          <MiddleBlogs blogs={blogs} isLoading={isLoading} />
        )}
        <Contact />
        <Footer />
      </AnimatedPage>
    </div>
  );
}
