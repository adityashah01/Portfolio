import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, FileDown } from "lucide-react";
import pic from "../assets/pic.jpg";

export const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Tech Enthusiast",
    "Student @ NCIT",
  ];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(roles[index].slice(0, i + 1));
      i++;
      if (i === roles[index].length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [index]);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* 🌌 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a2f] via-[#0d233d] to-[#0a1c2f]" />

      {/* 🌠 Aurora Glow Effects */}
      <div className="absolute -top-44 -left-44 w-[28rem] h-[28rem] bg-cyan-400/20 rounded-full blur-[180px] animate-pulse" />
      <div className="absolute -bottom-28 right-0 w-[36rem] h-[36rem] bg-sky-400/20 rounded-full blur-[220px] animate-pulse delay-500" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[20rem] h-[20rem] bg-purple-400/10 rounded-full blur-[150px]" />

      {/* 🌟 Content Container */}
      <div className="relative z-10 max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Left Side: Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-56 h-56 rounded-full shadow-[0_0_60px_rgba(136,201,255,0.25)] border-4 border-white/20 backdrop-blur-xl overflow-hidden flex-shrink-0"
        >
          <img
            src={pic}
            alt="Aditya Raj Shah"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Side: Text & Buttons */}
        <div className="flex-1 text-center md:text-left">
          {/* Heading */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Aditya Raj Shah
            </span>
          </motion.h1>

          {/* Dynamic Roles */}
          <p className="text-xl md:text-2xl text-sky-200 font-mono tracking-wide h-8 mb-6">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="ml-1"
            >
              |
            </motion.span>
          </p>

          {/* About Text */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-blue-100 leading-relaxed mb-8"
          >
            5th Semester Computer Engineering Student at NCIT, Nepal. <br />
            Passionate about{" "}
            <span className="text-sky-400">scalable web apps</span> &{" "}
            <span className="text-purple-300">modern UI solutions</span>.
          </motion.p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-6 mb-8">
            {[
              { icon: <Github />, link: "https://github.com/adityashah01" },
              { icon: <Linkedin />, link: "https://linkedin.com" },
              { icon: <Mail />, link: "mailto:aditya.shh15@gmail.com" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white hover:text-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-4 mb-12">
            <motion.button
              onClick={() => scrollToSection("about")}
              className="px-8 py-3 bg-gradient-to-r from-sky-500 via-cyan-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]"
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full font-semibold shadow-lg flex items-center gap-2 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]"
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileDown className="w-5 h-5" /> Resume
            </motion.a>

            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border border-sky-500/50 text-white rounded-full font-semibold backdrop-blur-md hover:bg-sky-500/10"
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-6 text-sky-200 text-sm md:text-base"
          >
            <div>
              <h3 className="text-3xl font-bold text-sky-400">10+</h3>
              <p>Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-400">2+</h3>
              <p>Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-400">15+</h3>
              <p>Technologies</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 cursor-pointer left-1/2 -translate-x-1/2"
        onClick={() => scrollToSection("about")}
      >
        <ChevronDown className="w-8 h-8 text-sky-300/70" />
      </motion.div>
    </section>
  );
};
