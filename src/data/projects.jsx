import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiPostgresql,
  SiMongodb,
  SiVite,
  SiFramer
} from "react-icons/si";
import React from "react";

export const projects = [
  {
    id: 1,
    link: "https://dinodesk.netlify.app/",
    pic: "DinoDesk.png",
    heading: "DinoDesk",
    discr: "A Smart Dino Game",
    tags: [
      { name: "Mongo", icon: <SiMongodb color="#47A248" /> },
      { name: "Nextjs", icon: <RiNextjsLine color="#FFFFFF" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
    ],
  },
  {
    id: 2,
    link: "https://ganjrelawn.com/",
    pic: "Ganjrelawn.png",
    heading: "Ganjre Lawn",
    discr: "Wedding Planner application",
    tags: [
      { name: "React 19", icon: <FaReact color="#61DAFB" /> },
      { name: "Vite", icon: <SiVite color="#646CFF" /> },
      { name: "Tailwind 4", icon: <RiTailwindCssFill color="#06B6D4" /> },
      { name: "Motion", icon: <SiFramer color="#0055FF" /> },
    ],
  },
  // {
  //   id: 3,
  //   link: "https://university-portal-rouge.vercel.app/admin",
  //   pic: "image.png",
  //   heading: "University Portal",
  //   discr: "VU University Portal",
  //   tags: [
  //     { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  //     { name: "React", icon: <FaReact color="#61DAFB" /> },
  //     { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
  //   ],
  // },
  // // Placeholders for future projects
  // {
  //   id: 4,
  //   link: "https://ramadan-time-two.vercel.app/",
  //   pic: "ramadan.png",
  //   heading: "Ramadan Time",
  //   discr: "GPS-powered Ramadan companion app.",
  //   tags: [
  //     { name: "React", icon: <FaReact color="#61DAFB" /> },
  //     { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
  //   ],
  // },
  // {
  //   id: 5,
  //   link: "https://e-commerce-product-page-beta-sand.vercel.app/",
  //   pic: "project1.png",
  //   heading: "Simple E-Commerce Page",
  //   discr: "Product Listing + Add to Cart",
  //   tags: [
  //     { name: "React", icon: <FaReact color="#61DAFB" /> },
  //     { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
  //     { name: "JS", icon: <SiJavascript color="#F7DF1E" /> },
  //   ],
  // },
  // {
  //   id: 6,
  //   link: "#",
  //   pic: "",
  //   heading: "DinoDesk",
  //   discr: "DinoDesk Project",
  //   tags: [
  //     { name: "React 19", icon: <FaReact color="#61DAFB" /> },
  //     { name: "Vite", icon: <SiVite color="#646CFF" /> },
  //     { name: "Tailwind 4", icon: <RiTailwindCssFill color="#06B6D4" /> },
  //     { name: "Motion", icon: <SiFramer color="#0055FF" /> },
  //   ],
  // }
];
