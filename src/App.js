import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";

import Contact from "./components/Contact/Contact";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import "./AppStyle.css";

import Footer from "./components/Footer/Footer";
import PageLayout from "./components/PageLayout/PageLayout";

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
    <div>
      <BrowserRouter>
        <PageLayout>
          <Header />

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/projects" element={<ProjectsList />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageLayout>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
