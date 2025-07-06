"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainers, fadeIn, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainers}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex relative justify-end flex-col flex-[0.5] lg:w-[370px] 
        gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a]"
      >
        <div className="feedback-gradient" />
        <h4
          className="font-bold sm:text-[32px] text-white text-[26px] 
        sm:leading-[40px] leading-[46px]"
        >
          Steddy
        </h4>
        <p
          className="mt-[8px] font-normal text-white sm:text-[18px] 
        text-[12px] sm:leading-[22px] leading-[16px]"
        >
          Founder | Metaversus
        </p>
        <p
          className="mt-[24px] font-normal text-white sm:text-[24px] 
        text-[18px] sm:leading-[45px] leading-[39px]"
        >
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex justify-center items-center flex-1"
      >
        <img
          src="/planet-09.png"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] rounded-[40px] 
          object-cover"
        />
      </motion.div>
    </motion.div>
    ;
  </section>
);

export default Feedback;
