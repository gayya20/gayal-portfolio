import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import profileImg from "./profile2.jpg";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt
        className="xs:w-[250px] w-full"
        options={{
            max: 45,
            scale: 1,
            speed: 450,
        }}
    >
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                    src={icon}
                    alt={title}
                    className="w-16 h-16 object-contain"
                    loading="lazy"
                />
                <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            {/* Overview Section */}
            <motion.div
                variants={textVariant()}
                className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6"
            >
                {/* Text block */}
                <div className="flex-1">
                    <p className={styles.sectionSubText}>Introduction</p>
                    <h2 className={styles.sectionHeadText}>Overview</h2>
                    <motion.p
                        variants={fadeIn('', '', 0.1, 1)}
                        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                    >
                        I’m a passionate software engineer with hands-on experience building
                        web applications and solving real-world problems. I enjoy working
                        with modern technologies, learning new skills, and continuously
                        improving my craft. My focus is on writing clean, efficient code
                        and delivering practical solutions that create value.
                    </motion.p>
                </div>

                {/* Image block */}
                <div className="flex justify-center md:justify-end flex-1 mt-6 md:mt-0">
                    <img
                        src={profileImg}
                        alt="Gayal"
                        className="w-52 md:w-72 h-auto rounded-full object-cover object-top border- border-[#915EFF] shadow-lg"
                    />
                </div>
            </motion.div>

            {/* Services Section */}
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, 'about');
