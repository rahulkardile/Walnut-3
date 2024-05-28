import { Link } from "react-router-dom";
import logoImg from "../../assets/Walnut_logo.png";
import { BiHomeSmile, BiMenu } from "react-icons/bi";
import { BsPeopleFill, BsSegmentedNav } from "react-icons/bs";
import { FaServicestack } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { GrConnect } from "react-icons/gr";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
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
      bgcolor: "bg-[#b3cde0]",
      submenu: [],
    },
    {
      id: 2,
      title: "About Us",
      route: "/aboutus",
      icon: <BsPeopleFill />,

      bgcolor: "bg-[#92d2f9]",
      submenu: [
        { id: 7, title: "Our Team", route: "/aboutus/ourteam" },
        { id: 8, title: "Our Story", route: "/aboutus/ourstory" },
      ],
    },
    {
      id: 3,
      title: "Services ",
      route: "/aboutus/services",

      icon: <FaServicestack />,

      bgcolor: "bg-[#6497b1]",
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
      bgcolor: "bg-[#005b96]",
      submenu: [],
    },
    {
      id: 5,
      title: "Continuous Learning",
      route: "/aboutus/continuouslearning",
      icon: <GiGraduateCap />,
      bgcolor: "bg-[#03396c]",
      submenu: [],
    },
    {
      id: 6,
      title: "Lets Connect",
      route: "/aboutus/letsconnect",
      icon: <GrConnect />,
      bgcolor: "bg-[#011f4b]",
      submenu: [],
    },
  ];

  return (
    <div>
      <div className="lg:hidden flex justify-between items-center p-4 bg-[#005b96] text-white">
        <a className="flex title-font font-medium items-center text-white">
          <img src={logoImg} className="w-20 h-20" alt="logo" />
        </a>
        <button onClick={toggleNav}>
          <BiMenu className="text-3xl" />
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 bottom-0 z-[60]  bg-white border-e w-screen border-gray-200 pt-7 pb-10 overflow-y-hidden transform transition-transform duration-300 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="px-5 flex flex-row justify-between items-start">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logoImg} className="w-[10rem] h-[10rem]" alt="logo" />
          </a>
          <button onClick={toggleNav}>
            <RxCross2 className="text-3xl" />
          </button>
        </div>

        <nav className="hs-accordion-group mt-3 h-full w-full flex flex-col bg-[#005b96]">
          <ul className="overflow-y-auto">
            {navlinks.map((data) => (
              <li
                key={data.id}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(data.id)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  className={`flex items-center gap-x-2.5 py-4 px-2.5 ${data.bgcolor} text-bold text-xl text-[#ff7400] transition-all duration-300`}
                  to={data.route}
                >
                  <span className="text-xl">{data.icon}</span>
                  {data.title}
                </Link>
                {data.submenu.length > 0 && activeSubmenu === data.id && (
                  <ul className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg z-50">
                    {data.submenu.map((submenu) => (
                      <li key={submenu.id}>
                        <Link
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
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
          <div className="text-sm text-gray-400 mt-4 lg:mt-0 text-center">
            © 2024 Walnut Business Consultant
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
