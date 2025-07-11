"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";

import { TypingText, InsightCard, TitleText } from "../components";
import { insights } from "../constants";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText
        title={<>Insight about metaverse</>}
        textStyles="text-center"
      />
      <div className="flex flex-col mt-[50px] gap-[30px]">
        {insights.map((insight, index) => (
          <a href="#">
            <InsightCard
              key={`insight-${index}`}
              {...insight}
              index={index + 1}
            />
          </a>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
