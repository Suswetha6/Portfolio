import './NavBar.css';
import { Link } from 'react-router-dom';
function NavBar(){
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className='nav-item'><Link to="/" >Home</Link></li>
          <li className='nav-item'><Link to="/education">Education</Link></li>
          <li className='nav-item'><Link to="/about">About</Link></li>
          <li className='nav-item'><a >Project</a></li>
          <li className='nav-item'><a >Resume</a></li>
        </ul>
      </nav>
    
    </>
  )
}
export default NavBar