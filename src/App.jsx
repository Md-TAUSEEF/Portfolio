import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./Components/Pages/About";
import Home from './Components/Pages/Home';
import Contact from "./Components/Pages/Contact";
import Project from "./Components/Pages/Project";
import Skill from "./Components/Pages/Skill"
import Certificate from "./Components/Certificate";



import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skill" element={<Skill/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path='/certificate' element={<Certificate/>}/>
          
         
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
