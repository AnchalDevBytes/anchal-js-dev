import React from "react";
import AnchalImg from "../assets/images/anchal.png";
import GrainImg from "../assets/images/grain.jpg";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

function Hero() {
  return (
    <section
      id="home"
      className="py-32 md:py-44 relative z-0 overflow-clip"
      aria-labelledby="hero-title"
    >
      <div
        className="absolute inset-0 -z-40 opacity-5"
        style={{ backgroundImage: `url(${GrainImg})` }}
      ></div>
      {/* circe overlay borders  */}
      <div className="size-[420px] md:size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>

      <div className="container">
        <div
          className="flex flex-col items-center"
          role="img"
          aria-label="Anchal Img"
        >
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="size-52 object-cover object-top border-4 border-white rounded-2xl"
            src={AnchalImg}
            alt="Anchal Img"
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 bg-gray-950 border-2 border-white px-4 py-1.5 -mt-4 capitalize rounded-full shadow-md"
            aria-label="Available for new projects"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className="text-sm font-medium">Available to work on projects</p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <h1
            className="text-3xl font-serif text-center tracking-wide mt-8 capitalize"
            id="hero-title"
          >
            Building Seamless Full-Stack Solutions
          </h1>
          <p
            className="mt-4 text-center text-white/50 text-sm md:text-base capitalize"
            aria-label="I&#39;m Anchal Raj, a web developer with a passion for building fast, scalable, and visually appealing webApps."
          >
            I'm <span className="text-green-600 ">Anchal Raj</span>, a{" "}
            <span className="text-yellow-400 font-bold">full-stack developer</span> specializing in Next.js, React.js, PostgreSQL, Node.js, Tailwind CSS, TypeScript, MongoDB, Express, and Hono, creating robust and efficient digital experiences.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-4 mt-8 items-center justify-center">
          <motion.a
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            href="#experience"
            className="flex items-center gap-2 border w-44 border-white/15 px-4 py-2 rounded-xl text-white hover:bg-white/10 duration-200"
            aria-label="Explore"
          >
            <span>Explore</span>
            <span className="animate-bounce" aria-hidden="true">
              <FaArrowDown size={18} />
            </span>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            href="https://github.com/AnchalDevBytes/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-white/15 px-4 py-2 rounded-xl bg-white hover:bg-white/80 text-gray-900 font-semibold duration-200"
            aria-label="Let's Connect on Github"
          >
            <span aria-hidden="true">
              <BsGithub size={18} className="text-black" />
            </span>
            <span>Let&#39;s Connect</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
