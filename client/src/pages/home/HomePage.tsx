import BannerHome from "../../components/BannerHome/BannerHome";
import Navbar from "../../components/nav/Navbar";
import VisionAndMission from "../../components/vision/VisionAndMission";

const HomePage = () => {


  return (
    <div className="overscroll-none">
      <BannerHome />
      <Navbar />
      <VisionAndMission />
    </div>
  );
};

export default HomePage;