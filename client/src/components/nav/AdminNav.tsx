import React from "react";
import { useNavigate } from "react-router-dom";

const AdminNav = () => {

  const navigate = useNavigate();

  return (
    <header className="h-16 flex justify-between portrait:px-4 sm:px-16 bg-black items-center">
      <h1 className="text-white font-semibold capitalize text-lg sm:text-sm portrait:text-xs">Walnut Admin</h1>
      <nav className="flex gap-2 text-base portrait:text-xs sm:gap-4 text-white">
        <button className="hover:underline" onClick={()=> navigate(`/admin-page`)}>Home</button>
        <button className="hover:underline" onClick={()=> navigate(`/admin/create`)}>Create</button>
        <button className="hover:underline" >Logout</button>
      </nav>
    </header>
  );
};

export default AdminNav;
