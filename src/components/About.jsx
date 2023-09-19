import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, service }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full white-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-10 h-10 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>

        <h4 className="text-white-100 text-[18px] text-center">
          {service.text}
        </h4>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a highly motivated individual with a Bachelor of Computer Science
        and a Bachelor of Business Administration from Wilfrid Laurier
        University. My technical talents include Python, Java, C#, JavaScript,
        HTML, CSS, and SQL, as well as tools like Linux, Docker, Git, Jenkins,
        and Angular. I've studied Object Oriented Programming, Data Structures,
        Databases, Cryptography, Computer Security, and other topics. As a
        Software Engineer at TechZenik, I created and integrated a Unity WebGL
        game, kept the corporate website updated, and offered application
        support. I worked as a Technical Support Specialist at Modatek Systems,
        where I designed automobile parts and provided customer service. I have
        strong analytical and problem-solving abilities, as well as exceptional
        customer service and communication skills. I have completed several
        notable projects, including designing two single-player games and
        developing numerous transpositional, polyalphabetic, and monoalphabetic
        ciphers that encrypt and decrypt messages using a key. Overall, I'm
        looking for opportunities to apply my degree and technical talents to a
        job as a developer.
      </motion.p>

      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.key}
            index={index}
            {...service}
            service={service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
