"use client";
import Image from "next/image";
import React from "react";
import H2R from "@/app/assets/H2R.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="w-full border flex flex-col justify-evenly relative items-center text-7xl sm:text-8xl md:text-9xl min-h-[500px] mt-20 rounded-lg shadow-sm shadow-accent h-screen"
    >
      <p>Welcome To</p>
      <h1 className="text-primary z-10 font-bold">Vetic Moto</h1>
      <Image
        src={H2R}
        className="absolute"
        alt="H2R"
        width={700}
        height={700}
        style={{ opacity: ".6" }}
      />
    </motion.div>
  );
}

export default Hero;
