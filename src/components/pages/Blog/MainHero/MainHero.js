import React from "react";
import { BlogCard } from "../BlogCard";
import "./MainHero.css";

export default function MainHero({ blogs }) {
  return (
    <div className="container-blog">
      <div className="textContainer">
        <h3>Read Our Blog Posts</h3>
        <h1 className="mainText">FEATURED BLOGS</h1>
        <div className="middle-blogs-container">
          <div className="grid left-grid">
            {blogs?.items?.slice(0, 1).map((blog, index) => (
              <BlogCard
                title={blog.fields.headline}
                image={blog.fields.image.fields.file.url}
                description={blog.fields.content.substring(0, 120)}
                key={blog.sys.id}
                id={blog.sys.id}
                headLineColor={"#fff"}
              />
            ))}
          </div>
          <div className="grid right-grid">
            {blogs?.items?.slice(1, 2).map((blog, index) => (
              <BlogCard
                title={blog.fields.headline}
                image={blog.fields.image.fields.file.url}
                description={blog.fields.content.substring(0, 120)}
                key={blog.sys.id}
                id={blog.sys.id}
                headLineColor={"#fff"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
