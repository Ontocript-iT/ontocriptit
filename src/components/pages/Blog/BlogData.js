import Footer from "../../shared/footer/Footer";
import "./BlogData.css";
import { Link, useParams } from "react-router-dom";
import { createClient } from "contentful";
import { useEffect, useState } from "react";

export default function BlogData() {
  const [blogData, setBlogData] = useState([]);
  const client = createClient({
    space: "u6sprwjlzdet",
    accessToken: "emWDIx0Wm2tauvjFgvRdd2tS_g231WyWQS_YU-i0pA0",
  });
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entry) => {
          setBlogData(entry);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getEntryById();
  }, []);

  return (
    <>
      <BlogPost
        title={blogData?.fields?.headline}
        imageUrl={blogData?.fields?.image?.fields?.file?.url}
        postData={blogData?.fields?.content}
        publishedDate={blogData?.fields?.publishOn}
        authorName={blogData?.fields?.authorName}
      />
      <Footer />
    </>
  );
}

function BlogPost({ title, imageUrl, postData, publishedDate, authorName }) {
  return (
    <div className="blog-post">
      <h2 className="title">{title}</h2>
      <img src={imageUrl} alt="Blog Post" className="image" />
      <div className="post-data">{postData}</div>
      <div className="meta-data">
        <p className="published-date">Published on: {publishedDate}</p>
        <p className="author-name">Author: {authorName}</p>
      </div>
    </div>
  );
}
