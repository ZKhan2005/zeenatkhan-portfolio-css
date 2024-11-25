"use client";
import Image from "next/image";

export default function About() {


  return (
    <section className="section">
      <h1 className="h1">About Me</h1>
      <div className="about">
        <div className="">
          <Image
            src="/green.jpeg"
            height={400}
            width={300}
            alt="about-image"
            className="about-image"
          ></Image>
        </div>
        <div className="about-text">
          <p>
          Welcome! I am Zeenat Khan, a professional frontend web developer with a passion for crafting visually captivating and highly functional websites. My approach merges creativity with technical precision, ensuring that each project looks exceptional and provides a seamless, user-friendly experience. By focusing on clean, modern design.
          </p>

          <p>
            Every website I develop is designed with attention to detail,
            prioritizing responsiveness and high performance to bring your
            vision to life across all devices. I am committed to transforming
            ideas into engaging, effective online experiences that stand out in
            a competitive digital landscape.
          </p>
          <div className="skills">
            <div className="skill-item">
              <h5>HTML & CSS</h5>
              <div className="html-css"></div>
            </div>
            <div className="skill-item">
              <h5>JavaScript</h5>
              <div className="js"></div>
            </div>
            <div className="skill-item"> 
              <h5>TypeScript</h5>
              <div className="ts"></div>
            </div>
            <div className="skill-item">
              <h5>React JS</h5>
              <div className="react-js"></div>
            </div>
            <div className="skill-item">
              <h5>Next JS</h5>
              <div className="next-js"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
