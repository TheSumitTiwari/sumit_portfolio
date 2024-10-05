"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const certificates = [
  {
    num: "01",
    title: "RDBMS - Database Fundamentals",
    issued: "Dec, 2022",
    organization: "IBM",
    href: "https://courses.etrain.skillsnetwork.site/certificates/c2053f1f56d64dffb05273aea4e5e4de",
  },
  {
    num: "02",
    title: "Agile Methodologies",
    issued: "Nov, 2022",
    organization: "IBM",
    href: "https://courses.etrain.skillsnetwork.site/certificates/f595ec2ca43d4f6cb6142f3b9dfef9f3",
  },
  {
    num: "03",
    title: "DevOps Fundamentals",
    issued: "Nov, 2022",
    organization: "IBM",
    href: "https://courses.etrain.skillsnetwork.site/certificates/2ae2d755f32a45198ff24c53c6039b30",
  },
  {
    num: "04",
    title: "NASSCOM certified Associate Analytics",
    issued: "Jun, 2021",
    organization: "NASSCOM",
    href: "https://drive.google.com/file/d/1OhPCeVrOlpKezs7XfyWxGcljycAaoXeD/view?usp=sharing",
  },
  {
    num: "05",
    title: "Python and Django Full Stack Web Developer Bootcamp",
    issued: "Jan, 2021",
    organization: "Udemy",
    href: "http://ude.my/UC-e5d07f09-7dfd-4813-bcd8-eb742987bb5a/",
  },
  {
    num: "06",
    title: "MERN Stack Front To Back: Full Stack React, Redux & Node.js",
    issued: "Aug, 2020",
    organization: "Udemy",
    href: "http://ude.my/UC-5f2d1958-2db5-42cb-867b-f28e4f846adb/",
  },
  {
    num: "07",
    title: "Machine Learning Specialization",
    issued: "Jul, 2020",
    organization: "Coursera",
    href: "https://www.coursera.org/account/accomplishments/specialization/36VSHZKP657X",
  },
  {
    num: "08",
    title: "Modern React with Redux",
    issued: "Jun, 2020",
    organization: "Udemy",
    href: "http://ude.my/UC-f31cbbf7-6d2b-4695-90bc-bea1b7eab7e8/",
  },
  {
    num: "09",
    title: "Natural Language Processing in TensorFlow",
    issued: "Jun, 2020",
    organization: "Coursera",
    href: "http://coursera.org/verify/PTTMM6XJZ32K",
  },
  {
    num: "10",
    title: "Deep Learning Specialization",
    issued: "Apr, 2020",
    organization: "Coursera",
    href: "http://coursera.org/verify/specialization/87Q62WLGSNX7",
  },
  {
    num: "11",
    title: "The Web Developer Bootcamp",
    issued: "Apr, 2020",
    organization: "Udemy",
    href: "http://ude.my/UC-c0289606-9482-47f5-a687-2953de31b4dd",
  },
];

const Certificates = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-12 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {certificates.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-3 group border-b-2 border-white/20 w-full"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 "
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[22px] font-bold loading-none text-white group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h2>
                <span className="text-accent text-[16px]">
                  {item.organization}
                </span>
                <span className="text-white/80 text-[14px]">{item.issued}</span>
                {/* <div className="border-b border-white/20 w-full"></div> */}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
