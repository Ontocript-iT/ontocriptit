import Footer from "../../shared/footer/Footer";
import "./BlogData.css";
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
    <div className="blog-post">
      <h2 className="title">{title}</h2>
      <img src={imageUrl} alt="Blog Post" className="image" />
      <div className="post-data">{documentToReactComponents(postData)}</div>
      <div className="meta-data">
        <p className="published-date">Published on: {publishedDate}</p>
        <p className="author-name">Author: {authorName}</p>
      </div>
    </div>
  );
}
