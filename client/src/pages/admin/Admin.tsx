import Card from "../../components/blog/card";
import AdminNav from "../../components/nav/AdminNav";
import { useEffect, useState } from "react";

const Admin = () => {
  interface dataInter {
    _id: string;
    title: string;
    poster: string;
    summary: string;
    auther: {
      id: string;
      name: string;
    };
  }
  const [data, setData] = useState<dataInter[]>();

  const getData = async () => {
    const res = await fetch("/api/blog/all");
    const { blog } = await res.json();

    setData(blog);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AdminNav />

      <div className="flex flex-wrap flex-row gap-6 px-6 mb-24 sm:ml-6 lg:ml-16 mt-5">
        {data?.map((data) => (
          <Card
            id={String(data?._id)}
            img={String(data?.poster)}
            title={String(data?.title)}
            description={String(data?.summary)}
            auther={String(data?.auther.name)}
            date="15/02/2023"
          />
        ))}
      </div>
    </>
  );
};

export default Admin;
