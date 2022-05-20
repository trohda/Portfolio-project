import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import "./AppStyle.css";
import { useEffect, useState } from "react";

function App() {
  // const [style, setStyle] = useState("underConstruction");

  // const styles = () => {
  //   setStyle("underConstructionOnLoad");
  // };

  // const time = setTimeout(styles, 1500);

  // const styles =
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
