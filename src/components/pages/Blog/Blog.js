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
    space: "h2gof75jgw6o",
    accessToken: "PNLiAZq-pM_s1y_sS0-HWX1NVzn7gk_Y16iVxoWOoOE",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      setIsLoading(true);
      try {
        await client.getEntries().then((entries) => {
          console.log("entries"+JSON.stringify(entries));
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
        {/*{isLoading ? (*/}
        {/*  <Box style={{ marginLeft: "50%" }}>*/}
        {/*    <CircularProgress color="secondary" />*/}
        {/*  </Box>*/}
        {/*) : (*/}
        {/*  // <MiddleBlogs blogs={blogs} isLoading={isLoading} />*/}
        {/*)}*/}
        <Contact />
        <Footer />
      </AnimatedPage>
    </div>
  );
}
