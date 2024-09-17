import React from "react";
import { Link } from "react-router-dom";

export function BlogCard({ title, image, description, id, headLineColor }) {
  return (
      <div className="w-full flex flex-col lg:flex-row xl:flex-col items-center mb-8 lg:mb-12 gap-6 lg:gap-10">
        <div className="w-[400px] lg:w-1/2 xl:w-[500px]">
          <img
              src={image}
              alt={title}
              className="w-full h-64 object-cover rounded-lg shadow-md "
              id="blog-card-image-id"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/2 xl:w-[500px] gap-4">
          <h2
              style={{ color: headLineColor }}
              className="text-2xl font-semibold text-center lg:text-left xl:text-center ml-10 mr-10"
              id="blog-card-title-id"
          >
            {title}
          </h2>
          <p
              className="text-base text-gray-600 text-justify px-4 lg:px-0 xl:px-4 ml-10 mr-10"
              id="blog-content-text-middle-id"
              style={{ color: headLineColor }}
          >
            {description}
          </p>
          <Link
              className="self-center lg:self-start xl:self-center px-6 py-2 bg-orangeColor text-white rounded-full hover:bg-orange-700 transition duration-300 ease-in-out hover:shadow-lg"
              id="blog-read-more-middle-id"
              to={`/blogData/${id}`}
          >
            Read more
          </Link>
        </div>
      </div>
  );
}