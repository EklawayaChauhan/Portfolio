const fs = require('fs');
const path = require('path');

const si = require('./node_modules/react-icons/si');
const fa = require('./node_modules/react-icons/fa');
const ri = require('./node_modules/react-icons/ri');
const io5 = require('./node_modules/react-icons/io5');

const icons = {
  FaReact: fa, FaGithub: fa, FaBootstrap: fa, FaJava: fa, FaDocker: fa, FaAws: fa,
  RiTailwindCssFill: ri, RiNextjsLine: ri,
  IoLogoJavascript: io5, IoLogoCss3: io5, IoLogoHtml5: io5,
  SiChartdotjs: si, SiCplusplus: si, SiDjango: si, SiDotnet: si, SiExpress: si, 
  SiFirebase: si, SiFlask: si, SiFlutter: si, SiGooglecloud: si, SiGit: si, 
  SiGraphql: si, SiJenkins: si, SiApachekafka: si, SiKubernetes: si, 
  SiMongodb: si, SiMysql: si, SiNestjs: si, SiNodedotjs: si, SiOpencv: si, 
  SiPhp: si, SiPostgresql: si, SiPostman: si, SiPython: si, SiPytorch: si, 
  SiRedis: si, SiScikitlearn: si, SiTailwindcss: si, SiTensorflow: si, 
  SiUnity: si, SiFigma: si
};

let missing = [];
for (const [name, module] of Object.entries(icons)) {
  if (!module[name]) {
    missing.push(name);
  }
}

if (missing.length > 0) {
  console.log("Missing icons:", missing.join(', '));
} else {
  console.log("All icons exist.");
}
