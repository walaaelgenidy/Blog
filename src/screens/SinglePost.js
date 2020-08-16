import React from "react";
import Header from "../components/Header";
import PostDesc from "../components/PostDesc";
import Comment from "../components/Comment";
import Footer from "../components/Footer";

const SinglePost = () => {
  return (
    <>
      <Header />
      <div className="single-post no-sidebar">
        <PostDesc />
        <Comment />
      </div>
      <Footer />
    </>
  );
};

export default SinglePost;
