import React from "react";
import { BlogCard } from "../BlogCard";

export default function MainHero({ blogs }) {
  return (
    <div className=" bg-[#152039] mb-5">
      <div className="p-2">
        <h3 className="text-base text-white">Read Our Blog Posts</h3>
        <h1 className="text-4xl text-white font-bold mt-2 animate-fadeIn">FEATURED BLOGS</h1>
        <div className="flex flex-col justify-between mx-auto mt-5 xl:flex-row">
          <div className="flex flex-col gap-2 flex-1 mr-2 w-full">
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
          <div className=" flex-col gap-2 flex-1 mr-2 w-full">
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
