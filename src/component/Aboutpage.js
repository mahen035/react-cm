import React from "react";
import bioPic from "../assets/bio-pic.png";

const About = () => (
  <div
    className="text-center"
    style={{
      backgroundColor: "#122240",
      color: "#c0a98e",
      padding: "35px",
    }}
  >
    <h1 id="about" style={{ textAlign: "center" }}>About Me</h1>
    <center><img
      src={bioPic}
      style={{ width: "30%", height: "300px", padding: "30px"}}
      alt="pic of author"
    /></center>
    <p
      style={{
        fontSize: "20px",
      }}
    >
      I am a Full-Stack Web Developer with experience in project management and customer service. I
      love working on strong, collaborative teams toward a common goal, and I find great satisfaction in improving efficiency and finishing projects on time and under-budget. 
      Those who know me best describe me as honest, organized, detail-oriented, and dependable.
    </p>
    <p
      style={{
        fontSize: "20px",
      }}
    >
      Learning new web technologies is my current passion! I enjoyed my time in a Full-Stack Web Development boot camp, 
      where I learned a wide variety of languages and tools. Some of these include JavaScript, React, HTML, CSS,
      Bootstrap, Node.js, Express, MongoDB, MySQL, GitHub, and VS Code.
    </p>
    <p
      style={{
        fontSize: "20px",
      }}
    >
      Though I grew up in the Midwest, I currently live in Southern Utah. When I
      am not in front of a computer, I enjoy spending time with my family,
      especially watching my kids perform their talents in singing, running, and
      gymnastics. Staying fit and serving in my church and community are also important to me.
    </p>
  </div>
);

export default About;