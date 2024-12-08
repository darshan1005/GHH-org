import Nav from "./Components/Nav-bar/Nav.jsx";
import Hero from "./Components/Hero/hero.jsx";
import Top from "./Components/Top-button/top.jsx";
import Aboutus from "./Components/About/about.jsx";
import Ourwork from "./Components/Ourwork/ourwork.jsx";
import Instruct from "./Components/Instructions/Instruct.jsx";
import Footer from "./Components/Footer/footer.jsx";
import GridImages from "./Components/Grid-gallery/grid-images.jsx";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Nav />
      <Hero />
      <Aboutus />
      <Ourwork />
      <GridImages />
      <Footer />
      <Instruct />
      <Top />
    </>
  );
};

export default App;
