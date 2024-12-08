import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Hero from "./Components/Hero/hero.jsx";
import Top from "./Components/Top-button/top.jsx";
import Aboutus from "./Components/About/about.jsx";
import Instruct from "./Components/Instructions/Instruct.jsx";
import Footer from "./Components/Footer/footer.jsx";
import Nav from "./Components/Nav-bar/Nav.jsx";
import GridImages from "./Components/Grid-gallery/grid-images.jsx";
import { TimeLine } from "./Components/TimeLine/timeLine.jsx";
import { Stories } from "./Components/Stories/stories.jsx";

const App = () => {
  return (
    <Router>
      <Nav />
      <Top />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Aboutus />
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
      </Routes>
    </Router>
  );
};

export default App;
