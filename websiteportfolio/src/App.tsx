import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGitHubPagesRouter } from './utils/router';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Connect from './pages/Connect';
import Experience from './pages/Experience';

function App() {
  useGitHubPagesRouter();
  
  return (
    <Router basename="/portfolio">
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;