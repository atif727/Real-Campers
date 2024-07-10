import "./App.css";
import Navbar from "./components/services/Navbar";
import Banner from "./components/services/Banner/Banner";
import Companies from "./components/services/Companies/Companies";
import Footer from "./components/services/Footer/Footer";
import Contact from "./components/services/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <p className="mt-12 mb-6 text-center text-4xl">Companies Available</p>
      <Companies />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
