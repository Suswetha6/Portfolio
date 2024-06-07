import './App.css';
import Home from './pages/Home';
import Education from './pages/Education';
import About from './pages/About';
import Project from './pages/Project';
import {Routes,Route} from "react-router-dom";
function App() {
  return(
    <Routes>
     <Route path='/' element={<Home/>}  />
     <Route path='/education' element={<Education/>} />
     <Route path='/about' element={<About/>}/>
     <Route path='/project' element ={<Project/>}/>
    </Routes>
  )
}

export default App;
