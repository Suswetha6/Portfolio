import "./About.css"
import NavBar from "../components/NavBar"
import Socialicons from "../components/Socialicons"
import walk from "/home/suswetha/webdev/src/resources/walk.webp"
import study from "/home/suswetha/webdev/src/resources/study.webp";
function About(){
  return(
    <>
    <NavBar/>
    <div className="Aboutcontainer">
      <div className="Aboutleft">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deleniti quod consequuntur voluptatibus aliquid vitae id excepturi blanditiis, inventore molestias dolore explicabo iusto quae esse, minus facere, earum molestiae odio.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, voluptatem autem. Omnis at autem amet similique libero dolore, et sapiente a explicabo animi, iure, provident possimus reprehenderit vel laboriosam placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos rerum enim veritatis adipisci accusantium nam odit ratione beatae esse officia quisquam, eum illum placeat quae eos commodi aliquam velit.
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