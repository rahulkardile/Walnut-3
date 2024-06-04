interface Service {
  heading: string;
  para1: JSX.Element;
  para2: JSX.Element;
  navSide: string;
  Banner: string;
  para3: JSX.Element;
  para4: JSX.Element;
  img: string;
}
const SingleService = ({
  para1,
  para2,
  para3,
  navSide,
  para4,
  heading,
  img,
}: Service) => {
  return (
    <>
      <div className="w-screen portrait:h-24 h-48 relative overflow-hidden">
        <div
          id="bgBannerImg"
          className="w-full h-full absolute object-cover -z-20"
        />
        
        <div className="flex flex-row text-center mt-5 justify-between w-10/12 items-center px-5 h-[80%] ">
          <h1 className="z-10 text-2xl portrait:hidden text-[#192138] font-bold text-center w-[30%]">
            {heading}
          </h1>
          <img src={navSide} className="portrait:hidden" alt="logo" />
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-2 md:flex-row portrait:gap-5 flex-col items-center">
          <h1 className="my-2 text-lg font-semibold portrait:block hidden">
            {heading}
          </h1>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={img}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p className="mb-2 sm:pt-14 leading-relaxed">{para1}</p>
            <p className="mb-2 leading-relaxed">{para2}</p>
            <p className="mb-2 leading-relaxed">{para3}</p>
            <p className="mb-3 leading-relaxed">{para4}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleService;
