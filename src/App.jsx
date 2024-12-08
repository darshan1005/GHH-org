import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Nav from "./Components/Nav-bar/Nav.jsx";
import Hero from "./Components/Hero/hero.jsx";
import Top from "./Components/Top-button/top.jsx";
import Aboutus from "./Components/About/about.jsx";
import Instruct from "./Components/Instructions/Instruct.jsx";
import Footer from "./Components/Footer/footer.jsx";
import GridImages from "./Components/Grid-gallery/grid-images.jsx";
import { TimeLine } from "./Components/TimeLine/timeLine.jsx";
import { Stories } from "./Components/Stories/stories.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Hero />
              <Aboutus />
              <Footer />
              <Instruct />
              <Top />
            </>
          }
        />

        {/* Gallery Page */}
        <Route
          path="/gallery"
          element={
            <>
              <Nav />
              <GridImages />
            </>
          }
        />
        <Route
          path="/timeLine"
          element={
            <>
              <Nav />
              <TimeLine />
            </>
          }
        />
        <Route
          path="/stories"
          element={
            <>
              <Nav />
              <Stories />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
