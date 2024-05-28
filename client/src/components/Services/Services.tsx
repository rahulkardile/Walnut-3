import img from "../../assets/services.jpg";

const Services = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
             <img
          className=" mb-10 object-cover object-center rounded"
          alt="hero"
          src={img}
          />
 
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Our Services
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome to our Management Consulting Services page, where we empower
            your business to navigate complexities and seize opportunities with
            confidence. At Walnut Business consultating, our guiding principle
            is encapsulated in three powerful words: Strategise, Adapt, Succeed.{" "}
          </p>
          <p className="mb-8 leading-relaxed">
            We understand that in today's dynamic market, strategic foresight
            and adaptability are paramount. Our expert consultants work closely
            with you to develop robust strategies tailored to your unique
            challenges and goals. By fostering a culture of agility and
            innovation, we ensure that your organization not only adapts to
            change but thrives in it. Associate with us to unlock your potential
            and achieve sustained success in an ever-evolving business
            landscape.
          </p>
          <h1 className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-900">
          Let us partner with you to drive excellence and long-term success.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Services;
