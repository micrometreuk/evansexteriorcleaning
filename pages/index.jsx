import { motion } from "framer-motion";
import Layout from "../components/layout";
import styles from "../style/Home.module.css";
import Heading from "../components/Heading";
import LogoCard from "../components/Logo/Logo";
import Moto from "../components/Moto/Moto";
import DriveWays from "../components/DriveWays/DriveWays";
import Carousel from "../components/Carousel/Carousel";
import Services from "../components/services/Services";
import WhyCard from "../components/why/Why";
import Map from "../components/Map/Map";
import NavBarFooter from "../components/nav/NavbarFooter";
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
export function HomePage() {
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
              <LogoCard />
              <Moto />
              <DriveWays />
              <Services />
              <WhyCard />
              <Map />
              <Carousel />
              <CopyRight />
              </motion.div>
          </motion.div>
        </motion.section>
      </Layout>
    </div>
  );
}

export default HomePage;
