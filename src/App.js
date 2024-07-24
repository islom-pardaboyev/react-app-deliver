import "./App.css";
import BrowserSection from "./components/BrowserSection/BrowserSection";
import Header from "./components/Header/Header";
import Aos from "aos";
import 'aos/dist/aos.css'

const App = () => {
  Aos.init()
  return (
    <>
      <Header />
      <BrowserSection />
    </>
  );
};

export default App;
