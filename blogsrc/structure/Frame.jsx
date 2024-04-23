import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../page/HomePage";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import MyForm from "../components/MyForm";
import TommyOne from "../components/TommyOne";
import TommyTwo from "../components/TommyTwo";
import BlogTwo from "../components/BlogTwo";
import BlogThree from "../components/BlogThree";


const Frame = () => {
  return (
    <div>
      <ToastContainer/>

      <BrowserRouter>


        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<MyForm />} path="/myform"/>
          <Route element={<Blog />} path="/myblog"/>
          <Route element={<BlogTwo />} path="/blogOne"/>
          <Route element={<BlogThree />} path="/blogTwo"/>
        </Routes>

      </BrowserRouter>

      <Footer/>

      {/* <BlogPage /> */}
    </div>
  );
};

export default Frame;
