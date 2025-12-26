import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "⚛️",
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux/Context", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    icon: "🚀",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    title: "Version Control",
    icon: "📦",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "GitLab", level: 80 },
      { name: "Branching Strategies", level: 85 },
      { name: "Code Review", level: 85 },
    ],
  },
  {
    title: "DevOps Fundamentals",
    icon: "⚙️",
    skills: [
      { name: "Docker", level: 75 },
      { name: "CI/CD Pipelines", level: 70 },
      { name: "Linux/Shell", level: 75 },
      { name: "AWS Basics", level: 65 },
      { name: "Nginx", level: 70 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

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

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
              className="skill-card perspective-container"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                  >
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5, duration: 0.8 }}
                        className="h-full rounded-full"
                        style={{
                          background: "linear-gradient(90deg, hsl(38 92% 50%), hsl(45 100% 60%))",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
