import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

export function BlogCard({ title, image, description, id, headLineColor }) {
  return (
    <div>
      <img
        src={image}
        alt="imagePic"
        width={"500px"}
        height={"200px"}
        id="blog-card-image-id"
      ></img>

      <h2 style={{ color: headLineColor }} id="blog-card-title-id">
        {title}
      </h2>
      <p
        className="blog-content-text-middle"
        id="blog-content-text-middle-id"
        style={{ color: headLineColor }}
      >
        {description}
      </p>
      <Link
        className="blog-read-more-middle"
        id="blog-read-more-middle-id"
        to={`/blogData/${id}`}
      >
        Read more...
      </Link>
    </div>
  );
}
