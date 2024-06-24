import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import LowIqSpam from './pages/LowIqSpam';
import SectionPage from './pages/SectionPage';
import './styles.css';

function App() {
  return (
    <div className="page-wrap">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lowiqspam" element={<LowIqSpam />} />
        <Route path="/section/:sectionId" element={<SectionPage />} />
      </Routes>
    </div>
  );
}

export default App;
