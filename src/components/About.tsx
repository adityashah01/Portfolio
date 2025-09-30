import { motion } from "framer-motion";
import { Code, Database, Globe } from "lucide-react";

export const About = () => {
  const interests = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Crafting intuitive, responsive, and modern user interfaces.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Designing scalable APIs and reliable server-side systems.",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Exploring emerging frameworks and web performance tools.",
    },
   
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Background accents */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Turning ideas into{" "}
            <span className="text-purple-500 font-semibold">scalable solutions</span>{" "}
            with creativity, clean code, and modern technology.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Passionate Developer & Lifelong Learner
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I’m a Computer Engineering student at NCIT College, Nepal, currently
              in my 5th semester. What started as curiosity has grown into a passion
              for building impactful digital solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              My expertise lies in full-stack development with frameworks like{" "}
              <span className="text-purple-500 font-medium">React</span>,{" "}
              <span className="text-blue-500 font-medium">Node.js</span>, and modern
              databases. I focus on writing clean, maintainable code and staying up
              to date with industry trends.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Outside of coding, I enjoy exploring new technologies, contributing
              to open-source, and collaborating with developers in the tech community.
            </p>
          </motion.div>

          {/* Right - Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
                  <interest.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {interest.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
