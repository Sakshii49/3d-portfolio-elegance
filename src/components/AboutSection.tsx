import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="perspective-container"
          >
            <div className="relative">
              <motion.div
                whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-20 h-20 border border-primary/20 rounded-full"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-mono text-sm tracking-widest"
            >
              ABOUT ME
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Crafting Digital
              <span className="text-gradient"> Excellence</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with expertise in building
              scalable web applications. With a strong foundation in both frontend
              and backend technologies, I create seamless user experiences that
              drive business success.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              My journey in tech has equipped me with deep knowledge in React
              ecosystem, Node.js, version control with Git, and core DevOps
              fundamentals. I believe in writing clean, maintainable code and
              continuously learning new technologies.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Years Experience", value: "3+" },
                { label: "Projects Completed", value: "25+" },
                { label: "Technologies", value: "15+" },
                { label: "Happy Clients", value: "20+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="p-4 rounded-xl bg-card border border-border/50"
                >
                  <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
