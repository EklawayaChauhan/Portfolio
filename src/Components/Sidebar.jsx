import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import ProfileCard from "./ProfileCard";

const socialLinks = [
  {
    Icon: FaGithub,
    href: "https://github.com/EklawayaChauhan",
    hoverColor: "#e6edf3",
  },
  {
    Icon: CiLinkedin,
    href: "https://www.linkedin.com/in/eklawaya-chauhan-10914529b/",
    hoverColor: "#0A66C2",
  },
];

function Sidebar() {
  return (
    <div className="relative flex flex-col p-[2px] rounded-2xl lg:sticky top-20 shadow-2xl">
      <div className="bg-[#1a1816] p-4 lg:p-6 rounded-2xl items-center gap-6 flex flex-col">
        <div className="w-full">
          <ProfileCard
            name="Eklawaya"
            title="Aspiring Software Engineer"
            avatarUrl="Media.png"
            showUserInfo={false}
            enableTilt={true}
            behindGlowEnabled={true}
          />
        </div>

        {/* Social icons */}
        <div className="flex gap-4 text-2xl text-gray-500 w-full justify-center mt-2">
          {socialLinks.map(({ Icon, href, hoverColor }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-120 hover:-translate-y-1 drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]"
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Download CV — white default, orange on hover */}
        <a
          href="/temp_resume.pdf"
          download
          className="relative overflow-hidden group text-center w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg active:scale-95 block uppercase tracking-widest text-sm"
        >
          <span className="relative z-10">Download CV</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-white/20 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
