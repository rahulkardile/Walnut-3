import Team from "../team/Team"

const About = () => {
  return (

    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-center text-gray-900">Who are we ?
          </h1>
          <p className="mb-2 leading-relaxed">Welcome to Walnut Business Consultants, Experience the fusion of passion and expertise. Our services are tailored for the ambitious, addressing the distinct needs of Small and Medium Business owners, Early-stage Startups, and seasoned Business Executives.</p>
          <p className="mb-2 leading-relaxed">Our Consulting Solutions transcend the ordinary. Through close collaboration, we reshape your venture into a purpose-driven organization championing excellence, sustainable growth, and adaptability in today's dynamic market.</p>
          <p className="mb-2 leading-relaxed">Our Coaching & Mentoring Programs are tailored for modern age leaders. Recognizing the multifaceted roles you undertake, our program empowers forward-thinking Business Owners, Founders, or Corporate Executives with insights and skills to lead with clarity, manage with precision, and excel with distinction.</p>
          <p className="mb-2 leading-relaxed">We're a team of dedicated professionals committed to driving Strategic Performance Improvement within your organization. Our creative management consulting firm specializes in enhancing Strategic Focus, People Performance, and Motivation to achieve superior business outcomes. Experience the difference with Walnut Business Consultants, where our collaborative approach ensures a rewarding experience for both our clients and our team."</p>
          <p className="mb-2 leading-relaxed">Whether you're venturing into new markets, revitalizing your brand, or innovating new products and services, our market intelligence provides the foresight necessary to drive sustainable growth and success. </p>
          <p className="mb-3 font-bold leading-relaxed">"Empower your leadership and team to make informed strategic decisions with our actionable insights into the demand landscape.” </p>
          {/* <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
          </div> */}
        </div>
      </div>
      <Team />
    </section>
  )
}

export default About