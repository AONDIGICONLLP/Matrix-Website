import React from 'react';
import Header from '../Components/MainHeader';
import Hero from '../Components/Hero';
import About from '../Components/AboutSection';
import Category from '../Components/ProductCategory';
import CeoMessage from '../Components/CeoMessage';
import Team from '../Components/TeamProfile';
import Services from '../Components/OurServices';
import Contactus from '../Components/ContactDetails';
import Counter from '../Components/Counter';
import Products from '../Components/TopProducts';
import Footer from '../Components/Footer';

const Home: React.FC = () => {
return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Category />
        <Counter/>
        <CeoMessage />
        <Products/>
        <Team />
        <Services />
        <Contactus />
      </main>
      <Footer />
    </div>
  );

}
export default Home;