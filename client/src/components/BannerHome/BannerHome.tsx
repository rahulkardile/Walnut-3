import bannerImg from "../../assets/bannerImg.jpg";
const BannerHome = () => {
  return (
    <div className="relative font-[sans-serif]">
      <img
        src={bannerImg}
        alt="Banner Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#ff0000] to-[#011f4b] opacity-50"></div> */}
      <div className="min-h-[200px] relative z-10 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        {/* Add any content here */}
      </div>
    </div>
  );
};

export default BannerHome;
