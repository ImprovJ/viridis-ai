import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import NavBarMobile from "../../components/NavBarMobile";
import LogosBlog1 from "../../components/sections/Logos/LogosBlog1";
import LogosBlog2 from "../../components/sections/Logos/LogosBlog2";

function Logos() {
  const [showBlog1, setShowBlog1] = useState(true);
  const [showBlog2, setShowBlog2] = useState(false);

  const handleBlog1Display = () => {
    if (!showBlog1) {
      setShowBlog2(false);
      setShowBlog1(true);
    }
  };

  const handleBlog2Display = () => {
    if (!showBlog2) {
      setShowBlog1(false);
      setShowBlog2(true);
    }
  };
  return (
    <>
      <NavBar />
      <NavBarMobile></NavBarMobile>
      <div className="section-wrap">
        <h1 className="section-title">Logos</h1>
        <div className="section-main">
          <div className="section-nav">
            <p className="section-nav-link" onClick={handleBlog1Display}>
              Blog 1
            </p>
            <p className="section-nav-link" onClick={handleBlog2Display}>
              Blog 2
            </p>
          </div>
          <div className="section-content-wrap">
            {showBlog1 ? <LogosBlog1></LogosBlog1> : <LogosBlog2></LogosBlog2>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Logos;
