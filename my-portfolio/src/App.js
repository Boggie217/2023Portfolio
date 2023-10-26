import './App.css';
import Contact from './Components/contact';
import Hero from './Components/hero';
import About from './Components/about';
import Projects from './Components/projects';
import Footer from './Components/footer';
import Navbar from './Components/navBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        
        <Hero />
        
        <About />
        
        <Projects />
        <Contact />
        
      </header>
<Footer />
    </div>
  );
}

export default App;
