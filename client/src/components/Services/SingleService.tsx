interface Service {
  heading: string;
  para1: JSX.Element;
  para2: JSX.Element;
  para3: JSX.Element;
  para4: JSX.Element;
  img: string;
}
const SingleService = ({
  para1,
  para2,
  para3,
  para4,
  heading,
  img,
}: Service) => {
  return (
    <section className="text-gray-600 mt-1 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={img}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {heading}
          </h1>
          <p className="mb-2 leading-relaxed">{para1}</p>
          <p className="mb-2 leading-relaxed">{para2}</p>
          <p className="mb-2 leading-relaxed">{para3}</p>
          <p className="mb-3 leading-relaxed">{para4}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleService;
