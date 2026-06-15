import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import sameerImage from '../assets/about/sameer.png';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#ff2a2a] flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <h1
              data-aos="fade-up"
              className="text-white text-5xl md:text-7xl font-black leading-tight"
            >
              Hi, I'm
              <br />
              <span className="text-white drop-shadow-lg">
                Sameer Kagitala
              </span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-white text-lg md:text-2xl font-semibold mt-6 max-w-2xl"
            >
              Data Engineer with hands-on experience in AWS,
              ETL Pipelines, PySpark, Apache Airflow,
              SQL and Data Analytics.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-wrap gap-4 mt-10"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-all"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-black transition-all"
              >
                Contact Me
              </a>
              <a href="/Sameer_Kagitala_Data_Engineer_Resume.pdf"
               target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-all"
                > 
                Resume </a>
            </div>
          </div>

          {/* Right Side */}
          <div
            data-aos="fade-left"
            className="flex justify-center"
          >
            <img
              src={sameerImage}
              alt="Sameer Kagitala"
              className="w-[320px] md:w-[450px] rounded-3xl shadow-2xl border-4 border-white"
            />
          </div>

        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;