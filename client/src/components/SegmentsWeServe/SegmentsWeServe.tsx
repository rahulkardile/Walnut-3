import { FaDollarSign, FaHospital, FaCapsules, FaUtensils, FaRocket, FaBuilding, FaGraduationCap, FaHandsWash, FaHandsHelping, FaBriefcase } from "react-icons/fa";

const SegmentsWeServe = () => {
  const steps = [
    {
      icon: FaDollarSign,
      name: "Finance & Financial Advisory",
      description:
        "Providing financial advice and services to individuals and businesses.",
    },
    {
      icon: FaHospital,
      name: "Hospital & Health Care Services",
      description:
        "Offering medical and healthcare services to patients and communities.",
    },
    {
      icon: FaCapsules,
      name: "Pharmaceuticals",
      description:
        "Manufacturing and distributing pharmaceutical drugs and medications.",
    },
    {
      icon: FaUtensils,
      name: "Hospitality Industry",
      description:
        "Providing lodging, food, and entertainment services to travelers and guests.",
    },
    {
      icon: FaRocket,
      name: "Start ups / SMEs",
      description:
        "Supporting small and medium-sized enterprises and startups with resources and guidance.",
    },
    {
      icon: FaBuilding,
      name: "Real Estate",
      description:
        "Dealing with buying, selling, and managing properties and real estate assets.",
    },
    {
      icon: FaGraduationCap,
      name: "Education industry",
      description:
        "Offering educational services and programs to students of all ages.",
    },
    {
      icon: FaHandsWash,
      name: "Hygiene",
      description:
        "Promoting cleanliness and hygiene practices for individuals and communities.",
    },
    {
      icon: FaHandsHelping,
      name: "Social Development (NGO)",
      description:
        "Working towards social causes and community development through non-profit organizations.",
    },
    {
      icon: FaBriefcase,
      name: "Government",
      description:
        "Providing public services and governance for citizens and communities.",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto"
          >
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              <step.icon />
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <step.icon className="w-12 h-12" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  {step.name}
                </h2>
                <p className="leading-relaxed">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SegmentsWeServe;
