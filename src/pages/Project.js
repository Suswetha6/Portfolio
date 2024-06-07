import './Project.css'
import NavBar from '../components/NavBar';
import Socialicons from '../components/Socialicons';

function Project(){
  return (
    <>
    <div className='projectContainer'>
    <NavBar/>
    <h2 className='slide-in'>Coming Soon</h2>
    </div>
    <Socialicons 
      bgColorIcon ={'orange'}/>
    </>
    
    
    
  )

}

export default Project;