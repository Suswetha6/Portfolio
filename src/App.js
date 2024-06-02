import './App.css';
import Home from './pages/Home';
import Education from './pages/Education';
import About from './pages/About';
import {Routes,Route} from "react-router-dom";
function App() {
  return(
    <Routes>
     <Route path='/' element={<Home/>}  />
     <Route path='/education' element={<Education/>} />
     <Route path='/about' element={<About/>}/>
    </Routes>
  )
}

export default App;
