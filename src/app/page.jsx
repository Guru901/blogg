import React from "react";
import "./page.css";
import Blogs from "@/components/BlogCard/Blogs";

const Home = () => {
  return (
    <div>
      <div className="absolute-center">
        <div id="main-card" className="absolute-center">
          <img src="/images/home/flowwwr.png" alt="" />
          <div className="main-text">
            <h1>A Personal Blogging Website</h1>
          </div>
        </div>
      </div>
      <div id="main-body" className="absolute-center">
        <div id="head-blog">
          <h1>Some Blogs......</h1>
          <a href="#">
            <h2>See More</h2>
          </a>
        </div>
        <div id="blog-chart" className="absolute-center">
          <div id="card-row-right" className="absolute-center">
            <Blogs />
          </div>
          {/* <div id="card-row-left" className="absolute-center">
            <div className="card-left card">
              <a href="#">
                <img src="/images/home/card-left.png" alt="" />
                <h1>Some..........................</h1>
                <h2>Anyyyyyyyyyyyyyyyyyyyyyy</h2>
              </a>
            </div>
            <div className="card-left card">
              <a href="#">
                <img src="/images/home/card-left.png" alt="" />
                <h1>Some..........................</h1>
                <h2>Anyyyyyyyyyyyyyyyyyyyyyy</h2>
              </a>
            </div>
            <div className="card-left card">
              <a href="#">
                <img src="/images/home/card-left.png" alt="" />
                <h1>Some..........................</h1>
                <h2>Anyyyyyyyyyyyyyyyyyyyyyy</h2>
              </a>
            </div>
            <div className="card-left card">
              <a href="#">
                <img src="/images/home/card-left.png" alt="" />
                <h1>Some..........................</h1>
                <h2>Anyyyyyyyyyyyyyyyyyyyyyy</h2>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
