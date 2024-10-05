import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/TheSumitTiwari" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/thesumittiwari",
  },
  { icon: <BiLogoGmail />, path: "mailto:thesumit98@gmail.com" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/thesumittiwari_" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
