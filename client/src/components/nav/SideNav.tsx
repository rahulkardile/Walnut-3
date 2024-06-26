import { Link } from "react-router-dom";
import logoImg from "../../assets/Walnut_logo.png";
import { BiHomeSmile, BiMenu } from "react-icons/bi";
import { BsPeopleFill, BsSegmentedNav } from "react-icons/bs";
import { FaServicestack } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { GrConnect } from "react-icons/gr";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import b1 from "../../assets/Banners/1.jpg";
import b2 from "../../assets/Banners/2.jpg";
import { FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

const SideNav = ({
  isNavOpen,
  toggleNav,
}: {
  isNavOpen: boolean;
  toggleNav: () => void;
}) => {
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const navlinks = [
    {
      id: 1,
      title: "Home",
      route: "/",
      icon: <BiHomeSmile />,
      Banner: b1,
      submenu: [],
    },
    {
      id: 2,
      title: "About Us",
      route: "/aboutus",
      icon: <BsPeopleFill />,
      Banner: b2,
      submenu: [],
    },
    {
      id: 3,
      title: "Services ",
      route: "/aboutus/services",
      icon: <FaServicestack />,
      // bgcolor: "bg-[#6497b1]",
      submenu: [
        {
          id: 9,
          title: "Business strategy Consultation",
          route: "/aboutus/consulting",
        },
        {
          id: 10,
          title: "Coaching & Mentoring for Startups & SMEs",
          route: "/aboutus/coaching",
        },
        {
          id: 11,
          title: "Financial Management consultancy",
          route: "/aboutus/financial",
        },
        {
          id: 12,
          title: "Marketing & Sales Consultation",
          route: "/aboutus/marketing",
        },
        {
          id: 13,
          title: "Corporate training & Skill enhancement",
          route: "/aboutus/corporate",
        },
        { id: 14, title: "B2B & B2G Sales Strategy", route: "/aboutus/b2b" },
        {
          id: 15,
          title: "Retainership Commitment",
          route: "/aboutus/retainership",
        },
      ],
    },
    {
      id: 4,
      title: "Segments we Serve",
      route: "/aboutus/segmentsweserve",
      icon: <BsSegmentedNav />,
      // bgcolor: "bg-[#005b96]",
      submenu: [],
    },
    {
      id: 5,
      title: "Continuous Learning",
      route: "/aboutus/continuouslearning",
      icon: <GiGraduateCap />,
      // bgcolor: "bg-[#03396c]",
      submenu: [],
    },
    {
      id: 6,
      title: "Lets Connect",
      route: "/aboutus/letsconnect",
      icon: <GrConnect />,
      // bgcolor: "bg-[#011f4b]",
      submenu: [],
    },
  ];

  return (
    <div className="absolute z-50">
      <div className="lg:hidden flex justify-between portrait:w-screen  items-center p-4 text-white">
        <a className="flex title-font font-medium items-center text-white">
          <img
            src={logoImg}
            className="w-20 portrait:w-14 portrait:h-14 h-20"
            alt="logo"
          />
        </a>
        <button onClick={toggleNav}>
          <BiMenu className="text-3xl" />
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 bg-white bottom-0 z-[60] border-e w-64 portrait:w-screen border-gray-200 pt-7 pb-10 transform transition-transform duration-300 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="px-5 flex flex-row justify-between items-start">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logoImg} className="w-[10rem] h-[10rem]" alt="logo" />
          </a>
          <button onClick={toggleNav}>
            <IoMdMenu className="text-3xl portrait:hidden block" />
            <RxCross2 className="text-3xl portrait:block hidden" />
          </button>
        </div>

        <nav className="hs-accordion-group mt-3 h-full w-full bg-gradient-to-t from-[#152c96] to-white flex flex-col  ">
          <ul className="">
            {navlinks.map((data) => (
              <li
                key={data.id}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(data.id)}
                onMouseLeave={() => setActiveSubmenu(null)}
                onClick={data.submenu.length == 0 ? toggleNav : "" }
              >
                <Link
                  className={`flex items-center gap-x-2.5 py-4 px-2.5 text-bold text-xl text-gray-800 font-semibold transition-all duration-300`}
                  to={data.route}
                >
                  <span className="text-xl">{data.icon}</span>
                  {data.title}
                </Link>
                {data.submenu.length > 0 && activeSubmenu === data.id && (
                  <ul className="absolute landscape:left-[100%] portrait:top-14  z-10 -top-11 portrait:w-72 landscape:w-48 portrait:bg-white bg-[#cbd0e8] shadow-lg">
                    {data.submenu.map((submenu) => (
                      <li key={submenu.id}>
                        <Link
                          className="block px-4  py-2 text-gray-700 hover:bg-gray-200"
                          to={submenu.route}
                          onClick={toggleNav}
                        >
                          {submenu.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8 mb-8 flex items-center justify-center space-x-4">
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            {/* Mail Icon */}
            <a
              href="mailto:info@wbci.com"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <FaEnvelope size={24} />
            </a>
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <div className="text-sm text-gray-8 font-semibold mt-4 lg:mt-0 text-center">
            © 2024 Walnut Business Consultant
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
