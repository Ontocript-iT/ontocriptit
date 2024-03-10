import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

export function BlogCard({ title, image, description, id, headLineColor }) {
  return (
    <div>
      <img src={image} alt="imagePic" width={"500px"} height={"200px"}></img>

      <h2 style={{ color: headLineColor }}>{title}</h2>
      <p className="blog-content-text-middle" style={{ color: headLineColor }}>
        {description}
      </p>
      <Link className="blog-read-more-middle" to={`/blogData/${id}`}>
        Read more...
      </Link>
    </div>
  );
}
