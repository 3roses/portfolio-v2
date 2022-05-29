import logo from './logo.svg';
import './App.css';
import ColorMode from './components/ColorMode';
import Intro from './components/Intro';
import Work from './components/Work';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <>
      <ParallaxProvider>
        <ColorMode />
        <Intro />
        <Work />
      </ParallaxProvider>
    </>
  );
}

export default App;
