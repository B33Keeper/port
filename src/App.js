import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Mission from './components/Mission';
import Footer from './components/Footer';
import TeamMembers from './pages/TeamMembers';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import TeamMember from './pages/TeamMember';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Team />
              <Mission />
            </>
          } />
          <Route path="/team-members" element={<TeamMembers />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/team-member" element={<TeamMember />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
