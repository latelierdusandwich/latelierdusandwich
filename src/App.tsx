import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <>
          <Header />
          <Hero />
          <About />
          <Menu />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;