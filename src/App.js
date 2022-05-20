import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
