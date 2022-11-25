import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/about"
          render={() => (
            <>
              <About />
            </>
          )}
        />
        {/*
        <Navigation></Navigation>
        <Project></Project>
          <Footer></Footer> */}
      </Routes>
    </Router>
  );
}

export default App;
