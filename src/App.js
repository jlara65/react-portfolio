import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import Footer from './components/Footer';
import About from './components/pages/About';

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Joseph Lara's Portfolio</title>
        </Helmet>
        <Header></Header>
        <Footer></Footer>
      </HelmetProvider>
    </>
  );
}

export default App;
