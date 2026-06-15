import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1
  className="text-[20vw] md:text-[18vw] leading-[0.75] font-black text-white/10 uppercase tracking-tighter select-none scale-y-[1.3] origin-top"
  style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
>
  SAMEER
</h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-20 uppercase opacity-90">
            Let's Connect
          </div>

         <div className="space-y-8 text-white">

  <h2 className="text-4xl font-bold">
    Sameer Kagitala
  </h2>

  <p className="text-xl text-white/90">
   Data Engineer | AWS | ETL | PySpark | Airflow
  </p>

  <div className="space-y-4 text-lg">

    <p>📧 sameerkagitala@gmail.com</p>

    <p>📍 Hyderabad, India</p>

    <p>💼 Open to Full-Time Data Engineer Opportunities</p>

  </div>

</div>

 <div className="flex flex-wrap gap-4 mt-8">

    <a
      href="https://www.linkedin.com/in/sameerkagitala"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition-all duration-300"
    >
      LinkedIn
    </a>

    <a
      href="https://github.com/shaiksameersameer"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition-all duration-300"
    >
      GitHub
    </a>
    <a
  href="mailto:sameerkagitala@gmail.com"
  className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition-all"
>
  Email Me
</a>

    

  </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
