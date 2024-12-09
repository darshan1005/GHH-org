import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import { Hero } from "./Components/Hero/hero.jsx";
import { About } from "./Components/About/About.jsx";
import { Instruct } from "./Components/Instructions/Instruct.jsx";
import { Footer } from "./Components/Footer/footer.jsx";
import { Nav } from "./Components/Nav-bar/Nav.jsx";
import { GridImages } from "./Components/Grid-gallery/grid-images.jsx";
import { TimeLine } from "./Components/TimeLine/timeLine.jsx";
import { Stories } from "./Components/Stories/stories.jsx";
import { SingelStory } from "./Components/Stories/singleStory.jsx";
import { TopButton } from "./Components/Top-button/TopButton.jsx";

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
              <Hero />
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
        {/* Single Story */}
        <Route path="/blog/:id" element={<SingelStory />} />
      </Routes>
    </Router>
  );
};

export default App;
