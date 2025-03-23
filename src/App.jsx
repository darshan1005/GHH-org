import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./Components/Hero/HeroMain.jsx";
import { Instruct } from "./Components/Instructions/Instruct.jsx";
import { Nav } from "./Components/Nav-bar/NavHeader.jsx";
import { GridImages } from "./Components/Grid-gallery/GridImages.jsx";
import { Stories } from "./Components/Stories/AllStories.jsx";
import { SingelStory } from "./Components/Stories/EachStory.jsx";
import { TopButton } from "./Components/Top-button/TopButton.jsx";
import { About } from "./Components/About/AboutGhh.jsx";
import { Footer } from "./Components/Footer/FooterGhh.jsx";
import { TimeLine } from "./Components/TimeLine/TimeLineGhh.jsx";
import { Banner } from "./Components/Banner/Banner.jsx";
import { CustomAlert } from "./Components/Banner/CustomAlert.jsx";

const App = () => {
  return (
    <Router>
      <Nav />
      <TopButton />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <CustomAlert />
              <Hero />
              <Banner />
              <About />
              <Footer />
              <Instruct />
            </>
          }
        />
        {/* Gallery Page */}
        <Route path="/gallery" element={<GridImages />} />
        {/* TimeLine Page */}
        <Route path="/timeLine" element={<TimeLine />} />
        {/* Stories Page */}
        <Route path="/stories" element={<Stories />} />
        {/* Single Story Page */}
        <Route path="/blog/:id" element={<SingelStory />} />
      </Routes>
    </Router>
  );
};

export default App;
