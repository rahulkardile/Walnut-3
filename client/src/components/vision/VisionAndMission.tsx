import { FaEye, FaHandHoldingMedical } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

const VisionAndMission = () => {
  const projects = [
    {
      title: "Purpose",
      description:
        "Our purpose is to ignite positive transformation through strategic insights and innovative solutions that propel growth and innovation.",

      icon: <FaHandHoldingMedical />,
    },
    {
      title: "Vision",
      description:
        "Revolutionize the Business landscape, creating world-class organizations valued by customers and employees alike.",
      icon: <FaEye />,
    },
    {
      title: "Mission",
      description: (
        <>
          "To guide businesses and professionals <br /> toward unparalleled growth,<br />
          steadfast integrity and unwavering  <br />dedication."
        </>
      ),
      icon: <TbTargetArrow />,
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap justify-center items-center -m-4">
          {projects.map((data, index) => {
            return (
              <div className="p-4 lg:w-[25%]" key={index}>
                <div className="h-full  bg-opacity-75 px-8 pt-5 pb-5 rounded-lg overflow-hidden text-center relative border border-gray-300">
                  <div className="flex justify-center items-center mt-8 text-[#011f4b] tracking-wide leading-relaxed text-5xl">
                    {data.icon}
                  </div>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-[#011f4b] my-3">
                    {data.title}
                  </h1>
                  <p className="leading-relaxed text-black mb-3">
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionAndMission;
