import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Education />
      <Achievements />
      <Hobbies />
      <Footer />
    </>
  );
}

export default App;
