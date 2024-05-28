import { Route, Routes } from "react-router-dom";
import Pages from "./pages/PageWithSideNav/Pages";
import Login from "./pages/admin/Login";
import Admin from "./pages/admin/Admin";
import Create from "./pages/blog/Create";
import Blog from "./pages/blog/Blog";
import Edit from "./pages/blog/Edit";
import HomePage from "./pages/home/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus/*" element={<Pages />} />
      <Route path="/admin" element={<Login />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/admin-page" element={<Admin />} />
      <Route path="/admin/create" element={<Create />} />
    </Routes>
  );
};

export default App;
