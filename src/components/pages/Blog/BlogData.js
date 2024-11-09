import Footer from "../../shared/footer/Footer";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";
import { useEffect, useState, useMemo } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Box, CircularProgress } from "@mui/material";

export default function BlogData() {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  
  // Memoize the client creation
  const client = useMemo(
    () => createClient({
      space: "h2gof75jgw6o",
      accessToken: "PNLiAZq-pM_s1y_sS0-HWX1NVzn7gk_Y16iVxoWOoOE",
    }),
    [] // Empty dependency array since these values don't change
  );

  useEffect(() => {
    const getEntryById = async () => {
      if (!id) return; // Guard clause in case id is undefined
      
      setIsLoading(true);
      try {
        const entry = await client.getEntry(id);
        console.log(entry);
        setBlogData(entry);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    
    getEntryById();
  }, [client, id]); // Add both client and id to dependency array

  return (
    <>
      {isLoading ? (
        <Box style={{ marginLeft: "50%" }}>
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <BlogPost
          title={blogData?.fields?.blogTitle}
          imageUrl={blogData?.fields?.blogImage?.fields?.file?.url}
          postData={blogData?.fields?.postContentDescription}
          publishedDate={blogData?.fields?.createdDate}
          authorName={blogData?.fields?.blogAuthor}
        />
      )}
      <Footer />
    </>
  );
}

function BlogPost({ title, imageUrl, postData, publishedDate, authorName }) {
  return (
    <div className="p-5 mx-auto my-5 ml-6 mr-6 bg-white border border-gray-300 rounded-md ax-w-7xl">
      <h2 className="text-[#152039] text-2xl mb-2 sm:text-2xl sm:mb-1 font-bold text-center">{title}</h2>
      <img src={imageUrl} alt="Blog Post" className="w-full h-auto mb-8" />
      <div className="text-[#152039] leading-6 mb-4 text-base sm:text-md sm:leading-4 sm:mb-2">{documentToReactComponents(postData)}</div>
      <div className="flex justify-between text-[#152039] text-sm sm:text-md sm:flex-col sm:items-start">
        <p className="sm:mb-1">Published on: {publishedDate}</p>
        <p className="sm:mt-1">Author: {authorName}</p>
      </div>
    </div>
  );
}