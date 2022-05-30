import logo from './logo.svg';
import './App.css';
import ColorMode from './components/ColorMode';
import Intro from './components/Intro';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <>
      <ParallaxProvider>
        <ColorMode />
        <Intro />
        <Work />
        <About />
        <Footer />
      </ParallaxProvider>
    </>
  );
}

export default App;
