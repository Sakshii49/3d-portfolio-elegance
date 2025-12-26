import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "TypeScript", icon: "📘" },
  { name: "Vue.js", icon: "💚" },
  { name: "Git", icon: "📦" },
  { name: "Docker", icon: "🐳" },
  { name: "CI/CD", icon: "🔄" },
  { name: "AWS", icon: "☁️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Linux", icon: "🐧" },
  { name: "REST APIs", icon: "🔗" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest">
            MY EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-6 py-3 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all cursor-default flex items-center gap-2"
              style={{
                boxShadow: "0 4px 20px hsl(0 0% 0% / 0.2)",
              }}
            >
              <span className="text-xl">{skill.icon}</span>
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
