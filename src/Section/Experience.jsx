import React from "react";
import Heading from "../Components/Heading";
import ExperienceCard from "../Components/ExperienceCard";

const Experience = React.forwardRef(function Experience(props, ref) {
  return (
    <section ref={ref} data-name="Experience" className="scroll-mt-28">
      <div>
        <Heading FWord="RELEVANT" LWord="EXPERIENCE" />
      </div>
      <div className="mt-10 stagger-reveal">
        <ExperienceCard
          heading="Data Analysis and AI engineer intern"
          para="Currently working as a AI engineering intern at a Acube AI Solutions, contributing to the development of Genrative AI , RAG System and AI based Solutions using Langchain,LangGraph,HuggingFace."
          date="June, 2026 – Present"
          active
        />


      </div>
    </section>
  );
});

export default Experience;
