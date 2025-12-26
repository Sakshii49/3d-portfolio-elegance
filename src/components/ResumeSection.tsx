import { motion } from "framer-motion";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Download My <span className="text-gradient">Resume</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto perspective-container"
        >
          <motion.div
            whileHover={{ rotateY: 2, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="p-12 rounded-3xl bg-card border border-border/50 text-center"
            style={{
              boxShadow: "0 25px 100px -20px hsl(38 92% 50% / 0.15)",
            }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-primary/10 flex items-center justify-center"
            >
              <svg
                className="w-12 h-12 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </motion.div>

            <h3 className="text-2xl font-bold mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Download my resume to learn more about my experience, skills, and
              achievements. I'm always open to discussing new opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center gap-3"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Resume
              </motion.button>

              <motion.a
                href="mailto:contact@example.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-border rounded-full font-semibold text-lg hover:border-primary/50 hover:text-primary transition-colors flex items-center gap-3"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6 mt-12"
        >
          {["GitHub", "LinkedIn", "Twitter"].map((platform, index) => (
            <motion.a
              key={platform}
              href="#"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <span className="text-sm font-bold">{platform[0]}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
