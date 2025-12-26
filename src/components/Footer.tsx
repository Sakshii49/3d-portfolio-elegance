import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © 2024 Portfolio. Built with passion and React.
          </p>
          <p className="text-muted-foreground text-sm">
            Designed & Developed with <span className="text-primary">♥</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
