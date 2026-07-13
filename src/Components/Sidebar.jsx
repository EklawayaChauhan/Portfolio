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
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/temp_resume.pdf";
    link.download = "temp_resume.pdf";
    link.click();
  };

  return (
    <div className="animated-border relative flex flex-col p-[2px] rounded-2xl lg:sticky top-20 shadow-2xl">
      <div className="bg-[#1a1816] p-5 lg:p-6 rounded-2xl items-center gap-6 flex flex-col">

        {/* 3D Tilt Profile Card */}
        <div className="w-full">
          <ProfileCard
            name="Eklawaya"
            title="Software Engineer"
            handle="eklawayachauhan"
            status="Available for Work"
            contactText="Download CV"
            avatarUrl="/Media.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={handleDownloadCV}
            behindGlowEnabled={true}
            behindGlowColor="rgba(249, 115, 22, 0.4)"
          />
        </div>

        {/* Bio */}
        <div className="px-2">
          <p className="font-medium leading-7 text-gray-500 text-center text-lg">
            A <span className="text-white/80">Software Engineer</span> who has
            developed countless innovative solutions.
          </p>
        </div>

        {/* Social icons — show original brand color on hover */}
        <div className="flex gap-4 text-2xl text-gray-500 pb-2">
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

      </div>
    </div>
  );
}

export default Sidebar;
