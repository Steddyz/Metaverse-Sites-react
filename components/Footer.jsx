"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { footerVariants } from "../utils/motion";
import { socials } from "../constants";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`relative ${styles.paddings} py-8`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Metaverse
        </h4>

        <a
          href="#"
          className="flex items-center cursor-pointer h-fit py-4 px-6 bg-[#25618b] 
          rounded-[32px] gap-[12px]"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal uppercase text-transf text-[16px] text-white ">
            Enter Metaverse
          </span>
        </a>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Metaversus</h4>
          <p className="font-normal text-[14px] opacity-50 text-white">
            Copyright © 2021 - 2022 Metaversus. All rights reserved by Steddy.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a href="#">
                <img
                  src={social.url}
                  key={social.name}
                  alt={social.name}
                  className="w-[24px] h-[24px] cursor-pointer object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
