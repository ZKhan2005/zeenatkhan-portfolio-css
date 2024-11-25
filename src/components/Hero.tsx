"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        <div>
          <Image
            src="/zeenat.jpg"
            height={200}
            width={200}
            alt="portfolio-image"
            className="portfolio-image"
          ></Image>
        </div>
        <div className="hero-text-content">
          <p>HEY THERE!</p>
          <h1 className="hero-h1">I AM ZEENAT KHAN</h1>
          <p>
            Welcome to my portfolio!I amm a dedicated frontend developer with a
            passion for crafting responsive, user-friendly, and visually
            striking websites. Take a look at my work and skills, and let’s
            collaborate to bring your ideas to life!
          </p>
          <div className="buttons">
            <button className="hero-btn1">
              <Link href="/contact" className="hero-contact">
                Contact Me
              </Link>
            </button>
            <button className="hero-btn2">My Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
}
