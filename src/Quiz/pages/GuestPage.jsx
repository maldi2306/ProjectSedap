import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import CekAnggota from "../components/CekAnggota";  

export default function GuestPage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Testimonials />
        <CekAnggota />  
      <Footer />
    </>
  );
}
