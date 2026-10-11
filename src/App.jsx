import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Rooms from "./components/Rooms/Rooms";
import Amenities from "./components/Amenities/Amenities";
import Gallery from "./components/Gallery/Gallery";
import Videos from "./components/Videos/Videos";
import Location from "./components/Location/Location";
import Enquiry from "./components/Enquiry/Enquiry";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery /> 
        <Videos />
        <Location />
        <Enquiry />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;
