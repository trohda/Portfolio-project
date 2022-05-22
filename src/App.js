import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import "./AppStyle.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("MainPage");
  //MOBILE DETECTORS
  // var viewportWidthOnStart = window.innerWidth < 700 ? "Mobile" : "Desktop";
  // const [windowWidth, setWindowWidth] = useState(viewportWidthOnStart);
  // console.log(windowWidth);
  // window.addEventListener("resize", function () {
  //   var viewportWidth = window.innerWidth;
  //   console.log(typeof windowWidth);
  // });
  console.log(currentPage);
  return (
    <div>
      {/* <div className="underConstruction">
        <span className="span1">Site</span>
        <br />
        <span className="span2">is</span>
        <br />
        <span className="span3">under</span>
        <br />
        <span className="span4">construction</span>
      </div> */}

      <BrowserRouter>
        <Header />
        <div className={currentPage}>
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
