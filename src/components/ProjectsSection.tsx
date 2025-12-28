import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "AI Ad Maker",
    description:
      "An intelligent advertisement creation platform powered by AI/ML. Generates compelling ad copy, designs, and campaigns using machine learning algorithms and natural language processing.",
    technologies: ["Python", "TensorFlow", "ML models", "skicit-Learn", "OpenAI API"],
    category: "AI / ML",
    gradient: "from-orange-500 to-red-500",
    github: "https://github.com/your-username/ai-ad-maker",
  },
  {
    title: "Live Website Builder - React",
    description:
      "A real-time website creation tool built with React. Features drag-and-drop components, live preview, responsive design templates, and instant deployment capabilities.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Vite"],
    category: "Web App",
    gradient: "from-cyan-500 to-blue-500",
    github: "https://github.com/your-username/react-live-website-builder",
  },
  {
    title: "Live Website Builder - Vue",
    description:
      "Dynamic website builder powered by Vue.js ecosystem. Includes visual editing, component library, real-time collaboration, and seamless hosting integration.",
    technologies: ["Vue.js", "Vuex", "Nuxt.js", "Node.js", "MongoDB"],
    category: "Web App",
    gradient: "from-green-500 to-emerald-500",
    github: "https://github.com/your-username/vue-live-website-builder",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest">
            MY WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-2xl bg-card border border-border/50 overflow-hidden cursor-default"
              style={{
                boxShadow: "0 25px 50px -12px hsl(0 0% 0% / 0.4)",
              }}
            >
              {/* Gradient header */}
              <div
                className={`h-2 bg-gradient-to-r ${project.gradient}`}
              />

              <div className="p-8">
                {/* Category badge */}
                <span className="inline-block px-3 py-1 text-xs font-mono tracking-wider bg-primary/10 text-primary rounded-full mb-4">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full font-semibold text-sm hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </motion.a>
                )}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
