import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import resume from "../assets/Anusaanth_Sivakumaran_Resume.pdf";
import my_pic from "../assets/pic2_.png";
import web from "../assets/web.png";
import { Image } from "@react-three/drei";
//#4169e1
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ffffff]" />
          <div className="w-1 sm:h-80 h-40 white-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#ffffff]">Anusaanth</span>
          </h1>
          <p className="mt-4 text-secondary text-[25px] max-w-3xl leading-[30px]">
            a computer science enthusiast with a passion for technology{" "}
            <br className="sm:block hidden" />
            and innovation, seeking opportunities in the field.
          </p>
          <div className="btn-container mt-3">
            <a href={resume} download="Anusaanth_Sivakumaran_Resume">
              <button className="btn btn-color-2">Download CV</button>
            </a>
          </div>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
//"mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative
//overflow-hidden mt-20 md:h-96 md:w-96" //"bg-gradient-to-b blue-gradient
//rounded-full w-80 h-80 relative overflow-hidde

//<div className="absolute xs:bottom-5 bottom-32 end-32 w-full flex justify-end items-end">
//<div className="bg-gradient-to-b blue-gradient rounded-full w-85 h-85 relative overflow-hidden">
//<img src={my_pic} />
//</div>
//</div>
