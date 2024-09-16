import React from "react";
import { Link } from "react-router-dom";


export function BlogCard({ title, image, description, id, headLineColor }) {
  return (
    <div className="w-full flex flex-col justify-center mb-2 lg:flex-row lg:mb-5 lg:mx-5 lg:gap-10 xl:flex-col">
      <img
        src={image}
        alt="imagePic"
        width={"500px"}
        height={"200px"}
        className="mx-auto lg:mx-0 xl:mx-auto border"
        id="blog-card-image-id"
      ></img>
    <div className="flex flex-col lg:my-auto gap-3">
      <h2 style={{ color: headLineColor }} className="mx-auto text-xl" id="blog-card-title-id">
        {title}
      </h2>
      <p
        className="text-base text-justify  mx-auto w-full xs:w-[400px] md:w-[350px]"
        id="blog-content-text-middle-id"
        style={{ color: headLineColor }}
      >
        {description}
      </p>
      <Link
        className="mx-auto text-white px-2 py-2 rounded bg-mainColor transition duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg"
        id="blog-read-more-middle-id"
        to={`/blogData/${id}`}
      >
        Read more...
      </Link>
    </div>
    </div>
  );
}
