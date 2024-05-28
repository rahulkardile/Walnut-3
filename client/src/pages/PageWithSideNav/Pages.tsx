import { Route, Routes } from "react-router-dom";
import About from "../../components/about/About";
import BannerHome from "../../components/BannerHome/BannerHome";
import SideNav from "../../components/nav/SideNav";
import Services from "../../components/Services/Services";
import SegmentsWeServe from "../../components/SegmentsWeServe/SegmentsWeServe";
import ContinuousLearning from "../../components/ContinuousLearning/ContinuousLearning";
import LetsConnect from "../../components/LetsConnect/LetsConnect";
import SingleService from "../../components/Services/SingleService";
import { useState } from "react";



import businessImg from "../../assets/Business.jpg";
import coachingImg from "../../assets/Coatching.jpg";
import financialImg from "../../assets/Finacial.jpg";
import marketingImg from "../../assets/marketingSales.jpg";
import corporateImg from "../../assets/corparateTraning.jpg";
import b2bImg from "../../assets/b2b.jpg";
import retainerImg from "../../assets/Retainership.jpg";
import SingleBlog from "../../components/blog/SingleBlog";

// import businessImg from "../../../assets/Business.jpg";
// import coachingImg from "../../assets/Business.jpg";
// import financialImg from "../../assets/Financial.jpg";
// import marketingImg from "../../../assets/marketingSales.jpg";
// import corporateImg from "../../../assets/Business.jpg";
// import b2bImg from "../../../assets/b2b.jpg";
// import retainerImg from "../../assets/Business.jpg";

interface Service {
  route: string;
  heading: string;
  para1: JSX.Element;
  para2: JSX.Element;
  para3: JSX.Element;
  para4: JSX.Element;
  img: string;
}
const Pages = () => {
  


  const service: Service[] = [
    {
      route: "/consulting",
      heading: "Business strategy Consultation",
      para1: (
        <>
          A robust business strategy is the cornerstone of sustainable growth.
          To achieve this, businesses need keen insights and a well-defined
          strategic roadmap. This is where an experienced business consulting
          firm, WBC adds immense value.
          <br />
        </>
      ),
      para2: (
        <>
          At WBC, we provide expertise to address critical Business Management
          challenges. These include areas like Strategic Direction for Sales &
          Marketing, Business Planning for growth & diversification,
          Organization & Operational Efficiency and multiple Sales Channel
          strategy among others.
          <br />
        </>
      ),
      para3: (
        <>
          We prioritize delivering customized, innovative solutions to drive our
          clients' growth. Our distinctive approach sets us apart; rather than
          relying on generic strategies, we craft tailored plans to ensure our
          clients reach their goals. We guarantee success through:
          <br />
        </>
      ),
      para4: (
        <>
          • Data-Driven, ROI-Focused Strategies
          <br />
          • Proven Results Across Multiple segments
          <br />
          • Reliable Customer Support
          <br />
          • With our bespoke strategies, we empower your business to achieve
          exceptional outcomes.
          <br />
        </>
      ),
      img: businessImg,
    },
    {
      route: "/coaching",
      heading: "Coaching & Mentoring for Startups & SMEs",
      para1: (
        <>
          In the ever changing dynamic business environment, WBC offers
          personalized Business Coaching & Mentoring to Start-up Founders, SME,
          and Indivuals. Our expert coaches’ hand holds you to skillfully
          navigate through all the business requirements.
          <br />
        </>
      ),
      para2: (
        <>
          Coaching focuses on enhancing the performance and development of the
          business leaders by helping them in :
          <br />
          • Goal Setting, Skill Development
          <br />
          • Accountability & Problem Solving
          <br />
          • Continuous Performance Improvement
          <br />
        </>
      ),
      para3: (
        <>
          Mentoring involves providing advice and sharing knowledge
          <br />
          • Experience Sharing & Networking
          <br />
          • Strategic Advice & Support
          <br />• Long-Term Development
        </>
      ),
      para4: (
        <>
          Overall, coaching and mentoring provide startups and SMEs with the
          necessary tools, knowledge, and support to navigate the complexities
          of business growth and achieve long-term success.
        </>
      ),
      img: coachingImg,
    },
    {
      route: "/financial",
      heading: "Financial Management Consultancy",
      para1: (
        <>
          We have one-stop solution for all your financial needs, offering asset
          management and financial advice with a PAN India presence. Trust us to
          handle your money matters while you focus on what matters most.
          <br />
        </>
      ),
      para2: (
        <>
          We recognize the individuality of each borrower's needs. This is why
          we provide a wide array of loan options tailored to diverse financial
          requirements. Our goal is to support you in accomplishing your
          objectives, whether you're looking to buy a new vehicle, launch a
          business, or enhance your existing work.
          <br />
        </>
      ),
      para3: (
        <> "Customized Financial Solutions for Loan, Insurance & Investment"</>
      ),
      para4: <></>,
      img: financialImg,
    },
    {
      route: "/marketing",
      heading: "Marketing & Sales Consultation",
      para1: (
        <>
          The GTM strategy specifies marketing tactics and channels for each
          segment. Digital channels such as paid search, social media,
          email/WhatsApp, and websites are effective for generating awareness.
          Public relations and influencer marketing can also help. Offline
          channels like events, trade shows, and partnerships may complement
          digital efforts, especially for B2B & B2G products.
          <br />
        </>
      ),
      para2: (
        <>
          <ul>
            <li>• Complete Brand Strategy consulting</li>
            <li>• Digital Strategy consulting</li>
            <li>• Media Buying & Public Relation management</li>
            <li>• Celebrity management & Integration</li>
            <li>• GTM Strategy Designing</li>
          </ul>
        </>
      ),
      para3: <></>,
      para4: <></>,
      img:marketingImg,
    },
    {
      route: "/corporate",
      heading: "Corporate Training & Skill Enhancement",
      para1: (
        <>
          Our training wing takes care of designing, delivering, and managing
          quality learning. We have a flexible approach and strong influencing
          skills. We offer world-class training programs to individuals and
          organizations to enhance their productivity, identify their potential,
          and accelerate their overall performance. We focus on customizing
          learning programs to the requirements of individual organizations. Our
          modules are based on skill, knowledge, attitude, approach, motivation,
          strategy, creative, and innovation. All these are delivered through
          classroom sessions, game activities, and outbound experiments.
          <br />
        </>
      ),
      para3: <></>,
      para4: <></>,
      para2: <></>,
      img: corporateImg,
    },
    {
      route: "/b2b",
      heading: "B2B & B2G Sales Strategy",
      para1: (
        <>
          B2G sales strategy focuses on cultivating relationships and providing
          tailored solutions to government agencies, ensuring compliance and
          meeting public sector needs efficiently. It involves understanding
          government procurement processes and offering value-added services to
          secure contracts and partnerships in all models.
          <br />
          <br />
          Our B2B sales strategy focuses on Corporate houses & Pharmaceutical
          industry to provide better BTL strategy to drive engagement with
          targeted segments.
          <br />
          <ul>
            <li>
              <br />
              <b> CAPEX – </b>Our medical equipment sales model operates on a
              capex, providing long-term investment solutions for businesses
              seeking to enhance their medical infrastructure to provide better
              healthcare facility to patients.
            </li>
            <li>
              <br />
              <b> OPEX - </b> Our health screening model for the pharmaceutical
              industry is driving customer engagement ensuring personalized
              interactions and seamless experiences, fostering strong
              connections and loyalty.
            </li>
          </ul>
        </>
      ),
      para3: <></>,
      para4: <></>,
      para2: <></>,
      img:b2bImg,
    },
    {
      route: "/retainership",
      heading: "Retainership Commitment",
      para1: (
        <>
          We provide retainer services tailored for small and medium-sized
          industries, offering expert assistance for specified hours per month
          at the client's location to implement ongoing processes and work. This
          flexible model allows clients to structure our services according to
          their needs and budgets into a comprehensive package.
          <br />
          <br />
          At WBC, we value the significance of thorough research and actionable
          insights, recognizing their pivotal role in crafting impeccable
          solutions. Our team of experts excels in analyzing customer behavior,
          industry trends, and key demand drivers to identify opportunities and
          mitigate risks effectively. We closely monitor competitors to stay
          ahead in the market.
        </>
      ),

      para3: <></>,
      para4: <></>,
      para2: <></>,
      img: retainerImg,
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="lg:block hidden">
        <BannerHome />
      </div>
      <SideNav isNavOpen={isNavOpen} toggleNav={toggleNav} />

      <div
        className={`transition-all duration-300 ${
          isNavOpen ? "ml-64" : "ml-0"
        } lg:ml-[17rem] overflow-hidden`}
      >
        <Routes>
          <Route path="*" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/segmentsweserve" element={<SegmentsWeServe />} />
          <Route path="/continuouslearning" element={<ContinuousLearning />} />
          <Route path="/letsconnect" element={<LetsConnect />} />
          <Route path="/blogPage/:id" element={<SingleBlog />} />

          {service.map((item, index) => (
            <Route
              key={index}
              path={item.route}
              element={
                <SingleService
                  para1={item.para1}
                  para2={item.para2}
                  para3={item.para3}
                  para4={item.para4}
                  heading={item.heading}
                  img={item.img}
                />
              }
            />
          ))}
        </Routes>
      </div>
    </>
  );
};

export default Pages;
