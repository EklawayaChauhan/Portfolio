import React from "react";
import Heading from "../Components/Heading";

const Contact = React.forwardRef(function Contact(props, ref) {
  const labelStyle = "text-gray-400 text-xs font-medium tracking-wide";
  const inpStyle =
    "w-full text-gray-300 text-sm bg-[#1e1c1b] p-2.5 rounded-lg placeholder-gray-600 border border-white/[0.07] outline-none focus:border-orange-500/60 focus:bg-[#252321] transition-all duration-200 placeholder:text-xs";
  const opStyle = "text-gray-400 text-xs bg-[#1e1c1b]";

  return (
    <section ref={ref} className="scroll-mt-28">
      <div className="mb-10">
        <Heading FWord="LET'S WORK" LWord="TOGETHER" />
      </div>

    </section>
  );
});

export default Contact;
