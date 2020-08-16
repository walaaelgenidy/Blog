import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Category = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <Posts />
            <Sidebar />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Category;
