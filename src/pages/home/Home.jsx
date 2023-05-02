import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Sidebar from "./Sidebar/Sidebar";
import RightSide from "./RightComponent/RightSide";
import Feeds from "./Feeds/Feeds";
import Tweet from "./Tweet/Tweet";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loginSuccesss = JSON.parse(localStorage.getItem("login-success"));

    if (!loginSuccesss) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="home_main">
      <div className="home_leftSide">
        <Sidebar />
      </div>
      <div className="home_main_container">
        {/* TOPBAR of Home page */}
        <section className="home_topbar_section">
          <h2>Home</h2>
          <div className="home_topbar_innerDiv">
            <div>
              <span>For you</span>
            </div>
            <div>
              <span>Following</span>
            </div>
          </div>
        </section>
        <div className="tweet">
          <Tweet />
        </div>
        <Feeds />
      </div>
      <div className="trend">
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
