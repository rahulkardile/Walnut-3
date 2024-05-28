import React from "react";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";

interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  auther: string;
  img: string;
}

const card = ({ title, auther, date, description, img, id }: Blog) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Navigation = useNavigate();
  const NoImg =
  "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";

  return (
    <section className="flex gap-2 hover:cursor-pointer justify-center items-start m-auto  sm:gap-4 p-2 sm:p-2 flex-col portrait:items-center sm:flex-row border rounded-lg border-black overflow-hidden">

      <CiEdit
        className="relative portrait:left-[45%] -top-0 left-[94%] lg:-top-16 sm:-top-4 sm:left-[96%] cursor-pointer portrait:w-[50px] md:-top-16 md:left-[93%] w-[200px] lg:w-[140px] sm:w-[300px]  h-[27px]font-extrabold duration-300 hover:text-blue-800 hover:scale-125"
        onClick={() => Navigation(`/edit/${id}`)}
      />

      <img
        onClick={() => Navigation(`/blog/${id}`)}
        className="bg-red-200 w-96 sm:w-[299px] rounded-md object-contain hover:scale-105 duration-500"
        src={img}
        onError={((e)=> 
        e.currentTarget.src = NoImg)}
        alt="img"
      />

      <div className="p-3">
        <h2
          onClick={() => Navigation(`/blog/${id}`)}
          className="text-xs portrait:text-base portrait:text-center font-semibold"
        >
          {title}
        </h2>
        <div className="text-xs flex flex-row gap-2 mt-1 portrait:text-center">
          <span className="font-bold">{auther}</span>
          <span className="font-semibold">{date}</span>
        </div>

        <p className="text-xs line-clamp-4 mt-2">{description}</p>
      </div>
    </section>
  );
};

export default card;
