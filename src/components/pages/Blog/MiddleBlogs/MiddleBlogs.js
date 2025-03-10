import React from "react";
import { BlogCard } from "../BlogCard";

export default function MiddleBlogs({ blogs }) {
    console.log("blogs--"+JSON.stringify(blogs))
  return (
    <div className="flex flex-col justify-between mx-auto mt-5 xl:flex-row">
      <div className="flex flex-col gap-2 flex-1 mr-2 w-full">
        {blogs?.items
          ?.slice(0, Math.ceil(blogs?.items?.length / 2))
          .map((blog, index) => (
            <BlogCard
              title={blog.fields.blogTitle}
              image={blog.fields.blogImage?.fields?.file?.url}
              description={blog.fields.blogSummary}
              key={blog.sys.id}
              id={blog.sys.id}
              headLineColor={"#152039"}
            />
          ))}
      </div>
      <div className="flex flex-col gap-2 flex-1 mr-2 w-full">
        {blogs?.items
          ?.slice(Math.ceil(blogs?.items?.length / 2))
          .map((blog, index) => (
            <BlogCard
              title={blog.fields.blogTitle}
              image={blog.fields.blogImage?.fields?.file?.url}
              description={blog.fields.blogSummary}
              key={blog.sys.id}
              id={blog.sys.id}
              headLineColor={"#152039"}
            />
          ))}
      </div>
    </div>
  );
}
