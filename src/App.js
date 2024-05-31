import logo from './logo.svg';
import './App.css';
import myImage from '/home/suswetha/webdev/src/resources/image.webp';
import Typing from './components/Typing';
import NavBar from './components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  const nameStyle = {
    fontWeight: 'bold', 
    fontSize: '30px' 
  };

  return (
    <>
    <NavBar/>
   <div className='container'>
      <div className='left'>
        <div id="signature">
          Suswetha
        </div>
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
        </div>
      </div>

      <div className='right'>
        <div className="myDescription">
        <p style={nameStyle}>Hello,I am</p>
        <p style={nameStyle}>Suswetha</p>
        <p><Typing 
        text={
          [
            "React Web Developer",
            "CS Student",
            "Enjoy my portfolio"
          ]
        }
        typingSpeed ={10}
        deletingSpeed={50}
        /></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, mollitia aut similique voluptas libero iste fuga perspiciatis praesentium in earum harum voluptatum molestiae tempora cumque at!</p>
        <p>
          Saepe sunt velit qui! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis qui et natus! Iusto velit placeat provident eligendi qui neque non deserunt consequatur, iure, quibusdam numquam dolores beatae. Ipsa, accusamus aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio, dolores ut eos quae, repudiandae quia voluptate inventore vitae magni distinctio maiores. Praesentium odit saepe quisquam numquam libero? Odit, nulla?
        </p>
        </div>
        <img src={myImage} alt="Profile" className="profile-image" />
      </div>
      
    </div>
    </>
  );
}

export default App;
