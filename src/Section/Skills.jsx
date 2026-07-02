import React from "react";
import Heading from "../Components/Heading";
import SkillCard from "../Components/SkillCard";
import { FaReact, FaGithub, FaBootstrap, FaDocker, FaAws, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiExpress, SiFigma, SiFirebase, SiMysql, SiGraphql } from "react-icons/si";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5 } from "react-icons/io5";

const skills = [
  { logo: <FaReact />, title: "React JS", disc: "UI Library", color: "#61DAFB" },
  { logo: <SiNextdotjs />, title: "Next JS", disc: "React Framework", color: "#000000" },
  { logo: <IoLogoJavascript />, title: "JavaScript", disc: "Programming Language", color: "#F7DF1E" },
  { logo: <SiTailwindcss />, title: "Tailwind CSS", disc: "Utility-First CSS", color: "#06B6D4" },
  { logo: <IoLogoHtml5 />, title: "HTML5", disc: "Markup Language", color: "#E34F26" },
  { logo: <IoLogoCss3 />, title: "CSS3", disc: "Styling Language", color: "#1572B6" },
  { logo: <FaNodeJs />, title: "Node.js", disc: "JavaScript Runtime", color: "#339939" },
  { logo: <SiExpress />, title: "Express.js", disc: "Node.js Framework", color: "#000000" },
  { logo: <SiMongodb />, title: "MongoDB", disc: "NoSQL Database", color: "#47A248" },
  { logo: <SiPostgresql />, title: "PostgreSQL", disc: "Relational Database", color: "#4169E1" },
  { logo: <SiMysql />, title: "MySQL", disc: "Relational Database", color: "#4479A1" },
  { logo: <FaPython />, title: "Python", disc: "Programming Language", color: "#3776AB" },
  { logo: <FaDocker />, title: "Docker", disc: "Containerization", color: "#2496ED" },
  { logo: <FaAws />, title: "AWS", disc: "Cloud Computing", color: "#232F3E" },
  { logo: <FaGithub />, title: "Git & GitHub", disc: "Version Control", color: "#E6EDF3" },
  { logo: <SiFigma />, title: "Figma", disc: "Design Tool", color: "#F24E1E" },
];

const Skills = React.forwardRef(function Skills(props, ref) {
  return (
    <section ref={ref} data-name="Skills" className="scroll-mt-28">
      <div className="mb-8">
        <Heading FWord="TECHNICAL" LWord="SKILLS" />
      </div>
      <div className="grid lg:grid-cols-2 gap-3 stagger-reveal">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </div>
    </section>
  );
});

export default Skills;
