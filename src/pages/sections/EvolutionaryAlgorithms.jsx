import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import NavBarMobile from "../../components/NavBarMobile";
import EvAlgorithmsBlog1 from "../../components/sections/Evolutionary Algorithms/EvAlgorithmsBlog1";
import EvAlgorithmsBlog2 from "../../components/sections/Evolutionary Algorithms/EvAlgorithmsBlog2";

function EvolutionaryAlgorithms() {
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
        <h3 className="section-title">Evolutionary Algorithms</h3>
        <div className="section-main">
          <div className="section-nav">
            <p className="section-nav-link" onClick={handleBlog1Display}>
              Intro
            </p>
            <p className="section-nav-link" onClick={handleBlog2Display}>
              Thesis
            </p>
          </div>
          <div className="section-content-wrap">
            {showBlog1 ? (
              <EvAlgorithmsBlog1></EvAlgorithmsBlog1>
            ) : (
              <EvAlgorithmsBlog2></EvAlgorithmsBlog2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EvolutionaryAlgorithms;
