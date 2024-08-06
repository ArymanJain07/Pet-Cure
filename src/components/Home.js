import React from 'react'
import About from './About';
import FindVet from './FindVet';
import Mission from './Mission';
import Review from './Review';
import Footer from './Footer';
import NavBar from './NavBar';

const Home = () => {
  return (
    <>
    <NavBar />
      <section className="home" id="home">
        <div className="content">
          <h3>
          Your <span>Pet's Health, </span>Our Priority
          </h3>
          <p>
          Welcome to PetCure, connecting pet owners with trusted veterinarians for comprehensive, reliable pet care.
          </p>
          <a href="#" className="btn">
            Find your Vet
          </a>
        </div>
      </section>
      <About />
      <FindVet />
      <Mission />
      <Review />
      <Footer />
      
    </>
  )
};

export default Home
