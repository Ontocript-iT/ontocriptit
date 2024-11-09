import React, { useEffect, useState,useMemo } from "react";
import MainHero from "./MainHero/MainHero";
import Footer from "../../shared/footer/Footer";
import AnimatedPage from "../../AnimatedPage";
import Contact from "../home/contact/Contact";
import { createClient } from "contentful";
import { Box, CircularProgress } from "@mui/material";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const client = useMemo(
    () => createClient({
      space: "h2gof75jgw6o",
      accessToken: "PNLiAZq-pM_s1y_sS0-HWX1NVzn7gk_Y16iVxoWOoOE",
    }),
    [] // Empty dependency array since these values don't change
  );

  useEffect(() => {
    const getAllEntries = async () => {
      setIsLoading(true);
      try {
        const entries = await client.getEntries();
        console.log("entries", JSON.stringify(entries));
        setBlogs(entries);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getAllEntries();
  }, [client]); // Add client to dependency array

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

        <Contact />
        <Footer />
      </AnimatedPage>
    </div>
  );
}
