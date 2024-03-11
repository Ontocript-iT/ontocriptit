import React from "react";
import "./MiddleBlogs.css";
import { BlogCard } from "../BlogCard";

export default function MiddleBlogs({ blogs }) {
  return (
    <div className="middle-blogs-container-sub">
      <div className="grid left-grid">
        {blogs?.items
          ?.slice(0, Math.ceil(blogs?.items?.length / 2))
          .map((blog, index) => (
            <BlogCard
              title={blog.fields.headline}
              image={blog.fields.image.fields.file.url}
              description={blog.fields.content.substring(0, 250)}
              key={blog.sys.id}
              id={blog.sys.id}
              headLineColor={"#152039"}
            />
          ))}
      </div>
      <div className="grid right-grid">
        {blogs?.items
          ?.slice(Math.ceil(blogs?.items?.length / 2))
          .map((blog, index) => (
            <BlogCard
              title={blog.fields.headline}
              image={blog.fields.image.fields.file.url}
              description={blog.fields.content.substring(0, 250)}
              key={blog.sys.id}
              id={blog.sys.id}
              headLineColor={"#152039"}
            />
          ))}
      </div>
    </div>
  );
}
