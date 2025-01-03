import "./index.css";
import Navebar from "./components/navebar";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import AboutOutlet from "./components/AboutOutlet";
import { Photos } from "./constants/index.js";
import ContactOutlet from "./components/ContactOutlet";
import CoadingSkills from "./components/CoadingSkills.jsx";
import Gallery from "./components/Gallery.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import ProffesionalSkills from "./components/ProffesionalSkills.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navebar />
              
     {/* <Gallery/> */}

        <Routes>
          <Route path="/Home" element={<Hero />} />
          <Route path="/About" element={<AboutOutlet />} />
          <Route path="/Contact" element={<ContactOutlet />} />
          <Route path="/Project" element={<CoadingSkills />} />
          <Route path="/" element={<Hero/>}/>
          <Route path="/gallery" elements={<Gallery/>}/>
        </Routes>
        {/* <Hero/>
        <AboutOutlet />
        <CoadingSkills />
        <ProffesionalSkills />

        <ContactOutlet /> */}
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

{
  /* <BrowserRouter>
<Navbar/>
  <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/ContactOutlet' element={<ContactOutlet/>}/>
    <Route path='/AboutOutlet' element={<AboutOutlet/>}/>
  </Routes>
    </BrowserRouter>
 <Footer/> */
}
