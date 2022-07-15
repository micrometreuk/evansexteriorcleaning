import { motion } from "framer-motion";
import Layout from "../components/layout";
import styles from "../style/Home.module.css";
import Contact from "../components/Contact";
import AreasMap from "../components/Map/Map";
import CopyRight from "../components/Copyright";
const content = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const inputs = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};
export function ContactPage() {
  return (
    <div style={styles.homePage}>
      <Layout>
      <motion.section
          exit={{ opacity: 0 }}
        >
          <motion.div
            variants={content}
            animate="animate"
            initial="initial"
          >
            <motion.div
              variants={title}
            >
              <Contact />
              <CopyRight />
              </motion.div>
          </motion.div>
        </motion.section>
      </Layout>
    </div>
  );
}

export default ContactPage;