"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaNodeJs,
  FaFigma,
  FaFlask,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiAnsible,
  SiPostman,
  SiMui,
} from "react-icons/si";
import { DiMysql, DiDjango } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "I am a passionate software engineer dedicated to creating innovative solutions that make a difference. With a strong foundation in full stack development and a love for problem-solving, I thrive in dynamic environments where I can continually learn and grow. My experience spans various technologies and frameworks, allowing me to adapt quickly to new challenges and effectively contribute to team goals. I believe in the power of collaboration and am always eager to share knowledge and learn from others. In my free time, I enjoy exploring new tech trends, participating in coding challenges, and working on personal projects that fuel my creativity.",
  info: [
    {
      fieldNmae: "Name",
      fieldValue: "Sumit Tiwari",
    },
    {
      fieldNmae: "Experience",
      fieldValue: "2.5+ Years",
    },
    {
      fieldNmae: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldNmae: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "With a diverse background in software engineering, I have successfully contributed to projects across multiple domains. My experience includes developing robust applications, enhancing system performance, and collaborating with cross-functional teams to deliver innovative solutions. I am committed to continuous improvement and leveraging technology to meet business objectives.",
  items: [
    {
      company: "Bank of America",
      position: "Software Engineer I A",
      duration: "Aug, 2024 - Present",
    },
    {
      company: "Bank of America",
      position: "Software Engineer I B",
      duration: "Jun, 2022 - Aug, 2024",
    },
    {
      company: "Montbleu Technologies",
      position: "Full Stack Developer Intern",
      duration: "Mar, 2022 - Jun, 2022",
    },
    {
      company: "The Sparks Foundation",
      position: "Data Sci. & Biz. Analytics Intern",
      duration: "Jan, 2021 - Feb, 2021",
    },
  ],
};

const education = {
  title: "My Education",
  description: "",
  items: [
    {
      institution: "VIT Bhopal University",
      degree: "B.Tech, CSE",
      duration: "2018 - 2022",
    },
    {
      institution: "St. Xavier's High School",
      degree: "Higher Secondary Certificate (12th)",
      duration: "2015 - 2017",
    },
    {
      institution: "St. Xavier's High School",
      degree: "Secondary School Certificate (10th)",
      duration: "2013 - 2015",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Proficient in full stack development, skilled in the technologies below to create efficient and scalable solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaFlask />,
      name: "Flask",
    },
    {
      icon: <DiDjango />,
      name: "Django",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiMui />,
      name: "Material UI",
    },
    {
      icon: <DiMysql />,
      name: "SQL",
    },
    {
      icon: <SiMongodb />,
      name: "Mongodb",
    },
    {
      icon: <SiAnsible />,
      name: "Ansible",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex  items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{experience.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{education.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        className="flex item-center justify-center xl:justify-start gap-4"
                        key={index}
                      >
                        <span className="text-white/60">{item.fieldNmae}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
