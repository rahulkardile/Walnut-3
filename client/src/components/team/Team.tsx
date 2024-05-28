import { LiaInstagram, LiaLinkedinIn } from "react-icons/lia";
import { MdMail } from "react-icons/md";

interface Team {
  name: string;
  proffeccion: string;
  about: string;
  image: string;
  social: {
    name: string;
    link: string;
  }[];
}
const Team = () => {
  const team: Team[] = [
    {
      name: "Manisha Sarda ",
      proffeccion: "Management Consultant ",
      about:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: "https://dummyimage.com/206x206",
      social: [
        {
          name: "instagram",
          link: "https://facebook.com",
        },
        {
          name: "Mail",
          link: "https://twitter.com",
        },
        {
          name: "Linkedin",
          link: "https://instagram.com",
        },
      ],
    },
    {
      name: "Shailendra Pawar",
      proffeccion: "Coach & Mentor for startup & Business growth ",
      about:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: "https://dummyimage.com/206x206",
      social: [
        {
          name: "instagram",
          link: "https://facebook.com",
        },
        {
          name: "Mail",
          link: "https://twitter.com",
        },
        {
          name: "Linkedin",
          link: "https://instagram.com",
        },
      ],
    },
    {
      name: "Chetan Sarda",
      proffeccion: "Financial management services ",
      about:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: "https://dummyimage.com/206x206",
      social: [
        {
          name: "instagram",
          link: "https://facebook.com",
        },
        {
          name: "Mail",
          link: "https://twitter.com",
        },
        {
          name: "Linkedin",
          link: "https://instagram.com",
        },
      ],
    },
    {
      name: "Vinod Damodaran ",
      proffeccion: "Training ",
      about:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: "https://dummyimage.com/206x206",
      social: [
        {
          name: "instagram",
          link: "https://facebook.com",
        },
        {
          name: "Mail",
          link: "https://twitter.com",
        },
        {
          name: "Linkedin",
          link: "https://instagram.com",
        },
      ],
    },
    {
      name: "Rohan Phuke",
      proffeccion: "Digitak marketing",
      about:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: "https://dummyimage.com/206x206",
      social: [
        {
          name: "instagram",
          link: "https://facebook.com",
        },
        {
          name: "Mail",
          link: "https://twitter.com",
        },
        {
          name: "Linkedin",
          link: "https://instagram.com",
        },
      ],
    },
    {
      name: "Shivrudra T",
      proffeccion: "Government specialist",
      about:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: "https://dummyimage.com/206x206",
      social: [
        {
          name: "instagram",
          link: "https://facebook.com",
        },
        {
          name: "Mail",
          link: "https://twitter.com",
        },
        {
          name: "Linkedin",
          link: "https://instagram.com",
        },
      ],
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              Our Leadership Team
            </h1>
            <h1 className="text-xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              We comprehend Your Challenges!
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Expanding your business Pan India, presents immense challenges.
              WBC , we excel in transforming these challenges into success
              stories. Our profound grasp of the Indian market, coupled with our
              extensive range of services, positions us as the perfect partner
              for your business journey. Our team of specialists will optimize
              your resources and propel you toward your business objectives.
              Let's collaborate to a grow business.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {team.map((item, index) => {
              return (
                <div className="p-4 lg:w-1/2">
                  <div
                    className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
                    key={index}
                  >
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                      src={item.image}
                    />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        {item.name}
                      </h2>
                      <h3 className="text-gray-500 mb-3">{item.proffeccion}</h3>
                      <p className="mb-4">{item.about}</p>
                      <span className="inline-flex">
                        <LiaInstagram className="text-gray-500 w-8 h-8" />
                        <MdMail className="text-gray-500 w-8 h-8" />
                        <LiaLinkedinIn className="text-gray-500 w-8 h-8" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
