import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import {Route,Routes} from 'react-router-dom';
import Home from './components/home';
import Education from './components/education';
import Achievements from './components/achievements';
import Hobbies from './components/hobbies';
import Contacts from './components/contacts';
import Advise_form from './components/advise_form';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>;
      <Route path="/education" element={<Education/>}/>;
      <Route path="/achievements" element={<Achievements/>}/>;
      <Route path="/hobbies" element={<Hobbies/>}/>;
      <Route path="/contacts" element={<Contacts/>}/>;
      <Route path="/advise" element={<Advise_form/>}/>;
    </Routes>
  );
}

export default App;
