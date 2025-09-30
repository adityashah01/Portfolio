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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-sky-900" />

{/* Aurora Glow Effects */}
<div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-cyan-500/30 rounded-full blur-[150px] animate-pulse" />
<div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-sky-600/30 rounded-full blur-[150px] animate-pulse delay-700" />






      {/* Decorative Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
              x: Math.random() * window.innerWidth - window.innerWidth / 2,
              y: Math.random() * window.innerHeight - window.innerHeight / 2,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Profile Pic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-44 h-44 mx-auto mb-6 rounded-full shadow-[0_0_40px_rgba(00,255,10,0.2)] border-4 border-white/20 backdrop-blur-xl overflow-hidden"
        >
          <img
            src={pic}
            alt="Aditya Raj Shah"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-pink-400 via-gray-400 to-blue-400 bg-clip-text text-transparent">
            Aditya Raj Shah
          </span>
        </motion.h1>

        {/* Dynamic Roles */}
        <p className="text-xl md:text-2xl text-gray-300 font-mono tracking-wide h-8 mb-6">
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
          className="text-lg text-gray-300 leading-relaxed mb-10"
        >
          5th Semester Computer Engineering Student at NCIT, Nepal. <br />
          Passionate about{" "}
          <span className="text-pink-300">scalable web apps</span> &{" "}
          <span className="text-purple-300">modern UI solutions</span>.
        </motion.p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-10">
          {[
            { icon: <Github />, link: "https://github.com/adityashah01" },
            { icon: <Linkedin />, link: "https://linkedin.com" },
            { icon: <Mail />, link: "aditya.shh15@gmail.com" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white hover:text-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          <motion.button
            onClick={() => scrollToSection("about")}
            className="px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-full font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
            whileHover={{ scale: 1.07, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>

          <motion.a
            href="/resume.pdf"
            download
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full font-semibold shadow-lg flex items-center gap-2 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]"
            whileHover={{ scale: 1.07, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileDown className="w-5 h-5" /> Resume
          </motion.a>

          <motion.button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-white/30 text-white rounded-full font-semibold backdrop-blur-md hover:bg-white/10"
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
          className="grid grid-cols-3 gap-6 text-white/80 text-sm md:text-base"
        >
          <div>
            <h3 className="text-3xl font-bold text-pink-400">10+</h3>
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

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>

      {/* Wave Divider */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="url(#gradient)"
          fillOpacity="1"
          d="M0,192L80,197.3C160,203,320,213,480,229.3C640,245,800,267,960,256C1120,245,1280,203,1360,181.3L1440,160L1440,320L0,320Z"
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#2f96beff" />
            <stop offset="100%" stopColor="#3c6fc2ff" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};
