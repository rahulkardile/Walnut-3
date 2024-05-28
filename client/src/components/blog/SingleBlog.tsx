import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContinuousLearning from "../ContinuousLearning/ContinuousLearning";

const SingleBlog = () => {
  type BlogType = {
    _id: string;
    title: string;
    MainPoster: string;
    summary: string;
    description: string;
    auther: {
      id: string;
      name: string;
    };
  };

  const { id } = useParams();
  const [blogData, setBlogData] = useState<BlogType>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/blog/get/${id}`);
      const { data, message, success } = response.data;

      if (success) {
        setBlogData(data);
      } else {
        setErrorMessage(message);
      }
    } catch (error) {
      setErrorMessage(error as string);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src={blogData?.MainPoster}
              onError={(e) => {e.currentTarget.src = 'https://dummyimage.com/721x401'}}
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {blogData?.title ?? ''}
              </h1>
              <p className="mb-8 leading-relaxed">
              <div className="w-full flex flex-col gap-2 px-11 mb-16 items-center portrait:px-3 portrait:ml-2 m-auto h-auto"
            dangerouslySetInnerHTML={{ __html: blogData?.description ?? ''}}></div>
              </p>
            </div>
              <ContinuousLearning />
          </div>
        </section>
      )}
    </div>
  );
};

export default SingleBlog;
