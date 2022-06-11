
import './App.css';
import { useEffect, useState } from 'react';

import Preloader from "../src/components/Pre";


import Home from './components/Home/Home';

import About from './components/About/About';
import ResumeNew from './components/Resume/ResumeNew';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import NavBar from './components/Navbar';
import Contact from './components/Contact/Contact';
import Blogs from './components/Blogs/Blogs';
import Services from './components/Services/Services/Services';
import ProjectsDetails from './components/Services/ProjectsDetails';



function App() {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);






  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<ResumeNew />} />
          <Route path="/Contact" element={<Contact></Contact>}></Route>
          <Route path="/Blogs" element={<Blogs></Blogs>}></Route>

          <Route path="/projects" element={<Services></Services>}></Route>
          <Route path="/details" element={<ProjectsDetails></ProjectsDetails>}></Route>


          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
