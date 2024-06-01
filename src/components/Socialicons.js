import './Socialicons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Socialicons({bgColorIcon}){
  return(
    <div className={`social-icons ${bgColorIcon}`}>
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
  )
}
export default Socialicons;