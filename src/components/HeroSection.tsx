import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="perspective-container text-center">
          <motion.div
            initial={{ opacity: 0, rotateX: -30, y: 50 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-mono text-sm tracking-widest mb-4"
            >
              HELLO, I'M
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="text-foreground">Full Stack</span>
              <br />
              <span className="text-gradient">Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Building exceptional digital experiences with React, Node.js, and
              modern DevOps practices. Passionate about clean code and
              innovative solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Explore My Work
              </motion.a>
              <motion.a
                href="#skills"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-border rounded-full font-semibold text-lg hover:border-primary/50 hover:text-primary transition-colors"
              >
                View Skills
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
