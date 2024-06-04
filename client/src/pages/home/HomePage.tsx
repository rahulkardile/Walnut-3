import BannerHome from "../../components/BannerHome/BannerHome";
import Navbar from "../../components/nav/Navbar";
import SideNav from "../../components/nav/SideNav";
import VisionAndMission from "../../components/vision/VisionAndMission";



const HomePage = () => {


  return (
    <div className="overscroll-none flex flex-col gap-3">
      <BannerHome />
      <SideNav />
      <Navbar />
      <VisionAndMission />
    </div>
  );
};

export default HomePage;