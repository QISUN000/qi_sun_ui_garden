import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Resources from './pages/Resources';
import DevSetup from './pages/DevSetup';
import NailSalonProject from './pages/NailSalonProject';
import JobBoardProject from './pages/JobBoardProject';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/dev-setup" element={<DevSetup />} />
          <Route path="/projects/nail-salon-booking" element={<NailSalonProject />} />
          <Route path="/projects/job-board-platform" element={<JobBoardProject />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
