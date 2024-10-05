"use client";

import { delay, motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { IoIosDocument } from "react-icons/io";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Natural Language Processing",
    title: "NLP BASED FACEBOOK CHATBOT FOR MP TRAVEL AND TOURISM",
    description:
      "This smart chatbot is capable of engaging in conversation with general people similar to a human being and helps the tourists to guide them and provide information about different tourist places in MP to help them have a smooth journey throughout.",
    stack: [
      {
        name: "Python",
      },
      {
        name: "Flask",
      },
      {
        name: "NLTK",
      },
      {
        name: "TensorFlow",
      },
      {
        name: "Scikit-learn",
      },
      {
        name: "Keras",
      },
      {
        name: "Pandas",
      },
      {
        name: "Matplotlib",
      },
      {
        name: "Facebook API",
      },
      {
        name: "Ngrok",
      },
      {
        name: "Numpy",
      },
      {
        name: "Google Colab",
      },
    ],
    image: "/assets/project/NLP.png",
    role: "Team Lead",
    github:
      "https://github.com/TheSumitTiwari/MP-Travel-and-Tourism-Facebook-Chatbot",
    documents:
      "https://drive.google.com/file/d/1ts4XjKl9lBpmi-VNMcngcL_QMb7DoRpm/view?usp=sharing",
  },
  {
    num: "02",
    category: "Web Application & ML",
    title: "ComRed",
    description:
      "Comred is a Web Application that uses Advance ML models to predict the most probable Prognosis or Diagnosis of diseases based solely on an individual’s early symptoms.",
    stack: [
      {
        name: "EJS",
      },
      {
        name: "CSS",
      },
      {
        name: "Python",
      },
      {
        name: "Javascript",
      },
      {
        name: "Node JS",
      },
      {
        name: "Express JS",
      },
      {
        name: "Semantic UI",
      },
      {
        name: "MongoDB",
      },
      {
        name: "TensorFlow",
      },
      {
        name: "Scikit-learn",
      },
      {
        name: "Keras",
      },
      {
        name: "Pandas",
      },
      {
        name: "Numpy",
      },
      {
        name: "Matplotlib",
      },
      {
        name: "Google Colab",
      },
    ],
    image: "/assets/project/comred.png",
    role: "Team Lead",
    github: "https://github.com/TheSumitTiwari/COMRED",
    documents:
      "https://docs.google.com/presentation/d/1Su5Knb243B079mP8qI_P7Xg49wlDmfp4A0fYbpODGK8/edit?usp=sharing",
  },
  {
    num: "03",
    category: "Desktop Application",
    title: "dataM",
    description:
      "It is a desktop application for state government school management. It consists of 4 user levels state, district, block, and school. It works offline as well as online using two-way synchronization of local and remote databases.",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "CSS 3",
      },
      {
        name: "Javascript",
      },
      {
        name: "Node JS",
      },
      {
        name: "Electron JS",
      },
      {
        name: "Semantic UI",
      },
      {
        name: "PouchDB",
      },
      {
        name: "CouchDB",
      },
    ],
    image: "/assets/project/dataM.png",
    role: "Team Lead",
    github: "https://github.com/TheSumitTiwari/dataM",
    documents:
      "https://docs.google.com/presentation/d/1HrioQ1REY9WQegtCWsfU6KNzJ7cerQQR/edit?usp=sharing&ouid=112571736100424951370&rtpof=true&sd=true",
  },
  {
    num: "04",
    category: "Web Application",
    title: "askQ",
    description:
      "It is a desktop application for state government school management. It consists of 4 user levels state, district, block, and school. It works offline as well as online using two-way synchronization of local and remote databases.",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "CSS 3",
      },
      {
        name: "Javascript",
      },
      {
        name: "Node JS",
      },
      {
        name: "Express JS",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "MongoDB",
      },
    ],
    image: "/assets/project/askQ.jpeg",
    role: "Team Lead",
    github: "https://github.com/TheSumitTiwari/AskQ",
    documents: "",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="">
                {project.stack.map((item, index) => {
                  return (
                    <span key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 ? ", " : "."}
                    </span>
                  );
                })}
              </ul>
              {/* <div className="border border-white/20"></div> */}
              <div className="flex items-center gap-4">
                <Link href={project.documents}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <IoIosDocument className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Documents</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github url */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
