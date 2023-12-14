import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import MyExprience from "./components/MyExprience";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <MyExprience/>
      <Portfolio />
      <Experience/>
      <Contact />
      <Footer/>
      <SocialLinks />
    </div>
  );
}

export default App;
