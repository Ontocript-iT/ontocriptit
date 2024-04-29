import "./Portfolio.css";
import Footer from "../../shared/footer/Footer.js";
import angular from "../../../Assets/angular.png";

function Portfolio() {
  const projects = [
    {
      id: 1,
      img: angular,
      name: "ABC Pvt Ltd Official Website",
      desc: "Discover the Hype: Why Next.js is the Go-To Choice for Undergraduates in Web Development 💡🚀 #NextJS #WebDev #StudentLife",
    },
    {
      id: 2,
      img: angular,
      name: "ABC Pvt Ltd Official Website",
      desc: "Discover the Hype: Why Next.js is the Go-To Choice for Undergraduates in Web Development 💡🚀 #NextJS #WebDev #StudentLife",
    },
    {
      id: 3,
      img: angular,
      name: "ABC Pvt Ltd Official Website",
      desc: "Discover the Hype: Why Next.js is the Go-To Choice for Undergraduates in Web Development 💡🚀 #NextJS #WebDev #StudentLife",
    },
    {
      id: 4,
      img: angular,
      name: "ABC Pvt Ltd Official Website",
      desc: "Discover the Hype: Why Next.js is the Go-To Choice for Undergraduates in Web Development 💡🚀 #NextJS #WebDev #StudentLife",
    },
    {
      id: 5,
      img: angular,
      name: "ABC Pvt Ltd Official Website",
      desc: "Discover the Hype: Why Next.js is the Go-To Choice for Undergraduates in Web Development 💡🚀 #NextJS #WebDev #StudentLife",
    },
  ];

  return (
    <div className="portfolio">
      <div className="top-bar">
        <h1>Our Projects</h1>
        <h2>Ontocript IT Portfolio</h2>
      </div>
      <div className="projects">
        {projects.map((p, index) => (
          <div className="project" key={index}>
            <div className="left">
              <img src={p.img} />
            </div>
            <div className="right">
              <h1>{p.name}</h1>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
