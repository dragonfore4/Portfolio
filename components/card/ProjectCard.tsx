import { ToolButton } from "../Button/Button";

const ProjectCard = ({
  name,
  description,
  tools,
}: {
  name: string;
  description: string;
  tools: string[];
}) => {
  return (
    <>
      <div className="rounded-2xl bg-[#161616] border border-gunmetal-gray hover:border-light-grey p-6 shadow-md flex flex-col justify-between gap-5 transition-all duration-300 
        hover:-translate-y-2 sm:w-full lg:w-full will-change-transform ">


        {/* Project Title */}
        <h3 className="text-lg font-semibold text-white lg:text-2xl transition-colors duration-300 group-hover:text-light-grey">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-x-3 gap-y-2 mt-2">
          {tools &&
            tools.map((item, idx) => (
              <ToolButton key={idx} name={item} />
            ))}
        </div>

      </div >

    </>
  );
};

export default ProjectCard;
