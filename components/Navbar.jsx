"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] insert-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <a href="#">
        <img
          src="/search.svg"
          alt="search icon"
          className="w-[24px] h-[24px] object-contain"
        />
      </a>

      <h2 className="text-white font-extrabold text-[24px] leading-[30px]">
        METAVERSUS
      </h2>
      <a href="#">
        <img
          src="/menu.svg"
          alt="menu hamburger"
          className="w-[24px] h-[24px] object-contain"
        />
      </a>
    </div>
  </motion.nav>
);

export default Navbar;
