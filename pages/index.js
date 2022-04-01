import Head from 'next/head';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Experience from '../Components/Experience';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Portfolio from '../Components/Portfolio';
import Services from '../Components/Services';
import Testionials from '../Components/Testionials';
const index = () => {
  return (
    <>
      <Head>
        <title>Arnab Saha</title>
      </Head>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testionials/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default index;