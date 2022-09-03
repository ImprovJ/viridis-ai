import React from "react";
import NavBar from "../components/NavBar";
import sectionObjects from "../utlities/sectionObjects";
import { Link } from "react-router-dom";
import NavBarMobile from "../components/NavBarMobile";

function Home() {
  return (
    <>
      <div className="page-wrap">
        <NavBar></NavBar>
        <NavBarMobile></NavBarMobile>
        <div className="home-wrap">
          <div className="sections-wrap">
            {sectionObjects.map((e, i) => {
              return (
                <Link to={e.path}>
                  <div className="section-item">
                    <img alt="" className="section-item-img" src={e.img}></img>
                    <h1 className="section-item-title">{e.title}</h1>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
