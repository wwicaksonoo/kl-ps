import { useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AppRouter from "./Routing";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/scroll";



export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,        
      easing: "ease-out",   
      once: false,           
      offset: 80,           
    });
  }, []);



  return (
    <>
      <Navbar />
        <ScrollToTop/> 
      <AppRouter />

      <Footer />
    </>
  );
}
