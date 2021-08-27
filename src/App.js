import { useState } from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import GlobalStyle from "./globalStyles";
import { SliderData } from './Data/SliderData.js';
import Dropdown from "./Components/Dropdown";
import InfoSection from "./Components/InfoSection";
import {infoData} from './Data/infoData'


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero Slides={SliderData} />
      <InfoSection {...infoData}/>
    </>
  );
}

export default App;
