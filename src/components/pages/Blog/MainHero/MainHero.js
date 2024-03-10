import React from "react";
import { BlogCard } from "../BlogCard";
import "./MainHero.css";

export default function MainHero({ blogs }) {
  // const [blogs, setBlogs] = useState([]);
  // const client = createClient({
  //   space: "u6sprwjlzdet",
  //   accessToken: "emWDIx0Wm2tauvjFgvRdd2tS_g231WyWQS_YU-i0pA0",
  // });

  // useEffect(() => {
  //   const getAllEntries = async () => {
  //     try {
  //       await client.getEntries().then((entries) => {
  //         console.log(entries);
  //         setBlogs(entries);
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getAllEntries();
  // }, []);
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
                description={blog.fields.content.substring(0, 250)}
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
                description={blog.fields.content.substring(0, 250)}
                key={blog.sys.id}
                id={blog.sys.id}
                headLineColor={"#fff"}
              />
            ))}
          </div>
        </div>
        {/* <div className="middle-blogs-container">
          <div className="grid left-grid">
            {
              <BlogCard
                title={blogs?.items[0]?.fields.headline}
                image={blogs?.items[0]?.fields.image.fields.file.url}
                description={blogs?.items[0]?.fields.content.substring(0, 250)}
                key={blogs?.items[0]?.sys.id}
                id={blogs?.items[0]?.sys.id}
                headLineColor={"#fff"}
              />
            }
          </div>
          <div className="grid right-grid">
            {
              <BlogCard
                title={blogs?.items[1]?.fields.headline}
                image={blogs?.items[1]?.fields.image.fields.file.url}
                description={blogs?.items[1]?.fields.content.substring(0, 250)}
                key={blogs?.items[1]?.sys.id}
                id={blogs?.items[1]?.sys.id}
                headLineColor={"#fff"}
              />
            }
          </div>
        </div> */}
      </div>
    </div>
  );
}
