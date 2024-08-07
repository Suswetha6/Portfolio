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
          <li className='nav-item'><Link to="/project">Projects</Link></li>
          <li className='nav-item'><a href="https://drive.google.com/file/d/1VkjwkufjxpAuQCyIeUfZDO3MzaInfAIA/view?usp=sharing" target="_blank" rel="noopener noreferrer" >Resume</a></li>
        </ul>
      </nav>
    
    </>
  )
}
export default NavBar