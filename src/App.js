import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import About from './components/pages/About';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPage, handlePageChange] = useState('home');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Home') {
      return <Home />;
    }
    return <Home />;
  };
  return (
    <>
      <title>Joseph Lara's Portfolio | {currentPage}</title>
      <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column">
        <div>
          <Header
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
        <div className="page-content">{renderPage()}</div>
      </div>
    </>
  );
}

export default App;
