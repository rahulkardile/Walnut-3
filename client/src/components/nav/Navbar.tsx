import { Link } from "react-router-dom";
import logoImg from "../../assets/Walnut_logo.png";
const Navbar = () => {
  const navlinks = [
    {
      id: 1,
      title: "Home",
      route: "/",
      bgcolor: "bg-[#011f4b]",
    },
    {
      id: 2,
      title: "About Us",
      route: "/aboutus",
      bgcolor: "bg-[#ff7400]",
    },
    {
      id: 3,
      title: "Services ",
      route: "/aboutus/services",
      bgcolor: "bg-[#011f4b]",
    },
    {
      id: 4,
      title: "Segments we Serve",
      route: "/aboutus/segmentsweserve",
      bgcolor: "bg-[#ff7400]",
    },
    {
      id: 5,
      title: "Continuous Learning",
      route: "/aboutus/continuouslearning",
      bgcolor: "bg-[#011f4b]",
    },
    {
      id: 6,
      title: "Lets Connect",
      route: "/aboutus/letsconnect",
      bgcolor: "bg-[#ff7400]",
    },
  ];
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap flex-row md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src={logoImg}
            className="w-40 h-40 portrait:w-20 portrait:h-20 text-white bgre p-2 rounded-full"
          />

        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {/* <ul> */}
          {navlinks.map((data) => {
            return (
              <Link
                key={data.id}
                to={data.route}
                className={`border ${data.bgcolor} border-gray-300 text-gray-200 portrait:px-4 portrait:py-2 px-8 py-4 text-2xl portrait:text-xs transition-colors duration-300`}
              >
                {data.title}
              </Link>
            );
          })}
          {/* </ul> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
