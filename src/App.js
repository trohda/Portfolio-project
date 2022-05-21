import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import "./AppStyle.css";
import { useEffect, useState } from "react";

function App() {
  //MOBILE DETECTORS
  // var viewportWidthOnStart = window.innerWidth < 700 ? "Mobile" : "Desktop";
  // const [windowWidth, setWindowWidth] = useState(viewportWidthOnStart);
  // console.log(windowWidth);
  // window.addEventListener("resize", function () {
  //   var viewportWidth = window.innerWidth;
  //   console.log(typeof windowWidth);
  // });

  return (
    <div className="underConstruction">
      {/* <span>Site is under construction</span> */}
      <BrowserRouter>
        <Header />
        <div className="down">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
