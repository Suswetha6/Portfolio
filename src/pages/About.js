import "./About.css"
import NavBar from "../components/NavBar"
import Socialicons from "../components/Socialicons"
import walk from "../resources/walk.webp"
import study from "../resources/study.webp";
function About(){
  return(
    <>
    <NavBar/>
    <div className="Aboutcontainer">
      <div className="Aboutleft">
        <h1>About Me</h1>
        <p>
          I did most of my schooling in Vijayawada,Andhra pradesh.Beacuse i was more interested in pedagogy rather than the traditional learning path , i joined Scaler School Of technology to learn things by doing.So far, i've improved upon Data structures and Algorthims , CS math , Web Developmentv using react.Right now, i am working on improving my skills and to build useful projects and improving my resume.
          Apart from the academics , i am also actively involved in extra-cirruculars being a passionate classical dancer and the core memeber of the Cultural Club of SST.
          Feel free to connect with me.Let's chat over a garam cup of chai!!.
        </p>
      </div>
      <div className="Aboutright">
        <img src={walk}/>
      </div>
    </div>
    <Socialicons/>
    </>
  )
}
export default About;