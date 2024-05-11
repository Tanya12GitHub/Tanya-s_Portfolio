import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Certificates/works";
import Project from "./components/Project/proj";
import Contact from "./components/Contact/contact";
import Footer from  "./components/Footer/footer";
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Project/>
      <Contact/>
      <Footer/>
    
      
      
    </div>
  );
}

export default App;
