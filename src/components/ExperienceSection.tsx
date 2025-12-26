import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Tech Company",
    period: "2023 - Present",
    description:
      "Leading development of scalable web applications using React and Node.js. Implementing CI/CD pipelines and mentoring junior developers.",
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2022 - 2023",
    description:
      "Built responsive and performant user interfaces for various clients. Collaborated with design teams to implement pixel-perfect designs.",
    technologies: ["React", "Redux", "Tailwind CSS", "Git"],
  },
  {
    title: "Junior Developer",
    company: "Startup",
    period: "2021 - 2022",
    description:
      "Started my journey as a developer, learning best practices and contributing to multiple projects. Gained experience in agile methodologies.",
    technologies: ["JavaScript", "HTML/CSS", "Node.js", "MongoDB"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest">
            CAREER PATH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -50 : 50,
                  rotateY: index % 2 === 0 ? -10 : 10
                }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10"
                />

                <div className="md:w-1/2" />

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="md:w-1/2 ml-16 md:ml-0 p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors cursor-default"
                  style={{
                    boxShadow: "0 25px 50px -12px hsl(0 0% 0% / 0.25)",
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
