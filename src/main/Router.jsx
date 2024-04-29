import React from "react";
// Import Component From React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import Pages
import Navbar from "../components/NavBar";
import PageComponent from "../pages/Home.jsx";
import Projects from "../pages/Projects.jsx";
import News from "../pages/News.jsx";
import About from "../pages/About.jsx";
import Donate from "../pages/Donate.jsx";
import ContactPage from "../pages/Contact.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

function RouterPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<PageComponent />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<Donate />} />
        </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPages;
