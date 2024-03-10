import React, { useEffect, useState } from "react";
import MainHero from "./MainHero/MainHero";
import Footer from "../../shared/footer/Footer";
import MiddleBlogs from "./MiddleBlogs/MiddleBlogs";
import AnimatedPage from "../../AnimatedPage";
import Contact from "../home/contact/Contact";
import { createClient } from "contentful";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const client = createClient({
    space: "u6sprwjlzdet",
    accessToken: "emWDIx0Wm2tauvjFgvRdd2tS_g231WyWQS_YU-i0pA0",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries);
          setBlogs(entries);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getAllEntries();
  }, []);

  return (
    <div>
      <AnimatedPage>
        <MainHero blogs={blogs} />
        <MiddleBlogs blogs={blogs} />
        <Contact />
        <Footer />
      </AnimatedPage>
    </div>
  );
}
