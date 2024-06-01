import './App.css';
import Home from './pages/Home';
import Education from './pages/Education';
import {Routes,Route} from "react-router-dom";
function App() {
  return(
    <Routes>
     <Route path='/' element={<Home/>}  />
     <Route path='/education' element={<Education/>} />
    </Routes>
  )
}

export default App;
