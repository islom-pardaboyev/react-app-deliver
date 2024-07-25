import "./App.css";
import BrowserSection from "./components/BrowserSection/BrowserSection";
import BrowserSection2 from "./components/BrowserSection2/BrowserSection2";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Aos from "aos";
import 'aos/dist/aos.css'

const App = () => {
  Aos.init()
  return (
    <>
      <Header />
      <BrowserSection />
      <BrowserSection2/>
      <Footer/>
    </>
  );
};

export default App;
