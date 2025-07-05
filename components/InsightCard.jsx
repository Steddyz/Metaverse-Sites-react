"use client";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const InsightCard = ({ title, subtitle, imgUrl, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt={title}
      className="rounded-[32px] md:w-[270px] w-full h-[250px] object-cover"
    />
    <div className="flex justify-between items-center w-full ">
      <div className="flex flex-col flex-1 md:ml-[62px] max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="font-normal lg:text-[20px] text-[14px] mt-[16px] text-secondary-white">
          {subtitle}
        </p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white cursor-pointer">
        <img
          src="arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
