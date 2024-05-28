import React, { useState } from "react";

const LetsConnect: React.FC = () => {
  const [quotationData, setQuotationData] = useState({
    name: "",
    designation: "",
    organization: "",
    officeAddress: "",
    city: "",
    email: "",
    telephone: "",
    mobile: "",
    professionalUpdates: "",
    querySubject: "",
    query: "",
  });

  const [careerData, setCareerData] = useState({
    lastName: "",
    firstName: "",
    name: "",
    email: "",
    mobile: "",
    phone: "",
    gender: "",
    position: "",
    dob: "",
    qualification: "",
    experience: "",
    lastCompany: "",
    resume: null,
    comments: "",
  });

  const handleQuotationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setQuotationData({ ...quotationData, [e.target.name]: e.target.value });
  };

  const handleCareerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.type === "file") {
      setCareerData({
        ...careerData,
        [e.target.name]: (e.target as HTMLInputElement).files?.[0] || null,
      });
    } else {
      setCareerData({ ...careerData, [e.target.name]: e.target.value });
    }
  };

  const handleQuotationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(quotationData);
  };

  const handleCareerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(careerData);
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center">
        <div className="lg:w-1/2 md:w-1/2 w-full h-96 p-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4499.272330367459!2d73.8062409050888!3d18.509823816469652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb747a285b1%3A0x5bfc155715f483cf!2sVanaz!5e0!3m2!1sen!2sin!4v1716536721545!5m2!1sen!2sin"
            width="100%"
            height="600" // Increased height here
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="lg:w-1/2 md:w-1/2 w-full p-10">
          <div className="text-gray-700">
            <h2 className="text-xl font-semibold mb-2">Office Address</h2>
            <p className="mb-1">Walnut Business Consultant</p>
            <p className="mb-1">S.No- 133, 02-Rahi Sakha Apartment,</p>
            <p className="mb-1">Chaitanya Hospital Bldg., Pune 411030.</p>
            <p className="mb-1">
              Phone:{" "}
              <a href="tel:+918956127699" className="text-indigo-500">
                +91-8956127699
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:Info@WBCI.com" className="text-indigo-500">
                Info@WBCI.com
              </a>
            </p>
          </div>
        </div>
        <div className=" bg-white flex flex-col py-8 ">
          <h2 className="text-gray-900 text-lg mb-1 font-bold title-font text-center">
            Request for Quotation
          </h2>
          <form
            onSubmit={handleQuotationSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center"
          >
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={quotationData.name}
                onChange={handleQuotationChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="designation"
                className="leading-7 text-sm text-gray-600"
              >
                Designation
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={quotationData.designation}
                onChange={handleQuotationChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="organization"
                className="leading-7 text-sm text-gray-600"
              >
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={quotationData.organization}
                onChange={handleQuotationChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="officeAddress"
                className="leading-7 text-sm text-gray-600"
              >
                Office Address
              </label>
              <input
                type="text"
                id="officeAddress"
                name="officeAddress"
                value={quotationData.officeAddress}
                onChange={handleQuotationChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={quotationData.city}
                onChange={handleQuotationChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={quotationData.email}
                onChange={handleQuotationChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="telephone"
                className="leading-7 text-sm text-gray-600"
              >
                Telephone No
              </label>
              <input
                type="text"
                id="telephone"
                name="telephone"
                value={quotationData.telephone}
                onChange={handleQuotationChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="mobile"
                className="leading-7 text-sm text-gray-600"
              >
                Mobile
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={quotationData.mobile}
                onChange={handleQuotationChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 col-span-2">
              <label
                htmlFor="professionalUpdates"
                className="leading-7 text-sm text-gray-600"
              >
                Other professional updates*
              </label>
              <textarea
                id="professionalUpdates"
                name="professionalUpdates"
                value={quotationData.professionalUpdates}
                onChange={handleQuotationChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div className="relative mb-4 col-span-2">
              <label
                htmlFor="querySubject"
                className="leading-7 text-sm text-gray-600"
              >
                Subject of Query*
              </label>
              <input
                type="text"
                id="querySubject"
                name="querySubject"
                value={quotationData.querySubject}
                onChange={handleQuotationChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 col-span-2">
              <label
                htmlFor="query"
                className="leading-7 text-sm text-gray-600"
              >
                Query
              </label>
              <textarea
                id="query"
                name="query"
                value={quotationData.query}
                onChange={handleQuotationChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg col-span-2"
            >
              Submit
            </button>
          </form>
          <h2 className="text-gray-900 text-lg mb-1 font-bold title-font mt-8 text-center">
            Careers
          </h2>
          <form
            onSubmit={handleCareerSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center"
          >
            <div className="relative mb-4">
              <label
                htmlFor="lastName"
                className="leading-7 text-sm text-gray-600"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={careerData.lastName}
                onChange={handleCareerChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="firstName"
                className="leading-7 text-sm text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={careerData.firstName}
                onChange={handleCareerChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={careerData.name}
                onChange={handleCareerChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={careerData.email}
                onChange={handleCareerChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="mobile"
                className="leading-7 text-sm text-gray-600"
              >
                Mobile No
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={careerData.mobile}
                onChange={handleCareerChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={careerData.phone}
                onChange={handleCareerChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="gender"
                className="leading-7 text-sm text-gray-600"
              >
                Gender
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={careerData.gender}
                onChange={handleCareerChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="position"
                className="leading-7 text-sm text-gray-600"
              >
                Position you are applying for
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={careerData.position}
                onChange={handleCareerChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="dob" className="leading-7 text-sm text-gray-600">
                Date of Birth
              </label>
              <input
                type="text"
                id="dob"
                name="dob"
                placeholder="dd-mm-yyyy"
                value={careerData.dob}
                onChange={handleCareerChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="qualification"
                className="leading-7 text-sm text-gray-600"
              >
                Highest Qualification
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                value={careerData.qualification}
                onChange={handleCareerChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="experience"
                className="leading-7 text-sm text-gray-600"
              >
                Year Of Experience
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                placeholder="Ex: 3 Year 1 Month"
                value={careerData.experience}
                onChange={handleCareerChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="lastCompany"
                className="leading-7 text-sm text-gray-600"
              >
                Last company you worked for
              </label>
              <input
                type="text"
                id="lastCompany"
                name="lastCompany"
                value={careerData.lastCompany}
                onChange={handleCareerChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition
                -colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="resume"
                className="leading-7 text-sm text-gray-600"
              >
                Upload Resume
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleCareerChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 col-span-2">
              <label
                htmlFor="comments"
                className="leading-7 text-sm text-gray-600"
              >
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                value={careerData.comments}
                onChange={handleCareerChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg col-span-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;
