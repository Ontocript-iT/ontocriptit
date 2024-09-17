import React from "react";
import { BlogCard } from "../BlogCard";
import {motion} from "framer-motion";

export default function MainHero({ blogs }) {
  return (
    <div className=" bg-gray-200 mb-5">
      <div>
        <div
            className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 h-[60vh] md:h-[70vh] flex items-center">
          {/* Abstract tech background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-black">
              <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)"/>
              </svg>
            </div>
          </div>

          {/* Animated code snippet */}
          <motion.div
              className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-opacity-10 bg-white rounded-l-lg overflow-hidden"
              initial={{x: "100%"}}
              animate={{x: 0}}
              transition={{duration: 1, ease: "easeOut"}}
          >
        <pre className="text-green-400 text-xs md:text-sm p-4">
          <code>
            {`function readBlogContent(idea) {
  const draft = analyze(idea);
  if (draft.isEngaging) {
    return knowledge(draft);
  }
  return revise(idea);
}
`}
          </code>
        </pre>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 text-left px-8 md:px-16 max-w-4xl">
            <motion.h3
                className="text-lg sm:text-xl text-blue-300 font-light mb-4"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
            >
              Hello Readers,
            </motion.h3>
            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.2}}
            >
              Read Our Featured Blogs
            </motion.h1>
            <motion.p
                className="text-gray-300 text-lg mb-8 max-w-2xl"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.4}}
            >
              Explore our blog for insights and trends in software development. From cutting-edge web and mobile solutions to cloud-based innovations, we share expert tips, industry updates, and real-world case studies designed to help your business thrive in the digital age
            </motion.p>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.6}}
                className="flex space-x-4"
            >
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div
              className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div
              className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        <div className="flex flex-col justify-between mx-auto mt-5 xl:flex-row">
          <div className="flex flex-col gap-2 flex-1 mr-2 w-full">
            {blogs?.items?.slice(0, 1).map((blog, index) => (
                <BlogCard
                    title={blog.fields.headline}
                    image={blog.fields.image.fields.file.url}
                    description={blog.fields.content.substring(0, 120)}
                    key={blog.sys.id}
                    id={blog.sys.id}
                    headLineColor={"#152039"}
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
                    headLineColor={"#152039"}
                />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
