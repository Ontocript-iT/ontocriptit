import Footer from "../../shared/footer/Footer";
import { Link, useParams } from "react-router-dom";
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Box, CircularProgress } from "@mui/material";

export default function BlogData() {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const client = createClient({
    space: "u6sprwjlzdet",
    accessToken: "emWDIx0Wm2tauvjFgvRdd2tS_g231WyWQS_YU-i0pA0",
  });
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getEntryById = async () => {
      setIsLoading(true);
      try {
        await client.getEntry(id).then((entry) => {
          console.log(entry);
          setBlogData(entry);
        });
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getEntryById();
  }, []);

  return (
    <>
      {isLoading ? (
        <Box style={{ marginLeft: "50%" }}>
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <BlogPost
          title={blogData?.fields?.headline}
          imageUrl={blogData?.fields?.image?.fields?.file?.url}
          postData={blogData?.fields?.contentInRichText}
          publishedDate={blogData?.fields?.publishOn}
          authorName={blogData?.fields?.authorName}
        />
      )}
      <Footer />
    </>
  );
}

function BlogPost({ title, imageUrl, postData, publishedDate, authorName }) {
  return (
    <div className="ax-w-7xl mx-auto my-5 p-5 border border-gray-300 rounded-md bg-white">
      <h2 className="text-[#152039] text-2xl mb-2 sm:text-2xl sm:mb-1">{title}</h2>
      <img src={imageUrl} alt="Blog Post" className="w-full h-auto mb-2" />
      <div className="text-[#152039] leading-6 mb-4 text-base sm:text-md sm:leading-4 sm:mb-2">{documentToReactComponents(postData)}</div>
      <div className="flex justify-between text-[#152039] text-sm sm:text-md sm:flex-col sm:items-start">
        <p className="sm:mb-1">Published on: {publishedDate}</p>
        <p className="sm:mt-1">Author: {authorName}</p>
      </div>
    </div>
  );
}
