import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import ProjectsList from "./components/Projects/ProjectsList";
import "./AppStyle.css";
import { useState } from "react";
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

  return (
    <div>
      <BrowserRouter>
        <Header currentPage={currentPage} />
        <div className={currentPage}>
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/projects" element={<ProjectsList />} />
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
