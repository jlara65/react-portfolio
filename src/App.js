import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import Footer from './components/Footer';
import About from './components/pages/About';

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
      <HelmetProvider>
        <Helmet>
          <title>Joseph Lara's Portfolio</title>
        </Helmet>
        <Header
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        ></Header>
        <main>{renderPage()}</main>
        <Footer></Footer>
      </HelmetProvider>
    </>
  );
}

export default App;
