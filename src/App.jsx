import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Achedemics from "./Pages/Achedemics";
import About from "./Components/About/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Admission from "./Pages/Admission";
import Faculity from "./Pages/Faculity";
import Gallery from "./Pages/Gallery";
import Student from "./Pages/Student";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={<About setPlayState={setPlayState} />}
          />
          <Route path="/achedemics" element={<Achedemics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/faculity" element={<Faculity />} />
          <Route
            path="/gallery"
            element={<Gallery setPlayState={setPlayState} />}
          />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/students" element={<Student />} />
        </Routes>
        <VideoPlayer setPlayState={setPlayState} playState={playState} />
      </div>
      <Footer />
    </>
  );
};

export default App;
