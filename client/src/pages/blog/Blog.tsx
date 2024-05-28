import { useEffect, useState } from "react";
import { BlogType } from "../../typescript/res";
import { useParams } from "react-router-dom";
import AdminNav from "../../components/nav/AdminNav";

const Blog = () => {
  const [data, setData] = useState<BlogType>();

  const { id } = useParams();
  const img =
    "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";

  const GetData = async () => {
    const res = await fetch(`/api/blog/get/${id}`);
    const { data, success } = await res.json();

    if (success) {
      setData(data);
    } else {
      console.log("Check internet connection!");
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <AdminNav />
      <section className="w-screen h-auto flex flex-col justify-center gap-4 items-center">
        {data?.title ? (
          <>
            <div className="w-[70%] portrait:w-screen portrait:p-3 overflow-hidden flex gap-6 justify-center items-center flex-col h-auto portrait:mt-4 mt-16">
              <h1 className="text-3xl text-center h-auto items-cente font-bold mb-4">
                {data.title}
              </h1>

              <img
                src={`${data?.MainPoster}`}
                onError={(e) => {
                  e.currentTarget.src = img;
                }}
                className="w-[85%] portrait:w-full h-auto m-auto portrait:object-contain object-cover"
                alt="img"
              />
              <div className="flex flex-row gap-3">
                <span className="font-semibold">{data.auther.name}</span>
                <span className="">20/3/2022</span>
              </div>
            </div>
            <div
              className="w-full flex flex-col gap-2 px-11 mb-16 items-center portrait:px-3 portrait:ml-2 m-auto h-auto"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />{" "}
          </>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default Blog;
