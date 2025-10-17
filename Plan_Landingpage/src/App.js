import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Menu,
  Hero,
  Services,
  Destinations,
  BookTrip,
  Testimonials,
  Logos,
  Subscribe,
  Footer,
} from "./components";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Menu />
      <Hero />
      <Services />
      <Destinations />
      <BookTrip />
      <Testimonials />
      <Logos />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
