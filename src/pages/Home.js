import './Home.css';
import myImage from '../resources/image.webp';
import Typing from '../components/Typing';
import NavBar from "../components/NavBar";
import Socialicons from '../components/Socialicons';

function Home(){
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
        <Socialicons/>
      </div>

      <div className='right'>
        <div className="myDescription">
        <p style={nameStyle}>Hello, I am</p>
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
        <p>A CS student passionate about learning new technologies and building useful real-life products</p>
        <p>
          I specialize in DSA,Web dev and SQL queries and constantly seeking new oppurtunities to improve on my skills.Explore my portfolio to see my work and get in touch!.
        </p>
        </div>
        <img src={myImage} alt="Profile" className="profile-image" />
      </div>
      
    </div>
    </>
  )
}
export default Home;