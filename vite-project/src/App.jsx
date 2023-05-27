import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Monparcours from './components/Monparcours';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FeedbackCard from './components/FeedbackCard';
import Competence from './components/Competence';

function App() {
  return (
    <div className="text-white bg-black App">
      <div className="container px-4 mx-auto">
        <Navbar />
        <About />
        <Home />
        <FeedbackCard />
        <Monparcours/>
        <Competence />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
